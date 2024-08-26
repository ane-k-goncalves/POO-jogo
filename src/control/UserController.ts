import UserDB from "../bd/UserDB";
import Fase from "../model/Fase";
import MeuErro from "../model/MeuErro";
import User from "../model/User";

export default class UserController { 
    private datacenter: UserDB  = new UserDB(); 
    
    public getNewUser(): User {
        return new User("", "", "");
    }

    public newUser(user: User): boolean {//armazenar novo user
        try {

            if (!user.getName() || !user.getEmail() || !user.getSenha()) {
                console.error("Erro: Todos os campos devem ser preenchidos.");
               throw new MeuErro(user);
                
                
            }

            const userExists = this.datacenter.getUsers().find(u => u.getEmail() === user.getEmail());
            if (userExists) {
                console.error("Erro: Email já cadastrado.");
                return false;
            }
          

            this.datacenter.newUser(user);
            console.log(`Usuário ${user.getName()} registrado com sucesso!`);
            return true;
        } catch (error) {
            console.error("Erro ao registrar o usuário:", error);
            return false;
        }
    }

    public loginUser(email:string, senha:string): User | null {
        
        try {
            const user = this.datacenter.getUserByEmailAndPassword(email, senha);
            if (user) {
                return user;
            }else {
                console.log("Email ou senha incorretos.");
                return null;
            }

        } catch(error) {
            console.log("Erro no login", error);
            return null;
        }
    
    }

    public listarUsers(): User[] {
        return this.datacenter.getUsers();
    }
}