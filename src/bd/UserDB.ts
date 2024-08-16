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



    public getUserByEmailAndPassword(email: string, senha: string): User | null {
        const user = this.users.find(u => u.getEmail() === email && u.getSenha() === senha);
        return user || null;  // Retorna o usuário se encontrado, caso contrário, retorna null
    }

}