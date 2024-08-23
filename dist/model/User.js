"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
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
    setName(name) {
        this.name = name;
    }
    setEmail(email) {
        this.email = email;
    }
    setSenha(senha) {
        this.senha = senha;
    }
}
exports.default = default_1;
