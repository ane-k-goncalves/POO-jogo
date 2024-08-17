import UserDB from "../bd/UserDB";
import User from "../model/User";

export default class UserController { 
    private datacenter: UserDB  = new UserDB(); 
    

    public newUser(user: User): void {
        try {
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