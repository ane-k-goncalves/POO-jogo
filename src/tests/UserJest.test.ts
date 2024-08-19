import UserController from "../control/UserController";
import UserDB from "../control/UserController";
import User from "../model/User";

describe('Userdb', () => {
    let user: UserController  = new UserController(); 


    test('deve retornar null e exibir mensagem de erro para credenciais incorretas', () => {
        const mockUser = new User("teste@example.com", "senha123", "Test User");

        user.newUser(mockUser);

        const consoleSpy = jest.spyOn(console, 'log');

        const loggedInUser = user.loginUser("teste@incorreto.com", "senha123");

        expect(loggedInUser).toBeNull();
        expect(consoleSpy).toHaveBeenCalledWith("Email ou senha incorretos.");
    });

});