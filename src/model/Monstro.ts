import Personagens from "./Personagens";

export default class Monstro extends Personagens{
   
    constructor(nome: string,vida: number, ataque?: number){
        super(nome, vida, ataque);
        
    }

    public status(): string {
        return `O monstro é um ${this.getNome()}, vida do monstro: ${this.getVida()}, ataque o monstro: ${this.getAtaque()}`;
    }

    public dialogo(): string {
        
        return `${this.getNome()} diz:  "Eu sou o caçador!"`;
    }
    

    


    
}