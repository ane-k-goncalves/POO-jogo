"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserDB {
    constructor() {
        this.users = [];
    }
    newUser(user) {
        this.users.push(user);
    }
    getUsers() {
        return this.users;
    }
    getUserByEmailAndPassword(email, senha) {
        return this.users.find(u => u.getEmail() === email && u.getSenha() === senha) || null;
    }
}
exports.default = UserDB;
