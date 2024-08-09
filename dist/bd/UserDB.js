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
}
exports.default = UserDB;
