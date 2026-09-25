"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZiptasticError = void 0;
class ZiptasticError extends Error {
    isZiptasticError = true;
    sdk = 'Ziptastic';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.ZiptasticError = ZiptasticError;
//# sourceMappingURL=ZiptasticError.js.map