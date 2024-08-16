import UserDB from "../bd/UserDB";
import User from "../model/User";

export default class UserController { 
    private datacenter: UserDB  = new UserDB(); 
    

    public newUser(user: User): void {
        this.datacenter.newUser(user);
        console.log(`Usuário ${user.getName()} registrado com sucesso!`);
    }

    public loginUser(email:string, senha:string): User | null {
        const user = this.datacenter.getUserByEmailAndPassword(email, senha);
        if (user) {
            return user;
        } else {
            console.log("Email ou senha incorretos.");
            return null;
        }
    
    }

    public listarUsers(): User[] {
        return this.datacenter.getUsers();
    }
}