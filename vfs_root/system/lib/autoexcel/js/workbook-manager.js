class WorkbookManager {
    constructor() {
        this.books = new Map();
        this.activeBookId = null;
        this.onChange = null;
    }

    emitChange(reason = 'change') {
        if (typeof this.onChange === 'function') this.onChange(reason);
    }

    makeId(alias) {
        const base = String(alias || 'Book').replace(/[^\w\u3040-\u30ff\u3400-\u9fff.-]+/g, '_');
        let id = base;
        let n = 2;
        while (this.books.has(id)) id = `${base}_${n++}`;
        return id;
    }

    async openFromVFS(path, alias = null) {
        const workbook = await VFSIO.readWorkbook(path);
        this.enableExcelRecalculation(workbook);

        const cleanAlias = alias || path.split('/').pop().replace(/\.xlsx$/i, '') || 'Workbook';
        const id = this.makeId(cleanAlias);
        const sheets = workbook.worksheets;
        if (sheets.length === 0) workbook.addWorksheet('Sheet1');

        this.books.set(id, {
            id,
            alias: cleanAlias,
            path,
            workbook,
            activeSheetName: workbook.worksheets[0].name,
            dirty: false,
            openedAt: new Date().toISOString()
        });
        this.activeBookId = id;
        this.emitChange('open');
        return id;
    }

    createBlankBook(alias = null) {
        if (!window.ExcelJS) throw new Error('ExcelJS is not loaded.');
        const name = alias || `Book${this.books.size + 1}`;
        const id = this.makeId(name);
        const workbook = new ExcelJS.Workbook();
        workbook.creator = 'AutoExcel';
        workbook.created = new Date();
        workbook.modified = new Date();
        this.enableExcelRecalculation(workbook);

        const sheet = workbook.addWorksheet('Sheet1');
        sheet.getCell('A1').value = '';
        sheet.columns = Array.from({ length: 12 }, () => ({ width: 12 }));

        this.books.set(id, {
            id,
            alias: name,
            path: `data/spreadsheets/${name}.xlsx`,
            workbook,
            activeSheetName: 'Sheet1',
            dirty: false,
            openedAt: new Date().toISOString()
        });
        this.activeBookId = id;
        this.emitChange('create');
        return id;
    }

    async duplicateBook(srcBookId, alias = null) {
        if (!window.ExcelJS) throw new Error('ExcelJS is not loaded.');
        const src = this.getBook(srcBookId);
        const name = alias || `${src.alias}_copy`;
        const id = this.makeId(name);

        const buffer = await src.workbook.xlsx.writeBuffer();
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(buffer);
        workbook.creator = workbook.creator || 'AutoExcel';
        workbook.modified = new Date();
        this.enableExcelRecalculation(workbook);

        const activeSheetName = workbook.getWorksheet(src.activeSheetName)
            ? src.activeSheetName
            : (workbook.worksheets[0] ? workbook.worksheets[0].name : 'Sheet1');

        if (workbook.worksheets.length === 0) workbook.addWorksheet('Sheet1');

        this.books.set(id, {
            id,
            alias: name,
            path: `data/spreadsheets/${name}.xlsx`,
            workbook,
            activeSheetName,
            dirty: false,
            openedAt: new Date().toISOString()
        });

        this.activeBookId = id;
        this.emitChange('duplicate-book');
        return id;
    }

    closeBook(bookId) {
        const id = bookId || this.activeBookId;
        if (!id || !this.books.has(id)) return;
        this.books.delete(id);
        if (this.activeBookId === id) {
            this.activeBookId = this.books.size ? this.books.keys().next().value : null;
        }
        this.emitChange('close');
    }

    setActiveBook(bookId) {
        if (!this.books.has(bookId)) throw new Error(`Book not found: ${bookId}`);
        this.activeBookId = bookId;
        this.emitChange('activate-book');
    }

    setActiveSheet(bookId, sheetName) {
        const book = this.getBook(bookId);
        const ws = book.workbook.getWorksheet(sheetName);
        if (!ws) throw new Error(`Sheet not found: ${sheetName}`);
        book.activeSheetName = sheetName;
        if (bookId) this.activeBookId = book.id;
        this.emitChange('activate-sheet');
    }

    addSheet(bookId, sheetName) {
        const book = this.getBook(bookId);
        const name = sheetName || `Sheet${book.workbook.worksheets.length + 1}`;
        if (book.workbook.getWorksheet(name)) throw new Error(`Sheet already exists: ${name}`);
        book.workbook.addWorksheet(name);
        book.activeSheetName = name;
        book.dirty = true;
        this.emitChange('add-sheet');
        return name;
    }

    deleteSheet(bookId, sheetName) {
        const book = this.getBook(bookId);
        const name = sheetName || book.activeSheetName;
        const ws = book.workbook.getWorksheet(name);
        if (!ws) throw new Error(`Sheet not found: ${name}`);
        if (book.workbook.worksheets.length <= 1) throw new Error('Cannot delete the last sheet in a workbook.');

        book.workbook.removeWorksheet(ws.id);

        if (book.activeSheetName === name) {
            book.activeSheetName = book.workbook.worksheets[0].name;
        }

        book.dirty = true;
        this.emitChange('delete-sheet');
        return name;
    }

    renameSheet(bookId, oldName, newName) {
        const book = this.getBook(bookId);
        const srcName = oldName || book.activeSheetName;
        if (!newName) throw new Error('New sheet name is required.');
        if (book.workbook.getWorksheet(newName)) throw new Error(`Sheet already exists: ${newName}`);

        const ws = book.workbook.getWorksheet(srcName);
        if (!ws) throw new Error(`Sheet not found: ${srcName}`);

        ws.name = newName;
        if (book.activeSheetName === srcName) book.activeSheetName = newName;

        book.dirty = true;
        this.emitChange('rename-sheet');
        return newName;
    }

    duplicateSheet(bookId, srcSheetName, newSheetName) {
        const book = this.getBook(bookId);
        const srcName = srcSheetName || book.activeSheetName;
        const src = book.workbook.getWorksheet(srcName);
        if (!src) throw new Error(`Sheet not found: ${srcName}`);

        const name = newSheetName || `${srcName}_copy`;
        if (book.workbook.getWorksheet(name)) throw new Error(`Sheet already exists: ${name}`);

        const dst = book.workbook.addWorksheet(name, {
            properties: JSON.parse(JSON.stringify(src.properties || {})),
            pageSetup: JSON.parse(JSON.stringify(src.pageSetup || {})),
            views: JSON.parse(JSON.stringify(src.views || []))
        });

        dst.state = src.state;

        for (let c = 1; c <= Math.max(src.columnCount || 0, src.actualColumnCount || 0); c++) {
            const srcCol = src.getColumn(c);
            const dstCol = dst.getColumn(c);
            dstCol.width = srcCol.width;
            dstCol.hidden = srcCol.hidden;
            dstCol.outlineLevel = srcCol.outlineLevel;
            if (srcCol.style) dstCol.style = JSON.parse(JSON.stringify(srcCol.style));
        }

        for (let r = 1; r <= Math.max(src.rowCount || 0, src.actualRowCount || 0); r++) {
            const srcRow = src.getRow(r);
            const dstRow = dst.getRow(r);
            dstRow.height = srcRow.height;
            dstRow.hidden = srcRow.hidden;
            dstRow.outlineLevel = srcRow.outlineLevel;
            if (srcRow.style) dstRow.style = JSON.parse(JSON.stringify(srcRow.style));

            srcRow.eachCell({ includeEmpty: true }, (srcCell, colNumber) => {
                const dstCell = dstRow.getCell(colNumber);
                dstCell.value = ExcelEngine.cloneValue(srcCell.value);
                if (srcCell.style) dstCell.style = JSON.parse(JSON.stringify(srcCell.style));
                if (srcCell.numFmt) dstCell.numFmt = srcCell.numFmt;
                if (srcCell.alignment) dstCell.alignment = JSON.parse(JSON.stringify(srcCell.alignment));
                if (srcCell.border) dstCell.border = JSON.parse(JSON.stringify(srcCell.border));
                if (srcCell.fill) dstCell.fill = JSON.parse(JSON.stringify(srcCell.fill));
                if (srcCell.font) dstCell.font = JSON.parse(JSON.stringify(srcCell.font));
                if (srcCell.protection) dstCell.protection = JSON.parse(JSON.stringify(srcCell.protection));
            });
        }

        if (src._merges) {
            for (const range of Object.keys(src._merges)) {
                try {
                    dst.mergeCells(range);
                } catch (e) {
                    console.warn(`Failed to copy merge range ${range}`, e);
                }
            }
        }

        book.activeSheetName = name;
        book.dirty = true;
        this.emitChange('duplicate-sheet');
        return name;
    }

    enableExcelRecalculation(workbook) {
        if (!workbook) return;
        if (!workbook.calcProperties) workbook.calcProperties = {};
        workbook.calcProperties.fullCalcOnLoad = true;
        workbook.calcProperties.forceFullCalc = true;
    }

    getBook(bookId = null) {
        const id = bookId || this.activeBookId;
        if (!id || !this.books.has(id)) throw new Error(`Workbook not found: ${id || '(none)'}`);
        return this.books.get(id);
    }

    getActiveBook() {
        return this.getBook(this.activeBookId);
    }

    getActiveSheet() {
        const book = this.getActiveBook();
        return ExcelEngine.getWorksheet(book, book.activeSheetName);
    }

    listBooks() {
        return Array.from(this.books.values()).map(book => ({
            id: book.id,
            alias: book.alias,
            path: book.path,
            activeSheetName: book.activeSheetName,
            dirty: book.dirty
        }));
    }

    listSheets(bookId = null) {
        const book = this.getBook(bookId);
        return ExcelEngine.listSheets(book);
    }

    async saveBook(bookId = null, path = null) {
        const book = this.getBook(bookId);
        const dest = path || book.path || `data/spreadsheets/${book.alias}.xlsx`;
        book.workbook.modified = new Date();
        this.enableExcelRecalculation(book.workbook);
        await VFSIO.writeWorkbook(dest, book.workbook);
        book.path = dest;
        book.dirty = false;
        this.emitChange('save');
        return dest;
    }

    inspectSheet(bookId, sheetName, startRow, maxRows, displayMode) {
        const book = this.getBook(bookId);
        return ExcelEngine.inspectSheet(book, sheetName || book.activeSheetName, startRow, maxRows, displayMode);
    }

    inspectRange(bookId, sheetName, range, displayMode) {
        const book = this.getBook(bookId);
        return ExcelEngine.inspectRange(book, sheetName || book.activeSheetName, range, displayMode || 'value');
    }

    getSheetDimensions(bookId, sheetName) {
        const book = this.getBook(bookId);
        return ExcelEngine.getSheetDimensions(book, sheetName || book.activeSheetName);
    }

    getCellInfo(bookId, sheetName, range) {
        const book = this.getBook(bookId);
        return ExcelEngine.getCellInfo(book, sheetName || book.activeSheetName, range);
    }

    searchCells(bookId, sheetName, query, opts = {}) {
        const book = this.getBook(bookId);
        return ExcelEngine.searchCells(book, sheetName || book.activeSheetName, query, opts);
    }

    writeCell(bookId, sheetName, cell, value) {
        const book = this.getBook(bookId);
        const msg = ExcelEngine.writeCell(book, sheetName || book.activeSheetName, cell, value);
        if (msg.startsWith('Wrote ')) {
            this.emitChange('write-cell');
        }
        return msg;
    }

    writeBlock(bookId, sheetName, startCell, csvText) {
        const book = this.getBook(bookId);
        const msg = ExcelEngine.writeBlock(book, sheetName || book.activeSheetName, startCell, csvText);
        this.emitChange('write-block');
        return msg;
    }

    copyRange(srcBookId, srcSheet, srcRange, tgtBookId, tgtSheet, tgtCell, move = false) {
        const srcBook = this.getBook(srcBookId);
        const tgtBook = this.getBook(tgtBookId);
        const msg = ExcelEngine.copyRange(srcBook, srcSheet, srcRange, tgtBook, tgtSheet, tgtCell, move);
        this.emitChange(move ? 'move-range' : 'copy-range');
        return msg;
    }

    clearRange(bookId, sheetName, range) {
        const book = this.getBook(bookId);
        const msg = ExcelEngine.clearRange(book, sheetName || book.activeSheetName, range);
        this.emitChange('clear-range');
        return msg;
    }

    insertRows(bookId, sheetName, row, count) {
        const book = this.getBook(bookId);
        const msg = ExcelEngine.insertRows(book, sheetName || book.activeSheetName, row, count);
        this.emitChange('insert-rows');
        return msg;
    }

    deleteRows(bookId, sheetName, row, count) {
        const book = this.getBook(bookId);
        const msg = ExcelEngine.deleteRows(book, sheetName || book.activeSheetName, row, count);
        this.emitChange('delete-rows');
        return msg;
    }

    setCellStyle(bookId, sheetName, range, patch) {
        const book = this.getBook(bookId);
        const msg = ExcelEngine.setCellStyle(book, sheetName || book.activeSheetName, range, patch);
        this.emitChange('set-style');
        return msg;
    }

    getCellStyle(bookId, sheetName, range) {
        const book = this.getBook(bookId);
        return ExcelEngine.getCellStyle(book, sheetName || book.activeSheetName, range);
    }
}

window.WorkbookManager = WorkbookManager;