"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserDB {
    constructor() {
        this.users = [];
    }
    newUser(user) {
        this.users.push(user);
        console.log("Usuário salvo no banco de dados!");
    }
    getUsers() {
        return this.users;
    }
    getUserByEmailAndPassword(email, senha) {
        const user = this.users.find(u => u.getEmail() === email && u.getSenha() === senha);
        return user || null; // Retorna o usuário se encontrado, caso contrário, retorna null
    }
}
exports.default = UserDB;
