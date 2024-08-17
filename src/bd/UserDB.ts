import User from "../model/User";

export default class UserDB {
    private users: User [] = [];

    public newUser(user: User) {
        this.users.push(user);
    }

    public getUsers(): User[] {
        return this.users;
    }

    public getUserByEmailAndPassword(email: string, senha: string): User | null {
        return this.users.find(u => u.getEmail() === email && u.getSenha() === senha) || null;
    }

}