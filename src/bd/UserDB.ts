import User from "../model/User";

export default class UserDB {
    private users: User [] = [];

    public newUser(user: User) {
        this.users.push(user);
        console.log("Usuário salvo no banco de dados!");
    }

    public getUsers(): User[] {
        return this.users;
    }

}