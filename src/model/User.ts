export default class {
    static registrar() {
        throw new Error("Method not implemented.");
    }
    private name: string;
    private email: string;
    private senha: string;

    public constructor(name:string, email:string, senha:string) {
        this.name = name;
        this.email = email;
        this.senha = senha;
    } 

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getSenha(): string {
        return this.senha;
    }
}