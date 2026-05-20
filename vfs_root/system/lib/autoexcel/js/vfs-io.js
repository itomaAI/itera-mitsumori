class VFSIO {
    static XLSX_MIME = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

    static async readWorkbook(path) {
        if (!window.ExcelJS) throw new Error('ExcelJS is not loaded.');
        if (!window.MetaOS || !MetaOS.fs) throw new Error('MetaOS.fs is not available.');

        const raw = await MetaOS.fs.read(path);
        if (raw === undefined || raw === null || raw === '') {
            throw new Error(`File is empty or not found: ${path}`);
        }

        const buffer = await this.toArrayBuffer(raw);
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(buffer);
        return workbook;
    }

    static async writeWorkbook(path, workbook) {
        if (!window.ExcelJS) throw new Error('ExcelJS is not loaded.');
        if (!window.MetaOS || !MetaOS.fs) throw new Error('MetaOS.fs is not available.');

        const buffer = await workbook.xlsx.writeBuffer();
        const dataUri = this.arrayBufferToDataUri(buffer, this.XLSX_MIME);
        await MetaOS.fs.write(path, dataUri, { overwrite: true });
        return path;
    }

    static async toArrayBuffer(raw) {
        if (raw instanceof ArrayBuffer) return raw;
        if (raw instanceof Uint8Array) {
            return raw.buffer.slice(raw.byteOffset, raw.byteOffset + raw.byteLength);
        }
        if (raw instanceof Blob || (typeof raw === 'object' && typeof raw.arrayBuffer === 'function')) {
            return await raw.arrayBuffer();
        }
        if (typeof raw === 'string') {
            if (raw.startsWith('data:')) {
                return this.dataUriToArrayBuffer(raw);
            }
            return this.binaryStringToArrayBuffer(raw);
        }
        if (raw && raw.buffer instanceof ArrayBuffer) {
            return raw.buffer.slice(raw.byteOffset || 0, (raw.byteOffset || 0) + (raw.byteLength || raw.buffer.byteLength));
        }
        throw new Error(`Unsupported VFS payload type: ${typeof raw}`);
    }

    static dataUriToArrayBuffer(dataUri) {
        const comma = dataUri.indexOf(',');
        if (comma < 0) throw new Error('Invalid Data URI.');
        const meta = dataUri.slice(0, comma);
        const body = dataUri.slice(comma + 1);
        if (meta.includes(';base64')) {
            return this.base64ToArrayBuffer(body);
        }
        return new TextEncoder().encode(decodeURIComponent(body)).buffer;
    }

    static binaryStringToArrayBuffer(binary) {
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i) & 0xff;
        }
        return bytes.buffer;
    }

    static arrayBufferToDataUri(buffer, mime) {
        return `data:${mime};base64,${this.arrayBufferToBase64(buffer)}`;
    }

    static arrayBufferToBase64(buffer) {
        const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
        const chunkSize = 0x8000;
        let binary = '';
        for (let i = 0; i < bytes.length; i += chunkSize) {
            const chunk = bytes.subarray(i, i + chunkSize);
            binary += String.fromCharCode.apply(null, chunk);
        }
        return btoa(binary);
    }

    static base64ToArrayBuffer(base64) {
        const binary = atob(base64);
        return this.binaryStringToArrayBuffer(binary);
    }
}

window.VFSIO = VFSIO;