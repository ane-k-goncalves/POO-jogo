import Personagens from "./Personagens";

export default class Player extends Personagens {

    private idPlayer: number = 0;

    constructor(nome: string,vida: number, ataque: number, ){
        super(nome, vida, ataque);
        this.idPlayer = this.idPlayer;

    }

    public getIdPlayer(): number{
        return this.idPlayer;
    }
    public setIdPlayer(idPlayer:number){
        this.idPlayer = idPlayer;
    }

    public status(): string {
        return `nome do jogador: ${this.getNome()},\n vida do jogador: ${this.getVida()}`;
    }

   

    public lutar() {
        let ataqueAleatorio = Math.random();
        let dano = this.getAtaque() * ataqueAleatorio;
        return dano;
    }

    public dialogo(): string {
        return `${this.getNome()} diz:  "Eles vão temer!"`;
    }


    

}