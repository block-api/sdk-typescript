"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockApi = void 0;
const axios_1 = __importDefault(require("axios"));
const response_1 = require("./response");
const BLOCK_API = "https://v1.blockapi.dev";
class BlockApi {
    constructor(options) {
        this.options = {
            url: BLOCK_API,
        };
        if (options) {
            this.options = Object.assign(this.options, options);
        }
    }
    setToken(token, refreshToken) {
        this.token = token;
        this.refreshToken = refreshToken;
    }
    async signin(payload) {
        var _a, _b, _c, _d;
        const response = new response_1.Response();
        const targetUrl = this.options.url + "/auth/login";
        try {
            const result = await axios_1.default.post(targetUrl, payload);
            response.status = result.status;
            response.body = {
                token: result.data.token,
                refreshToken: result.data.token,
            };
            return response;
        }
        catch (e) {
            const r = e.response;
            response.status = r.status;
            if ((_a = r.data) === null || _a === void 0 ? void 0 : _a.message) {
                response.message = (_b = r.data) === null || _b === void 0 ? void 0 : _b.message;
            }
            if ((_c = r.data) === null || _c === void 0 ? void 0 : _c.error) {
                response.error = (_d = r.data) === null || _d === void 0 ? void 0 : _d.error;
            }
            return response;
        }
    }
}
exports.BlockApi = BlockApi;
//# sourceMappingURL=block-api.js.map