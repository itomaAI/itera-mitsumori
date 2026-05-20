(function() {
    const DOM = {
        bookTabs: document.getElementById('book-tabs'),
        sheetTabs: document.getElementById('sheet-tabs'),
        grid: document.getElementById('grid-container'),
        statusLabel: document.getElementById('status-label'),
        activeCellLabel: document.getElementById('active-cell-label'),
        formulaInput: document.getElementById('formula-input'),
        toastContainer: document.getElementById('toast-container'),
        loadingOverlay: document.getElementById('loading-overlay'),
        loadingMessage: document.getElementById('loading-message'),
        btnHome: document.getElementById('btn-home'),
        btnOpen: document.getElementById('btn-open'),
        btnNew: document.getElementById('btn-new'),
        btnNewTab: document.getElementById('btn-new-tab'),
        btnSave: document.getElementById('btn-save'),
        btnAddSheet: document.getElementById('btn-add-sheet'),
        btnApplyInput: document.getElementById('btn-apply-input'),
        btnBold: document.getElementById('btn-bold'),
        btnFillYellow: document.getElementById('btn-fill-yellow')
    };

    const manager = new WorkbookManager();
    const renderer = new GridRenderer(manager, DOM);
    const tools = new AutoExcelTools(manager, renderer);

    manager.onChange = () => renderer.render();

    async function ask(message, defaultValue = '', title = 'AutoExcel') {
        const fullMessage = title ? `${title}\n\n${message}` : message;
        return window.prompt(fullMessage, defaultValue);
    }

    function notify(message, type = 'info', duration = 3200) {
        const container = DOM.toastContainer;
        if (!container) {
            console.log(`[${type}] ${message}`);
            return;
        }

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        container.appendChild(toast);

        window.setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(6px)';
            toast.style.transition = 'opacity 180ms ease, transform 180ms ease';
            window.setTimeout(() => toast.remove(), 220);
        }, duration);
    }

    async function withLoading(message, fn) {
        try {
            showLoading(message);
            await new Promise(resolve => setTimeout(resolve, 30));
            return await fn();
        } finally {
            hideLoading();
        }
    }

    function showLoading(message) {
        if (DOM.loadingMessage) DOM.loadingMessage.textContent = message || 'Processing...';
        if (DOM.loadingOverlay) DOM.loadingOverlay.classList.remove('hidden');
    }

    function hideLoading() {
        if (DOM.loadingOverlay) DOM.loadingOverlay.classList.add('hidden');
    }

    async function openFromPrompt() {
        const path = await ask('VFS上の .xlsx パスを入力してください。', 'data/spreadsheets/QA_List.xlsx', 'Open Workbook');
        if (!path) return;

        await withLoading('Opening workbook...', async () => {
            const id = await manager.openFromVFS(path);
            renderer.render();
            notify(`Opened ${id}`, 'success');
        }).catch(e => {
            console.error(e);
            notify(`Open failed: ${e.message}`, 'error');
        });
    }

    async function createNewBook() {
        const alias = await ask('新規ブック名を入力してください。', `Book${manager.listBooks().length + 1}`, 'New Workbook');
        if (!alias) return;
        try {
            manager.createBlankBook(alias);
            notify(`Created ${alias}`, 'success');
        } catch (e) {
            console.error(e);
            notify(`Create failed: ${e.message}`, 'error');
        }
    }

    async function saveActiveBook() {
        if (!manager.activeBookId) {
            notify('保存対象のブックがありません。', 'warning');
            return;
        }

        const book = manager.getActiveBook();
        const path = await ask('保存先パスを入力してください。', book.path || `data/spreadsheets/${book.alias}.xlsx`, 'Save Workbook');
        if (!path) return;

        await withLoading('Saving workbook...', async () => {
            await manager.saveBook(book.id, path);
            renderer.render();
            notify(`Saved to ${path}`, 'success');
        }).catch(e => {
            console.error(e);
            notify(`Save failed: ${e.message}`, 'error');
        });
    }

    async function addSheet() {
        if (!manager.activeBookId) {
            notify('ブックを先に開いてください。', 'warning');
            return;
        }

        const book = manager.getActiveBook();
        const name = await ask('新規シート名を入力してください。', `Sheet${book.workbook.worksheets.length + 1}`, 'Add Sheet');
        if (!name) return;

        try {
            manager.addSheet(book.id, name);
            notify(`Added sheet ${name}`, 'success');
        } catch (e) {
            console.error(e);
            notify(e.message, 'error');
        }
    }

    function applyInput() {
        try {
            renderer.applyFormulaInput();
            renderer.render();
        } catch (e) {
            console.error(e);
            notify(e.message, 'error');
        }
    }

    function applyBold() {
        try {
            if (!renderer.selectedCell || !manager.activeBookId) return;
            const book = manager.getActiveBook();
            const cell = ExcelEngine.getWorksheet(book, book.activeSheetName).getCell(renderer.selectedCell);
            const current = !!(cell.font && cell.font.bold);
            manager.setCellStyle(book.id, book.activeSheetName, renderer.selectedCell, {
                font: { bold: !current }
            });
        } catch (e) {
            console.error(e);
            notify(e.message, 'error');
        }
    }

    function applyFillYellow() {
        try {
            if (!renderer.selectedCell || !manager.activeBookId) return;
            const book = manager.getActiveBook();
            manager.setCellStyle(book.id, book.activeSheetName, renderer.selectedCell, {
                fill: { type: 'solid', color: '#fff2cc' }
            });
        } catch (e) {
            console.error(e);
            notify(e.message, 'error');
        }
    }

    function goHome() {
        if (window.MetaOS && MetaOS.system && typeof MetaOS.system.spawn === 'function') {
            MetaOS.system.spawn('index.html', { pid: 'main' }).catch(() => window.history.back());
            return;
        }
        window.history.back();
    }

    async function init() {
        if (!window.ExcelJS) {
            notify('ExcelJS の読み込みに失敗しました。ネットワークまたはCDNを確認してください。', 'error', 8000);
            return;
        }

        DOM.btnHome.addEventListener('click', goHome);
        DOM.btnOpen.addEventListener('click', openFromPrompt);
        DOM.btnNew.addEventListener('click', createNewBook);
        DOM.btnNewTab.addEventListener('click', createNewBook);
        DOM.btnSave.addEventListener('click', saveActiveBook);
        DOM.btnAddSheet.addEventListener('click', addSheet);
        DOM.btnApplyInput.addEventListener('click', applyInput);
        DOM.formulaInput.addEventListener('keydown', event => {
            if (event.key === 'Enter') applyInput();
        });
        DOM.btnBold.addEventListener('click', applyBold);
        DOM.btnFillYellow.addEventListener('click', applyFillYellow);

        manager.createBlankBook('Book1');
        renderer.render();

        await tools.register();

        window.AutoExcelApp = {
            manager,
            renderer,
            tools,
            notify,
            showLoading,
            hideLoading,
            openFromPrompt,
            createNewBook,
            saveActiveBook
        };

        notify('AutoExcel initialized.', 'success');
    }

    document.readyState === 'loading'
        ? document.addEventListener('DOMContentLoaded', init)
        : init();
})();