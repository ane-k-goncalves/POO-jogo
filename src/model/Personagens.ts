export default abstract class Personagens{
    private nome: string = "";
    private vida: number = 0;
    private ataque: number = 0;
   
    

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
   

    constructor(nome: string, vida: number ,ataque?: number){
        this.nome = nome;
        this.vida = vida;
        if(ataque === undefined) {
            console.log("Ataque não definido");
        }else {
            this.ataque = ataque;
        }
       
    }
    public status(): string {
        return `nome do jogador: ${this.getNome()},\n vida do jogador: ${this.getVida()}`;
    }

    public dialogo(): string {
        return "Eu vou te derrotar";
    }

   

    
    
}