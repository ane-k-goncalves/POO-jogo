"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDB_1 = __importDefault(require("../bd/UserDB"));
const MeuErro_1 = __importDefault(require("../model/MeuErro"));
const User_1 = __importDefault(require("../model/User"));
class UserController {
    constructor() {
        this.datacenter = new UserDB_1.default();
    }
    getNewUser() {
        return new User_1.default("", "", "");
    }
    newUser(user) {
        try {
            if (!user.getName() || !user.getEmail() || !user.getSenha()) {
                console.error("Erro: Todos os campos devem ser preenchidos.");
                throw new MeuErro_1.default(user);
            }
            const userExists = this.datacenter.getUsers().find(u => u.getEmail() === user.getEmail());
            if (userExists) {
                console.error("Erro: Email já cadastrado.");
                return false;
            }
            this.datacenter.newUser(user);
            console.log(`Usuário ${user.getName()} registrado com sucesso!`);
            return true;
        }
        catch (error) {
            console.error("Erro ao registrar o usuário:", error);
            return false;
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
