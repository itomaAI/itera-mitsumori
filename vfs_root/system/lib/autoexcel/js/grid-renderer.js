class GridRenderer {
    constructor(manager, dom) {
        this.manager = manager;
        this.dom = dom;
        this.selectedCell = null;
        this.selectionStart = null;
        this.selectionEnd = null;
        this.isMouseSelecting = false;
        this.maxRows = 500;
        this.maxCols = 50;
        this.bindGlobalHandlers();
    }

    bindGlobalHandlers() {
        document.addEventListener('mouseup', () => {
            this.isMouseSelecting = false;
        });

        document.addEventListener('keydown', event => {
            if (!this.manager.activeBookId) return;
            if (event.target === this.dom.formulaInput) return;

            if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'c') {
                event.preventDefault();
                this.copySelectionToClipboard();
                return;
            }

            if ((event.key === 'Delete' || event.key === 'Backspace') && this.hasSelection()) {
                const active = this.manager.getActiveBook();
                this.manager.clearRange(active.id, active.activeSheetName, this.getSelectionRangeString());
                return;
            }
        });

        this.dom.grid.addEventListener('paste', event => {
            if (!this.manager.activeBookId || !this.selectedCell) return;
            const text = event.clipboardData && event.clipboardData.getData('text/plain');
            if (!text) return;
            event.preventDefault();

            const active = this.manager.getActiveBook();
            this.manager.writeBlock(active.id, active.activeSheetName, this.selectedCell, text);
        });
    }

    render() {
        this.renderBookTabs();
        this.renderSheetTabs();
        this.renderGrid();
        this.renderStatus();
    }

    renderStatus() {
        const books = this.manager.listBooks();
        if (!this.dom.statusLabel) return;
        if (!books.length) {
            this.dom.statusLabel.textContent = 'No workbook';
            return;
        }
        const active = this.manager.getActiveBook();
        const selection = this.hasSelection() ? ` / ${this.getSelectionRangeString()}` : '';
        this.dom.statusLabel.textContent = `${active.alias}${active.dirty ? ' *' : ''} / ${active.activeSheetName}${selection}`;
    }

    renderBookTabs() {
        const el = this.dom.bookTabs;
        const books = this.manager.listBooks();
        el.innerHTML = books.map(book => `
            <div class="book-tab ${book.id === this.manager.activeBookId ? 'active' : ''}" data-book-id="${this.escapeAttr(book.id)}">
                <span class="book-tab-title">${this.escapeHTML(book.alias)}${book.dirty ? ' *' : ''}</span>
                <span class="book-tab-close" data-close-book="${this.escapeAttr(book.id)}">×</span>
            </div>
        `).join('');

        el.querySelectorAll('.book-tab').forEach(tab => {
            tab.addEventListener('click', event => {
                if (event.target.dataset.closeBook) return;
                this.manager.setActiveBook(tab.dataset.bookId);
            });
        });

        el.querySelectorAll('[data-close-book]').forEach(btn => {
            btn.addEventListener('click', event => {
                event.stopPropagation();
                this.manager.closeBook(btn.dataset.closeBook);
            });
        });
    }

    renderSheetTabs() {
        const el = this.dom.sheetTabs;
        if (!this.manager.activeBookId) {
            el.innerHTML = '';
            return;
        }

        const book = this.manager.getActiveBook();
        const sheets = this.manager.listSheets(book.id);
        el.innerHTML = sheets.map(name => `
            <div class="sheet-tab ${name === book.activeSheetName ? 'active' : ''}" data-sheet-name="${this.escapeAttr(name)}">
                <span class="sheet-tab-title">${this.escapeHTML(name)}</span>
                <button class="sheet-tab-close" data-delete-sheet="${this.escapeAttr(name)}" title="Delete sheet" aria-label="Delete sheet">×</button>
            </div>
        `).join('');

        el.querySelectorAll('.sheet-tab').forEach(tab => {
            tab.addEventListener('click', event => {
                if (event.target.dataset.deleteSheet) return;
                this.selectedCell = null;
                this.selectionStart = null;
                this.selectionEnd = null;
                this.manager.setActiveSheet(book.id, tab.dataset.sheetName);
            });
        });

        el.querySelectorAll('[data-delete-sheet]').forEach(btn => {
            btn.addEventListener('click', event => {
                event.stopPropagation();

                const sheetName = btn.dataset.deleteSheet;
                const sheetCount = this.manager.listSheets(book.id).length;
                if (sheetCount <= 1) {
                    window.alert('最後の1シートは削除できません。');
                    return;
                }

                const ok = window.confirm(`シート「${sheetName}」を削除しますか？\nこの操作は保存前であればファイルには反映されませんが、現在の作業ブックからは削除されます。`);
                if (!ok) return;

                this.selectedCell = null;
                this.selectionStart = null;
                this.selectionEnd = null;
                this.manager.deleteSheet(book.id, sheetName);
            });
        });
    }

    renderGrid() {
        const el = this.dom.grid;
        if (!this.manager.activeBookId) {
            el.innerHTML = `<div class="empty-state">ブックが開かれていません。</div>`;
            return;
        }

        const book = this.manager.getActiveBook();
        const ws = ExcelEngine.getWorksheet(book, book.activeSheetName);

        let maxRow = Math.max(30, (ws.rowCount || 0) + 5);
        let maxCol = Math.max(12, (ws.columnCount || 0) + 3);
        maxRow = Math.min(maxRow, this.maxRows);
        maxCol = Math.min(maxCol, this.maxCols);

        const mergeMap = this.buildMergeMap(ws);
        const visibleCols = [];
        for (let col = 1; col <= maxCol; col++) {
            if (!ws.getColumn(col).hidden) visibleCols.push(col);
        }

        let html = '<table class="autoexcel-grid">';
        html += '<thead><tr><th class="grid-corner"></th>';
        for (const col of visibleCols) {
            const width = ws.getColumn(col).width;
            const widthStyle = width ? ` style="width:${Math.round(width * 7.2)}px;min-width:${Math.round(width * 7.2)}px"` : '';
            html += `<th class="col-header"${widthStyle}>${ExcelEngine.encodeCol(col)}</th>`;
        }
        html += '</tr></thead><tbody>';

        for (let row = 1; row <= maxRow; row++) {
            const excelRow = ws.getRow(row);
            if (excelRow.hidden) continue;

            const heightStyle = excelRow.height ? ` style="height:${excelRow.height}px"` : '';
            html += `<tr${heightStyle}><th class="row-header">${row}</th>`;

            for (const col of visibleCols) {
                const addr = ExcelEngine.encodeCell(row, col);
                const merge = mergeMap.get(addr);
                if (merge && merge.skip) continue;

                const cell = ws.getCell(row, col);
                const text = ExcelEngine.cellDisplayValue(cell, 'value');
                const css = StyleUtils.excelStyleToCss(cell, excelRow, ws.getColumn(col));
                const isPrimary = this.selectedCell === addr;
                const isInRange = this.isCellInSelection(addr);
                const classNames = [
                    'grid-cell',
                    isPrimary ? 'selected' : '',
                    isInRange ? 'range-selected' : '',
                    merge && merge.master ? 'merge-master' : ''
                ].filter(Boolean).join(' ');

                const spanAttrs = merge && merge.master
                    ? ` rowspan="${merge.rowspan}" colspan="${merge.colspan}"`
                    : '';

                html += `<td class="${classNames}" contenteditable="true" data-cell="${addr}" data-original="${this.escapeAttr(String(text ?? ''))}"${spanAttrs} style="${StyleUtils.cssObjectToString(css)}">${this.escapeHTML(text)}</td>`;
            }

            html += '</tr>';
        }

        html += '</tbody></table>';
        el.innerHTML = html;

        el.querySelectorAll('.grid-cell').forEach(cellEl => {
            cellEl.addEventListener('mousedown', event => {
                if (event.button !== 0) return;
                this.isMouseSelecting = true;
                this.selectCell(cellEl.dataset.cell, true);
            });

            cellEl.addEventListener('mouseenter', () => {
                if (!this.isMouseSelecting) return;
                this.selectionEnd = cellEl.dataset.cell;
                this.paintSelection();
            });

            cellEl.addEventListener('focus', () => {
                if (!this.isMouseSelecting) this.selectCell(cellEl.dataset.cell, false);
            });

            cellEl.addEventListener('click', () => {
                if (!this.isMouseSelecting) this.selectCell(cellEl.dataset.cell, false);
            });

            cellEl.addEventListener('blur', () => {
                const currentText = cellEl.textContent;
                const originalText = cellEl.dataset.original ?? '';
                if (currentText === originalText) return;

                const active = this.manager.getActiveBook();
                this.manager.writeCell(active.id, active.activeSheetName, cellEl.dataset.cell, currentText);
            });

            cellEl.addEventListener('keydown', event => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    cellEl.blur();
                    this.focusRelative(cellEl.dataset.cell, 1, 0);
                }
                if (event.key === 'Tab') {
                    event.preventDefault();
                    cellEl.blur();
                    this.focusRelative(cellEl.dataset.cell, 0, event.shiftKey ? -1 : 1);
                }
            });
        });
    }

    buildMergeMap(ws) {
        const map = new Map();
        const merges = ws && ws._merges ? Object.values(ws._merges) : [];

        for (const merge of merges) {
            const model = merge.model || merge.range || merge;
            const top = model.top ?? model.start?.row;
            const left = model.left ?? model.start?.column;
            const bottom = model.bottom ?? model.end?.row;
            const right = model.right ?? model.end?.column;
            if (!top || !left || !bottom || !right) continue;

            const masterAddr = ExcelEngine.encodeCell(top, left);
            map.set(masterAddr, {
                master: true,
                rowspan: bottom - top + 1,
                colspan: right - left + 1,
                top,
                left,
                bottom,
                right
            });

            for (let r = top; r <= bottom; r++) {
                for (let c = left; c <= right; c++) {
                    const addr = ExcelEngine.encodeCell(r, c);
                    if (addr === masterAddr) continue;
                    map.set(addr, { skip: true, masterAddr });
                }
            }
        }

        return map;
    }

    selectCell(address, startRange = false) {
        this.selectedCell = address;
        if (startRange || !this.selectionStart) {
            this.selectionStart = address;
        }
        this.selectionEnd = address;

        if (this.dom.activeCellLabel) this.dom.activeCellLabel.textContent = `Cell: ${address}`;
        if (this.dom.formulaInput && this.manager.activeBookId) {
            const book = this.manager.getActiveBook();
            const ws = ExcelEngine.getWorksheet(book, book.activeSheetName);
            const cell = ws.getCell(address);
            this.dom.formulaInput.value = cell.formula ? `=${cell.formula}` : ExcelEngine.cellDisplayValue(cell, 'value');
        }

        this.paintSelection();
        this.renderStatus();
    }

    paintSelection() {
        this.dom.grid.querySelectorAll('.grid-cell.selected').forEach(x => x.classList.remove('selected'));
        this.dom.grid.querySelectorAll('.grid-cell.range-selected').forEach(x => x.classList.remove('range-selected'));

        for (const el of this.dom.grid.querySelectorAll('.grid-cell')) {
            const addr = el.dataset.cell;
            if (addr === this.selectedCell) el.classList.add('selected');
            if (this.isCellInSelection(addr)) el.classList.add('range-selected');
        }

        this.renderStatus();
    }

    isCellInSelection(address) {
        if (!this.selectionStart || !this.selectionEnd || !address) return false;
        const r = this.getSelectionBounds();
        const p = ExcelEngine.parseCellAddress(address);
        return p.row >= r.startRow && p.row <= r.endRow && p.col >= r.startCol && p.col <= r.endCol;
    }

    getSelectionBounds() {
        const a = ExcelEngine.parseCellAddress(this.selectionStart || this.selectedCell);
        const b = ExcelEngine.parseCellAddress(this.selectionEnd || this.selectedCell);
        return {
            startRow: Math.min(a.row, b.row),
            endRow: Math.max(a.row, b.row),
            startCol: Math.min(a.col, b.col),
            endCol: Math.max(a.col, b.col)
        };
    }

    getSelectionRangeString() {
        const r = this.getSelectionBounds();
        const start = ExcelEngine.encodeCell(r.startRow, r.startCol);
        const end = ExcelEngine.encodeCell(r.endRow, r.endCol);
        return start === end ? start : `${start}:${end}`;
    }

    hasSelection() {
        return !!(this.selectionStart && this.selectionEnd);
    }

    async copySelectionToClipboard() {
        if (!this.hasSelection() || !this.manager.activeBookId) return;
        const book = this.manager.getActiveBook();
        const range = this.getSelectionBounds();
        const ws = ExcelEngine.getWorksheet(book, book.activeSheetName);
        const rows = [];

        for (let row = range.startRow; row <= range.endRow; row++) {
            const arr = [];
            for (let col = range.startCol; col <= range.endCol; col++) {
                arr.push(String(ExcelEngine.cellDisplayValue(ws.getCell(row, col), 'value') ?? ''));
            }
            rows.push(arr.join('\t'));
        }

        const text = rows.join('\n');

        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(text).catch(() => {});
        }
    }

    focusRelative(address, dRow, dCol) {
        const pos = ExcelEngine.parseCellAddress(address);
        const nextRow = Math.max(1, pos.row + dRow);
        const nextCol = Math.max(1, pos.col + dCol);
        const next = ExcelEngine.encodeCell(nextRow, nextCol);
        const el = this.dom.grid.querySelector(`[data-cell="${CSS.escape(next)}"]`);
        if (el) el.focus();
    }

    applyFormulaInput() {
        if (!this.selectedCell || !this.manager.activeBookId) return;
        const book = this.manager.getActiveBook();
        this.manager.writeCell(book.id, book.activeSheetName, this.selectedCell, this.dom.formulaInput.value);
    }

    escapeHTML(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    escapeAttr(value) {
        return this.escapeHTML(value);
    }
}

window.GridRenderer = GridRenderer;