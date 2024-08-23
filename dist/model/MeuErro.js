"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MeuErro extends Error {
    constructor(user) {
        super("Ocorreu erro no " + user.getName());
    }
}
exports.default = MeuErro;
