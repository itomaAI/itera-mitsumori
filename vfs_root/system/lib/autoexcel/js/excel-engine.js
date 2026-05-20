class ExcelEngine {
    static encodeCol(colNumber) {
        let n = colNumber;
        let s = '';
        while (n > 0) {
            const rem = (n - 1) % 26;
            s = String.fromCharCode(65 + rem) + s;
            n = Math.floor((n - 1) / 26);
        }
        return s;
    }

    static decodeCol(colLetters) {
        let n = 0;
        for (const ch of String(colLetters).toUpperCase()) {
            if (ch < 'A' || ch > 'Z') continue;
            n = n * 26 + (ch.charCodeAt(0) - 64);
        }
        return n;
    }

    static parseCellAddress(address) {
        const m = String(address || '').trim().match(/^([A-Za-z]+)(\d+)$/);
        if (!m) throw new Error(`Invalid cell address: ${address}`);
        return { col: this.decodeCol(m[1]), row: parseInt(m[2], 10) };
    }

    static encodeCell(row, col) {
        return `${this.encodeCol(col)}${row}`;
    }

    static parseRange(range) {
        const parts = String(range || '').trim().split(':');
        const a = this.parseCellAddress(parts[0]);
        const b = parts[1] ? this.parseCellAddress(parts[1]) : a;
        return {
            startRow: Math.min(a.row, b.row),
            endRow: Math.max(a.row, b.row),
            startCol: Math.min(a.col, b.col),
            endCol: Math.max(a.col, b.col)
        };
    }

    static getWorksheet(bookRecord, sheetName) {
        if (!bookRecord) throw new Error('Book is not selected.');
        const ws = bookRecord.workbook.getWorksheet(sheetName || bookRecord.activeSheetName);
        if (!ws) throw new Error(`Sheet not found: ${sheetName || bookRecord.activeSheetName}`);
        return ws;
    }

    static listSheets(bookRecord) {
        return bookRecord.workbook.worksheets.map(ws => ws.name);
    }

    static cellDisplayValue(cell, mode = 'value') {
        if (!cell) return '';
        if (mode === 'formula' && cell.formula) return `=${cell.formula}`;

        const v = cell.value;
        if (v === undefined || v === null) return '';
        if (typeof v === 'object') {
            if (v.formula) return mode === 'formula' ? `=${v.formula}` : (v.result ?? `=${v.formula}`);
            if (v.richText) return v.richText.map(x => x.text).join('');
            if (v.text) return v.text;
            if (v.hyperlink && v.text) return v.text;
            if (v.result !== undefined) return v.result;
            if (v instanceof Date) return v.toISOString();
            return JSON.stringify(v);
        }
        return v;
    }

    static parseUserValue(value) {
        if (typeof value !== 'string') return value;
        const s = value;
        if (s.startsWith('=')) return { formula: s.slice(1) };
        if (s.trim() !== '' && /^-?\d+(\.\d+)?$/.test(s.trim())) return Number(s.trim());
        return s;
    }

    static writeCell(bookRecord, sheetName, address, value) {
        const ws = this.getWorksheet(bookRecord, sheetName);
        const cell = ws.getCell(address);
        const incomingText = String(value ?? '');
        const oldDisplay = String(this.cellDisplayValue(cell, incomingText.startsWith('=') ? 'formula' : 'value') ?? '');

        if (oldDisplay === incomingText) {
            return `No change at ${address}`;
        }

        cell.value = this.parseUserValue(value);
        bookRecord.dirty = true;
        return `Wrote ${address}`;
    }

    static readRange(bookRecord, sheetName, rangeStr, mode = 'value') {
        const ws = this.getWorksheet(bookRecord, sheetName);
        const r = this.parseRange(rangeStr);
        const rows = [];
        for (let row = r.startRow; row <= r.endRow; row++) {
            const arr = [];
            for (let col = r.startCol; col <= r.endCol; col++) {
                arr.push(this.cellDisplayValue(ws.getCell(row, col), mode));
            }
            rows.push(arr);
        }
        return rows;
    }

    static inspectSheet(bookRecord, sheetName, startRow = 1, maxRows = 100, displayMode = 'value') {
        const ws = this.getWorksheet(bookRecord, sheetName);
        const sRow = Math.max(1, parseInt(startRow, 10) || 1);
        const mRows = Math.max(1, Math.min(1000, parseInt(maxRows, 10) || 100));
        const endRow = Math.min(Math.max(ws.rowCount || 1, sRow), sRow + mRows - 1);
        const maxCol = Math.max(1, Math.min(100, ws.columnCount || 20));

        const out = [];
        out.push(['(idx)', ...Array.from({ length: maxCol }, (_, i) => this.encodeCol(i + 1))]);

        for (let row = sRow; row <= endRow; row++) {
            const arr = [String(row)];
            for (let col = 1; col <= maxCol; col++) {
                arr.push(this.formatCellForInspection(ws.getCell(row, col), displayMode));
            }
            out.push(arr);
        }

        return this.toCSV(out);
    }

    static inspectRange(bookRecord, sheetName, rangeStr, displayMode = 'value') {
        const ws = this.getWorksheet(bookRecord, sheetName);
        const r = this.parseRange(rangeStr);
        const out = [];
        const header = ['(idx)'];
        for (let col = r.startCol; col <= r.endCol; col++) {
            header.push(this.encodeCol(col));
        }
        out.push(header);

        for (let row = r.startRow; row <= r.endRow; row++) {
            const arr = [String(row)];
            for (let col = r.startCol; col <= r.endCol; col++) {
                arr.push(this.formatCellForInspection(ws.getCell(row, col), displayMode));
            }
            out.push(arr);
        }

        return this.toCSV(out);
    }

    static formatCellForInspection(cell, displayMode = 'value') {
        if (displayMode === 'style') {
            return JSON.stringify(StyleUtils.summarizeStyle(cell));
        }
        if (displayMode === 'value_and_style') {
            return JSON.stringify({
                value: this.cellDisplayValue(cell, 'value'),
                formula: cell.formula ? `=${cell.formula}` : null,
                style: StyleUtils.summarizeStyle(cell)
            });
        }
        return this.cellDisplayValue(cell, displayMode);
    }

    static getSheetDimensions(bookRecord, sheetName) {
        const ws = this.getWorksheet(bookRecord, sheetName);
        let firstRow = null;
        let firstCol = null;
        let lastRow = 0;
        let lastCol = 0;
        let nonEmptyCells = 0;
        let formulaCells = 0;
        let numericCells = 0;

        ws.eachRow({ includeEmpty: false }, (row, rowNumber) => {
            row.eachCell({ includeEmpty: false }, (cell, colNumber) => {
                if (!this.cellHasContent(cell)) return;

                if (firstRow === null || rowNumber < firstRow) firstRow = rowNumber;
                if (firstCol === null || colNumber < firstCol) firstCol = colNumber;
                if (rowNumber > lastRow) lastRow = rowNumber;
                if (colNumber > lastCol) lastCol = colNumber;

                nonEmptyCells++;
                if (cell.formula || (cell.value && typeof cell.value === 'object' && cell.value.formula)) formulaCells++;
                if (typeof cell.value === 'number') numericCells++;
            });
        });

        const hiddenRows = [];
        for (let r = 1; r <= Math.max(ws.rowCount || 0, lastRow); r++) {
            if (ws.getRow(r).hidden) hiddenRows.push(r);
        }

        const hiddenCols = [];
        for (let c = 1; c <= Math.max(ws.columnCount || 0, lastCol); c++) {
            if (ws.getColumn(c).hidden) hiddenCols.push(this.encodeCol(c));
        }

        const mergedRanges = ws._merges
            ? Object.keys(ws._merges)
            : [];

        const usedRange = nonEmptyCells === 0
            ? null
            : `${this.encodeCell(firstRow, firstCol)}:${this.encodeCell(lastRow, lastCol)}`;

        return {
            sheet: ws.name,
            rowCount: ws.rowCount || 0,
            columnCount: ws.columnCount || 0,
            actualRowCount: ws.actualRowCount || 0,
            actualColumnCount: ws.actualColumnCount || 0,
            firstNonEmptyRow: firstRow,
            firstNonEmptyCol: firstCol ? this.encodeCol(firstCol) : null,
            lastNonEmptyRow: nonEmptyCells === 0 ? null : lastRow,
            lastNonEmptyCol: nonEmptyCells === 0 ? null : this.encodeCol(lastCol),
            usedRange,
            nonEmptyCells,
            numericCells,
            formulaCells,
            hiddenRows,
            hiddenCols,
            mergedRanges,
            isEmpty: nonEmptyCells === 0
        };
    }

    static cellHasContent(cell) {
        if (!cell) return false;
        if (cell.formula) return true;
        const v = cell.value;
        if (v === undefined || v === null) return false;
        if (typeof v === 'string') return v.trim() !== '';
        if (typeof v === 'object') {
            if (v.formula) return true;
            if (v.result !== undefined && v.result !== null && String(v.result).trim() !== '') return true;
            if (v.richText && v.richText.some(x => String(x.text || '').trim() !== '')) return true;
            if (v.text && String(v.text).trim() !== '') return true;
            if (v.hyperlink) return true;
            return Object.keys(v).length > 0;
        }
        return true;
    }

    static getCellInfo(bookRecord, sheetName, rangeStr) {
        const ws = this.getWorksheet(bookRecord, sheetName);
        const r = this.parseRange(rangeStr);
        const infos = [];
        for (let row = r.startRow; row <= r.endRow; row++) {
            for (let col = r.startCol; col <= r.endCol; col++) {
                const cell = ws.getCell(row, col);
                infos.push({
                    cell: this.encodeCell(row, col),
                    value: this.cellDisplayValue(cell, 'value'),
                    formula: cell.formula ? `=${cell.formula}` : null,
                    type: cell.type,
                    style: StyleUtils.summarizeStyle(cell)
                });
            }
        }
        return infos;
    }

    static searchCells(bookRecord, sheetName, query, opts = {}) {
        const ws = this.getWorksheet(bookRecord, sheetName);
        const rawQuery = String(query ?? '');
        if (!rawQuery) throw new Error('Search query is empty.');

        const caseSensitive = opts.caseSensitive === true || opts.caseSensitive === 'true';
        const useRegex = opts.regex === true || opts.regex === 'true';
        const maxResults = Math.max(1, Math.min(1000, parseInt(opts.maxResults, 10) || 100));

        const needle = caseSensitive ? rawQuery : rawQuery.toLowerCase();
        const regex = useRegex ? new RegExp(rawQuery, caseSensitive ? 'g' : 'gi') : null;
        const results = [];

        ws.eachRow({ includeEmpty: false }, (row, rowNumber) => {
            if (results.length >= maxResults) return;

            row.eachCell({ includeEmpty: false }, (cell, colNumber) => {
                if (results.length >= maxResults) return;

                const value = this.cellDisplayValue(cell, 'value');
                const formula = cell.formula ? `=${cell.formula}` : null;
                const haystackRaw = [value, formula].filter(v => v !== null && v !== undefined).join(' ');
                const haystack = caseSensitive ? haystackRaw : haystackRaw.toLowerCase();

                const matched = useRegex ? regex.test(haystackRaw) : haystack.includes(needle);
                if (useRegex && regex) regex.lastIndex = 0;
                if (!matched) return;

                results.push({
                    cell: this.encodeCell(rowNumber, colNumber),
                    row: rowNumber,
                    col: colNumber,
                    colName: this.encodeCol(colNumber),
                    value,
                    formula,
                    type: cell.type
                });
            });
        });

        return {
            sheet: ws.name,
            query: rawQuery,
            count: results.length,
            truncated: results.length >= maxResults,
            results
        };
    }

    static writeBlock(bookRecord, sheetName, startCell, csvText) {
        const ws = this.getWorksheet(bookRecord, sheetName);
        const start = this.parseCellAddress(startCell);
        const rows = this.parseTableText(csvText || '');
        let changed = 0;

        for (let r = 0; r < rows.length; r++) {
            for (let c = 0; c < rows[r].length; c++) {
                const cell = ws.getCell(start.row + r, start.col + c);
                const incoming = String(rows[r][c] ?? '');
                const oldDisplay = String(this.cellDisplayValue(cell, incoming.startsWith('=') ? 'formula' : 'value') ?? '');
                if (oldDisplay === incoming) continue;
                cell.value = this.parseUserValue(rows[r][c]);
                changed++;
            }
        }

        if (changed > 0) bookRecord.dirty = true;
        return changed > 0
            ? `Wrote block at ${startCell} (${rows.length} rows, ${changed} changed cells)`
            : `No change at ${startCell}`;
    }

    static copyRange(srcBook, srcSheet, srcRange, tgtBook, tgtSheet, tgtCell, move = false) {
        const srcWs = this.getWorksheet(srcBook, srcSheet);
        const tgtWs = this.getWorksheet(tgtBook, tgtSheet);
        const range = this.parseRange(srcRange);
        const target = this.parseCellAddress(tgtCell);
        let count = 0;

        for (let r = range.startRow; r <= range.endRow; r++) {
            for (let c = range.startCol; c <= range.endCol; c++) {
                const srcCell = srcWs.getCell(r, c);
                const dstCell = tgtWs.getCell(target.row + (r - range.startRow), target.col + (c - range.startCol));
                dstCell.value = this.cloneValue(srcCell.value);
                dstCell.style = JSON.parse(JSON.stringify(srcCell.style || {}));
                count++;
            }
        }

        if (move) {
            this.clearRange(srcBook, srcSheet, srcRange);
        }

        tgtBook.dirty = true;
        if (move) srcBook.dirty = true;
        return `${move ? 'Moved' : 'Copied'} ${count} cells`;
    }

    static clearRange(bookRecord, sheetName, rangeStr) {
        const ws = this.getWorksheet(bookRecord, sheetName);
        const r = this.parseRange(rangeStr);
        let count = 0;
        for (let row = r.startRow; row <= r.endRow; row++) {
            for (let col = r.startCol; col <= r.endCol; col++) {
                ws.getCell(row, col).value = null;
                count++;
            }
        }
        bookRecord.dirty = true;
        return `Cleared ${count} cells`;
    }

    static insertRows(bookRecord, sheetName, row, count) {
        const ws = this.getWorksheet(bookRecord, sheetName);
        ws.spliceRows(parseInt(row, 10), 0, ...Array.from({ length: parseInt(count, 10) || 1 }, () => []));
        bookRecord.dirty = true;
        return `Inserted ${count} rows at ${row}`;
    }

    static deleteRows(bookRecord, sheetName, row, count) {
        const ws = this.getWorksheet(bookRecord, sheetName);
        ws.spliceRows(parseInt(row, 10), parseInt(count, 10) || 1);
        bookRecord.dirty = true;
        return `Deleted ${count} rows at ${row}`;
    }

    static setCellStyle(bookRecord, sheetName, rangeStr, patch) {
        const ws = this.getWorksheet(bookRecord, sheetName);
        const r = this.parseRange(rangeStr);
        const parsed = typeof patch === 'string' ? JSON.parse(patch) : patch;
        let count = 0;
        for (let row = r.startRow; row <= r.endRow; row++) {
            for (let col = r.startCol; col <= r.endCol; col++) {
                StyleUtils.applyStylePatch(ws.getCell(row, col), parsed);
                count++;
            }
        }
        bookRecord.dirty = true;
        return `Styled ${count} cells`;
    }

    static getCellStyle(bookRecord, sheetName, rangeStr) {
        const ws = this.getWorksheet(bookRecord, sheetName);
        const r = this.parseRange(rangeStr);
        const out = [];
        for (let row = r.startRow; row <= r.endRow; row++) {
            for (let col = r.startCol; col <= r.endCol; col++) {
                out.push({
                    cell: this.encodeCell(row, col),
                    style: StyleUtils.summarizeStyle(ws.getCell(row, col))
                });
            }
        }
        return out;
    }

    static cloneValue(value) {
        if (value === null || value === undefined) return value;
        if (typeof value === 'object') return JSON.parse(JSON.stringify(value));
        return value;
    }

    static toCSV(rows) {
        return rows.map(row => row.map(v => {
            const s = v === undefined || v === null ? '' : String(v);
            return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
        }).join(',')).join('\n');
    }

    static parseTableText(text) {
        const s = String(text || '');
        if (s.includes('\t')) {
            return s
                .replace(/\r\n/g, '\n')
                .replace(/\r/g, '\n')
                .split('\n')
                .filter((line, idx, arr) => !(idx === arr.length - 1 && line === ''))
                .map(line => line.split('\t'));
        }
        return this.parseCSV(s);
    }

    static parseCSV(text) {
        const rows = [];
        let row = [];
        let cell = '';
        let inQuotes = false;
        const s = String(text || '');

        for (let i = 0; i < s.length; i++) {
            const ch = s[i];
            const next = s[i + 1];

            if (inQuotes) {
                if (ch === '"' && next === '"') {
                    cell += '"';
                    i++;
                } else if (ch === '"') {
                    inQuotes = false;
                } else {
                    cell += ch;
                }
                continue;
            }

            if (ch === '"') {
                inQuotes = true;
            } else if (ch === ',') {
                row.push(cell);
                cell = '';
            } else if (ch === '\n') {
                row.push(cell);
                rows.push(row);
                row = [];
                cell = '';
            } else if (ch !== '\r') {
                cell += ch;
            }
        }

        row.push(cell);
        if (row.length > 1 || row[0] !== '') rows.push(row);
        return rows;
    }
}

window.ExcelEngine = ExcelEngine;