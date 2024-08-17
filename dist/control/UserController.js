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
        try {
            this.datacenter.newUser(user);
            console.log(`Usuário ${user.getName()} registrado com sucesso!`);
        }
        catch (error) {
            console.error("Erro ao registrar o usuário:", error);
        }
    }
    loginUser(email, senha) {
        try {
            const user = this.datacenter.getUserByEmailAndPassword(email, senha);
            if (user) {
                return user;
            }
            else {
                console.log("Email ou senha incorretos.");
                return null;
            }
        }
        catch (error) {
            console.log("Erro no login", error);
            return null;
        }
    }
    listarUsers() {
        return this.datacenter.getUsers();
    }
}
exports.default = UserController;
