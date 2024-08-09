"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    static registrar() {
        throw new Error("Method not implemented.");
    }
    constructor(name, email, senha) {
        this.name = name;
        this.email = email;
        this.senha = senha;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getSenha() {
        return this.senha;
    }
}
exports.default = default_1;
