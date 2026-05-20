class StyleUtils {
    static argbToCss(color) {
        if (!color) return null;
        if (typeof color === 'string') {
            if (color.startsWith('#')) return color;
            if (/^[0-9a-fA-F]{6,8}$/.test(color)) {
                const hex = color.length === 8 ? color.slice(2) : color;
                return `#${hex}`;
            }
            return color;
        }
        if (color.argb) {
            const hex = String(color.argb).replace(/^#/, '');
            return `#${hex.length === 8 ? hex.slice(2) : hex}`;
        }
        if (color.rgb) {
            const hex = String(color.rgb).replace(/^#/, '');
            return `#${hex.length === 8 ? hex.slice(2) : hex}`;
        }
        return null;
    }

    static cssToArgb(value) {
        if (!value) return undefined;
        const s = String(value).trim();
        if (/^#[0-9a-fA-F]{6}$/.test(s)) return `FF${s.slice(1).toUpperCase()}`;
        if (/^[0-9a-fA-F]{6}$/.test(s)) return `FF${s.toUpperCase()}`;
        if (/^[0-9a-fA-F]{8}$/.test(s)) return s.toUpperCase();
        return undefined;
    }

    static excelStyleToCss(cell, row, column) {
        const style = (cell && cell.style) || {};
        const css = {};

        const font = style.font || {};
        if (font.bold) css.fontWeight = '700';
        if (font.italic) css.fontStyle = 'italic';
        if (font.underline) css.textDecoration = 'underline';
        if (font.size) css.fontSize = `${font.size}px`;
        const fontColor = this.argbToCss(font.color);
        if (fontColor) css.color = fontColor;

        const fill = style.fill || {};
        if (fill.fgColor) {
            const fillColor = this.argbToCss(fill.fgColor);
            if (fillColor) css.backgroundColor = fillColor;
        }

        const alignment = style.alignment || {};
        if (alignment.horizontal) css.textAlign = this.mapHorizontal(alignment.horizontal);
        if (alignment.vertical) css.verticalAlign = this.mapVertical(alignment.vertical);
        if (alignment.wrapText) css.whiteSpace = 'normal';

        const border = style.border || {};
        for (const side of ['top', 'right', 'bottom', 'left']) {
            if (border[side] && border[side].style) {
                const color = this.argbToCss(border[side].color) || 'rgb(var(--c-border-highlight))';
                css[`border${side[0].toUpperCase()}${side.slice(1)}`] = `${this.mapBorderWidth(border[side].style)} solid ${color}`;
            }
        }

        if (row && row.height) css.height = `${row.height}px`;
        if (column && column.width) {
            const px = Math.max(42, Math.round(column.width * 7.2));
            css.width = `${px}px`;
            css.minWidth = `${px}px`;
        }

        return css;
    }

    static mapHorizontal(value) {
        const map = {
            left: 'left',
            center: 'center',
            right: 'right',
            fill: 'left',
            justify: 'justify',
            centerContinuous: 'center',
            distributed: 'justify'
        };
        return map[value] || value;
    }

    static mapVertical(value) {
        const map = {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom',
            distributed: 'middle',
            justify: 'middle'
        };
        return map[value] || value;
    }

    static mapBorderWidth(style) {
        if (['medium', 'mediumDashed', 'mediumDashDot', 'mediumDashDotDot'].includes(style)) return '2px';
        if (['thick', 'double'].includes(style)) return '3px';
        return '1px';
    }

    static cssObjectToString(css) {
        return Object.entries(css)
            .filter(([, v]) => v !== undefined && v !== null && v !== '')
            .map(([k, v]) => `${k.replace(/[A-Z]/g, m => '-' + m.toLowerCase())}:${String(v).replace(/"/g, '&quot;')}`)
            .join(';');
    }

    static summarizeStyle(cell) {
        const style = (cell && cell.style) || {};
        return {
            font: style.font || {},
            fill: style.fill || {},
            alignment: style.alignment || {},
            border: style.border || {},
            numFmt: style.numFmt || null
        };
    }

    static applyStylePatch(cell, patch) {
        if (!cell || !patch) return;

        if (patch.font) {
            const font = { ...(cell.font || {}) };
            Object.assign(font, this.normalizeFontPatch(patch.font));
            cell.font = font;
        }

        if (patch.fill) {
            cell.fill = this.normalizeFillPatch(patch.fill);
        }

        if (patch.alignment) {
            cell.alignment = { ...(cell.alignment || {}), ...patch.alignment };
        }

        if (patch.border) {
            const current = { ...(cell.border || {}) };
            for (const [side, spec] of Object.entries(patch.border)) {
                current[side] = this.normalizeBorderSpec(spec);
            }
            cell.border = current;
        }

        if (patch.numFmt !== undefined) {
            cell.numFmt = patch.numFmt;
        }
    }

    static normalizeFontPatch(fontPatch) {
        const font = { ...fontPatch };
        if (font.color && typeof font.color === 'string') {
            const argb = this.cssToArgb(font.color);
            if (argb) font.color = { argb };
        }
        return font;
    }

    static normalizeFillPatch(fillPatch) {
        if (fillPatch.type === 'solid' || fillPatch.color || fillPatch.fgColor) {
            const raw = fillPatch.color || fillPatch.fgColor;
            const argb = typeof raw === 'string' ? this.cssToArgb(raw) : null;
            return {
                type: 'pattern',
                pattern: 'solid',
                fgColor: argb ? { argb } : raw
            };
        }
        return fillPatch;
    }

    static normalizeBorderSpec(spec) {
        if (!spec) return spec;
        const out = { ...spec };
        if (out.color && typeof out.color === 'string') {
            const argb = this.cssToArgb(out.color);
            if (argb) out.color = { argb };
        }
        if (!out.style) out.style = 'thin';
        return out;
    }
}

window.StyleUtils = StyleUtils;