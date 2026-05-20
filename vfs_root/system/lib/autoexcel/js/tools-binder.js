class AutoExcelTools {
    constructor(manager, renderer) {
        this.manager = manager;
        this.renderer = renderer;
    }

    async register() {
        if (!window.MetaOS || !MetaOS.tools) return;

        const wrap = async (fn, update = false) => {
            try {
                const result = await fn();
                if (update && this.renderer) this.renderer.render();
                return { ui: String(result), log: String(result) };
            } catch (e) {
                return { ui: 'Error', log: `AUTOEXCEL_ERROR: ${e.message}` };
            }
        };

        const tools = [
            {
                name: 'autoexcel_open_book',
                definition: '<define_tag name="autoexcel_open_book">Attr: path, alias(optional). Opens an XLSX workbook from VFS into AutoExcel.</define_tag>',
                handler: p => wrap(async () => {
                    const id = await this.manager.openFromVFS(p.path, p.alias);
                    return `Opened workbook '${id}' from ${p.path}`;
                }, true)
            },
            {
                name: 'autoexcel_create_book',
                definition: '<define_tag name="autoexcel_create_book">Attr: alias. Creates a blank workbook.</define_tag>',
                handler: p => wrap(() => {
                    const id = this.manager.createBlankBook(p.alias);
                    return `Created workbook '${id}'`;
                }, true)
            },
            {
                name: 'autoexcel_duplicate_book',
                definition: '<define_tag name="autoexcel_duplicate_book">Attr: src_book, alias(optional). Duplicates an open workbook in memory under a new alias.</define_tag>',
                handler: p => wrap(async () => {
                    const id = await this.manager.duplicateBook(p.src_book, p.alias);
                    return `Duplicated workbook '${p.src_book}' as '${id}'`;
                }, true)
            },
            {
                name: 'autoexcel_list_books',
                definition: '<define_tag name="autoexcel_list_books">Lists open workbooks in AutoExcel.</define_tag>',
                handler: () => wrap(() => JSON.stringify(this.manager.listBooks(), null, 2))
            },
            {
                name: 'autoexcel_list_sheets',
                definition: '<define_tag name="autoexcel_list_sheets">Attr: book(optional). Lists sheets in a workbook.</define_tag>',
                handler: p => wrap(() => this.manager.listSheets(p.book).map(x => `- ${x}`).join('\n'))
            },
            {
                name: 'autoexcel_add_sheet',
                definition: '<define_tag name="autoexcel_add_sheet">Attr: book(optional), name. Adds a blank sheet to a workbook.</define_tag>',
                handler: p => wrap(() => {
                    const name = this.manager.addSheet(p.book, p.name);
                    return `Added sheet '${name}'`;
                }, true)
            },
            {
                name: 'autoexcel_delete_sheet',
                definition: '<define_tag name="autoexcel_delete_sheet">Attr: book(optional), name(optional). Deletes a sheet. If name is omitted, deletes the active sheet. Cannot delete the last sheet.</define_tag>',
                handler: p => wrap(() => {
                    const name = this.manager.deleteSheet(p.book, p.name);
                    return `Deleted sheet '${name}'`;
                }, true)
            },
            {
                name: 'autoexcel_rename_sheet',
                definition: '<define_tag name="autoexcel_rename_sheet">Attr: book(optional), old_name(optional), new_name. Renames a sheet.</define_tag>',
                handler: p => wrap(() => {
                    const name = this.manager.renameSheet(p.book, p.old_name, p.new_name);
                    return `Renamed sheet to '${name}'`;
                }, true)
            },
            {
                name: 'autoexcel_duplicate_sheet',
                definition: '<define_tag name="autoexcel_duplicate_sheet">Attr: book(optional), src_sheet(optional), new_name. Duplicates a sheet within the same workbook, including values and basic layout/style.</define_tag>',
                handler: p => wrap(() => {
                    const name = this.manager.duplicateSheet(p.book, p.src_sheet, p.new_name);
                    return `Duplicated sheet as '${name}'`;
                }, true)
            },
            {
                name: 'autoexcel_activate_book',
                definition: '<define_tag name="autoexcel_activate_book">Attr: book. Activates an open workbook tab.</define_tag>',
                handler: p => wrap(() => {
                    this.manager.setActiveBook(p.book);
                    return `Activated workbook '${p.book}'`;
                }, true)
            },
            {
                name: 'autoexcel_activate_sheet',
                definition: '<define_tag name="autoexcel_activate_sheet">Attr: book(optional), sheet. Activates a sheet.</define_tag>',
                handler: p => wrap(() => {
                    const book = p.book || this.manager.activeBookId;
                    this.manager.setActiveSheet(book, p.sheet);
                    return `Activated sheet '${p.sheet}'`;
                }, true)
            },
            {
                name: 'autoexcel_inspect_sheet',
                definition: '<define_tag name="autoexcel_inspect_sheet">Attr: book(optional), sheet(optional), start_row(optional), max_rows(optional), display_mode(optional: value|formula|style|value_and_style). Returns CSV preview.</define_tag>',
                handler: p => wrap(() => {
                    const csv = this.manager.inspectSheet(p.book, p.sheet, p.start_row, p.max_rows, p.display_mode || 'value');
                    return `Content:\n\`\`\`csv\n${csv}\n\`\`\``;
                })
            },
            {
                name: 'autoexcel_inspect_range',
                definition: '<define_tag name="autoexcel_inspect_range">Attr: book(optional), sheet(optional), range, display_mode(optional: value|formula|style|value_and_style). Returns a CSV preview for the exact range.</define_tag>',
                handler: p => wrap(() => {
                    const csv = this.manager.inspectRange(p.book, p.sheet, p.range, p.display_mode || 'value');
                    return `Content:\n\`\`\`csv\n${csv}\n\`\`\``;
                })
            },
            {
                name: 'autoexcel_get_sheet_dimensions',
                definition: '<define_tag name="autoexcel_get_sheet_dimensions">Attr: book(optional), sheet(optional). Returns used range, non-empty bounds, counts, hidden rows/cols, and merged ranges.</define_tag>',
                handler: p => wrap(() => JSON.stringify(this.manager.getSheetDimensions(p.book, p.sheet), null, 2))
            },
            {
                name: 'autoexcel_get_cell_info',
                definition: '<define_tag name="autoexcel_get_cell_info">Attr: book(optional), sheet(optional), range. Returns cell values, formulas, and styles as JSON.</define_tag>',
                handler: p => wrap(() => JSON.stringify(this.manager.getCellInfo(p.book, p.sheet, p.range), null, 2))
            },
            {
                name: 'autoexcel_search_cells',
                definition: '<define_tag name="autoexcel_search_cells">Attr: book(optional), sheet(optional), query, regex(optional true|false), case_sensitive(optional true|false), max_results(optional). Searches non-empty cells and returns matching cells as JSON.</define_tag>',
                handler: p => wrap(() => JSON.stringify(this.manager.searchCells(p.book, p.sheet, p.query, {
                    regex: p.regex,
                    caseSensitive: p.case_sensitive,
                    maxResults: p.max_results
                }), null, 2))
            },
            {
                name: 'autoexcel_write_cell',
                definition: '<define_tag name="autoexcel_write_cell">Attr: book(optional), sheet(optional), cell. Content: value or formula.</define_tag>',
                handler: p => wrap(() => {
                    const value = p.content ?? p._content ?? p.value ?? '';
                    return this.manager.writeCell(p.book, p.sheet, p.cell, value);
                }, true)
            },
            {
                name: 'autoexcel_write_block',
                definition: '<define_tag name="autoexcel_write_block">Attr: book(optional), sheet(optional), start_cell. Content: CSV block.</define_tag>',
                handler: p => wrap(() => {
                    const csv = p.content ?? p._content ?? '';
                    return this.manager.writeBlock(p.book, p.sheet, p.start_cell, csv);
                }, true)
            },
            {
                name: 'autoexcel_copy_range',
                definition: '<define_tag name="autoexcel_copy_range">Attr: src_book, src_sheet, src_range, tgt_book, tgt_sheet, tgt_cell. Copies values and basic styles.</define_tag>',
                handler: p => wrap(() => this.manager.copyRange(p.src_book, p.src_sheet, p.src_range, p.tgt_book, p.tgt_sheet, p.tgt_cell, false), true)
            },
            {
                name: 'autoexcel_move_range',
                definition: '<define_tag name="autoexcel_move_range">Attr: src_book, src_sheet, src_range, tgt_book, tgt_sheet, tgt_cell. Moves values and basic styles.</define_tag>',
                handler: p => wrap(() => this.manager.copyRange(p.src_book, p.src_sheet, p.src_range, p.tgt_book, p.tgt_sheet, p.tgt_cell, true), true)
            },
            {
                name: 'autoexcel_clear_range',
                definition: '<define_tag name="autoexcel_clear_range">Attr: book(optional), sheet(optional), range. Clears cell values in range.</define_tag>',
                handler: p => wrap(() => this.manager.clearRange(p.book, p.sheet, p.range), true)
            },
            {
                name: 'autoexcel_set_cell_style',
                definition: '<define_tag name="autoexcel_set_cell_style">Attr: book(optional), sheet(optional), range. Content: JSON style patch for font/fill/alignment/border/numFmt.</define_tag>',
                handler: p => wrap(() => {
                    const patch = p.content ?? p._content ?? '{}';
                    return this.manager.setCellStyle(p.book, p.sheet, p.range, patch);
                }, true)
            },
            {
                name: 'autoexcel_get_cell_style',
                definition: '<define_tag name="autoexcel_get_cell_style">Attr: book(optional), sheet(optional), range. Returns styles as JSON.</define_tag>',
                handler: p => wrap(() => JSON.stringify(this.manager.getCellStyle(p.book, p.sheet, p.range), null, 2))
            },
            {
                name: 'autoexcel_insert_rows',
                definition: '<define_tag name="autoexcel_insert_rows">Attr: book(optional), sheet(optional), row, count. Inserts rows at 1-based row index.</define_tag>',
                handler: p => wrap(() => this.manager.insertRows(p.book, p.sheet, p.row, p.count), true)
            },
            {
                name: 'autoexcel_delete_rows',
                definition: '<define_tag name="autoexcel_delete_rows">Attr: book(optional), sheet(optional), row, count. Deletes rows at 1-based row index.</define_tag>',
                handler: p => wrap(() => this.manager.deleteRows(p.book, p.sheet, p.row, p.count), true)
            },
            {
                name: 'autoexcel_save_book',
                definition: '<define_tag name="autoexcel_save_book">Attr: book(optional), path(optional). Saves workbook to VFS as XLSX Data URI.</define_tag>',
                handler: p => wrap(async () => {
                    const path = await this.manager.saveBook(p.book, p.path);
                    return `Saved workbook to ${path}`;
                }, true)
            }
        ];

        for (const tool of tools) {
            await MetaOS.tools.register({
                name: tool.name,
                description: 'AutoExcel workbook operation tool',
                definition: tool.definition,
                handler: tool.handler
            });
        }

        await MetaOS.ai.log(`[System] AutoExcel tools activated.\n${tools.map(t => t.definition).join('\n')}`, 'tool_available');
    }
}

window.AutoExcelTools = AutoExcelTools;