import UserController from "../control/UserController";
import UserDB from "../control/UserController";
import User from "../model/User";

describe('UserController', () => {
    let user: UserController;

    beforeEach(() => {
        user = new UserController();
    });

    afterEach(() => {
        jest.restoreAllMocks(); // Restaura todos os mocks apos cada teste para nao inteferir nos outros tests
    });

    test('deve retornar null e exibir mensagem de erro para credenciais incorretas', () => {
        const ex = new User("teste@example.com", "senha123", "Test User");

        user.newUser(ex);

        const consoleSpy = jest.spyOn(console, 'log');

        const loggedInUser = user.loginUser("teste@incorreto.com", "senha123");

        expect(loggedInUser).toBeNull();
        expect(consoleSpy).toHaveBeenCalledWith("Email ou senha incorretos.");
    });

    test('deve retornar erro ao tentar registrar usuário com campos vazios', () => {
        const ex = new User('', '', '');
        const consoleErrorSpy = jest.spyOn(console, 'error');

        user.newUser(ex);

        expect(consoleErrorSpy).toHaveBeenCalledWith("Erro: Todos os campos devem ser preenchidos.");
    });
});
