import UserDB from "../bd/UserDB";
import User from "../model/User";

export default class UserController { 
    private datacenter: UserDB  = new UserDB(); 
    static newUser: any;

    public newUser(user: User): void {
        this.datacenter.newUser(user);
        console.log(`Usuário ${user.getName()} registrado com sucesso!`);
    }
}