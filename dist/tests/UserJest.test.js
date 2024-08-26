"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = __importDefault(require("../control/UserController"));
const User_1 = __importDefault(require("../model/User"));
describe('UserController', () => {
    let user;
    beforeEach(() => {
        user = new UserController_1.default();
    });
    afterEach(() => {
        jest.restoreAllMocks(); // Restaura todos os mocks apos cada teste para nao inteferir nos outros tests
    });
    test('deve retornar null e exibir mensagem de erro para credenciais incorretas', () => {
        const ex = new User_1.default("teste@example.com", "senha123", "Test User");
        user.newUser(ex);
        const consoleSpy = jest.spyOn(console, 'log');
        const loggedInUser = user.loginUser("teste@incorreto.com", "senha123");
        expect(loggedInUser).toBeNull();
        expect(consoleSpy).toHaveBeenCalledWith("Email ou senha incorretos.");
    });
    test('deve retornar erro ao tentar registrar usuário com campos vazios', () => {
        const ex = new User_1.default('', '', '');
        const consoleErrorSpy = jest.spyOn(console, 'error');
        user.newUser(ex);
        expect(consoleErrorSpy).toHaveBeenCalledWith("Erro: Todos os campos devem ser preenchidos.");
    });
    test('não deve criar usuário com email duplicado', () => {
        const user1 = new User_1.default("duplicado@example.com", "senha123", "Usuario 1");
        const user2 = new User_1.default("duplicado@example.com", "senha456", "Usuario 2");
        user.newUser(user1);
        const result = user.newUser(user2);
        expect(result).toBe(false);
    });
});
