import Personagens from "./Personagens";

export default class Player extends Personagens {
    public status(): string {
        return `nome do jogador: ${this.getNome()},\n vida do jogador: ${this.getVida()}`;
    }
    private idPlayer: number = 0;

    constructor(nome: string,vida: number, ataque: number, nivel: number){
        super(nome, vida, ataque, nivel);
        this.idPlayer = this.idPlayer;

    }

    public getIdPlayer(): number{
        return this.idPlayer;
    }
    public setIdPlayer(idPlayer:number){
        this.idPlayer = idPlayer;
    }
    

}