import UserDB from "../bd/UserDB";
import MeuErro from "../model/MeuErro";
import User from "../model/User";

export default class UserController { 
    private datacenter: UserDB  = new UserDB(); 
    
    public getNewUser(): User {
        return new User("", "", "");
    }

    public newUser(user: User): void {//armazenar novo user
        try {

            if (!user.getName() || !user.getEmail() || !user.getSenha()) {
                console.error("Erro: Todos os campos devem ser preenchidos.");
               throw new MeuErro(user);
                return;
                
            }

            //throw new Error("Erro simulado ao registrar o usuário"); //forçar erro para cair no catch
          

            this.datacenter.newUser(user);
            console.log(`Usuário ${user.getName()} registrado com sucesso!`);
        } catch (error) {
            console.error("Erro ao registrar o usuário:", error);
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