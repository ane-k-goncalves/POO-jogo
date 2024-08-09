import { TipoPlayer } from './TipoPlayer';
import Personagens from "./Personagens";

export default class Player extends Personagens {

    private idPlayer: number = 0;
    private tipoPlayer: TipoPlayer;

    constructor(nome: string,vida: number, ataque: number, tipoPlayer:TipoPlayer){
        super(nome, vida, ataque);
        this.idPlayer = this.idPlayer;
        this.tipoPlayer = tipoPlayer;

    }

    public getIdPlayer(): number{
        return this.idPlayer;
    }
    public setIdPlayer(idPlayer:number){
        this.idPlayer = idPlayer;
    }

    public status(): string {
        return `nome do jogador: ${this.getNome()}, vida do jogador: ${this.getVida()}, eu sou ${TipoPlayer[this.tipoPlayer]}.`;
    }

   

    public dialogo(): string {
        return `${this.getNome()} diz:  "Eles vão temer!"`;
    }


    

}