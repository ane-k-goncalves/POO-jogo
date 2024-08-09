"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDB_1 = __importDefault(require("../bd/UserDB"));
class UserController {
    constructor() {
        this.datacenter = new UserDB_1.default();
    }
    newUser(user) {
        this.datacenter.newUser(user);
        console.log(`Usuário ${user.getName()} registrado com sucesso!`);
    }
}
exports.default = UserController;
