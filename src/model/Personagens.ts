export default abstract class Personagens{
    private nome: string = "";
    private vida: number = 0;
    private ataque: number = 0;
    private nivel: number = 0;
    

    public getNome(): string{
        return this.nome;
    }
    public setNome(nome:string) {
        this.nome = nome;
    }

    public getVida(): number {
        return this.vida;
    }
    public setVida(vida:number){
        this.vida = vida;
    }
    public getAtaque(): number{
        return this.ataque;
    }
    public setAtaque(ataque:number){
        this.ataque = ataque;
    }
    public getNivel(): number{
        return this.nivel;
    }
    public setNivel(nivel:number){
        this.nivel = nivel;
    }

    constructor(nome: string, vida: number ,ataque: number,nivel: number){
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.nivel = nivel;
    
    }
    public abstract status(): string;

    
    
}