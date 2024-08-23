import { TipoPlayer } from './TipoPlayer';
import Personagens from "./Personagens";

export default class Player extends Personagens {
    

    public tipoPlayer: TipoPlayer;

    constructor(nome: string,vida: number, ataque: number, tipoPlayer:TipoPlayer){
        super(nome, vida, ataque);
        this.tipoPlayer = tipoPlayer;

    }
    public getTipoPlayer(): number {
        return this.tipoPlayer;
    }
    public setTipoPlayer(tipoPlayer:TipoPlayer){
        this.tipoPlayer = tipoPlayer;
    }
    public status(): string {
        return `Nome do jogador: ${this.getNome()}, vida do jogador: ${this.getVida()}, eu sou ${TipoPlayer[this.tipoPlayer]}.`;
    }

   

    public dialogo(): string {
        return `${this.getNome()} diz:  "Eles vão temer!"`;
    }

}