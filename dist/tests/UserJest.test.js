"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = __importDefault(require("../control/UserController"));
const User_1 = __importDefault(require("../model/User"));
describe('Userdb', () => {
    let user = new UserController_1.default();
    test('deve retornar null e exibir mensagem de erro para credenciais incorretas', () => {
        const mockUser = new User_1.default("teste@example.com", "senha123", "Test User");
        user.newUser(mockUser);
        const consoleSpy = jest.spyOn(console, 'log');
        const loggedInUser = user.loginUser("teste@incorreto.com", "senha123");
        expect(loggedInUser).toBeNull();
        expect(consoleSpy).toHaveBeenCalledWith("Email ou senha incorretos.");
    });
});
