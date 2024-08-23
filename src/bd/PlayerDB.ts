import Player from "../model/Player";
import { TipoPlayer } from "../model/TipoPlayer";

export default class PlayerDB{
    
    public players:Player [] = [];

    public addNewPlayer(player: Player): void{
        this.players.push(player);
    }

    public consultarTipoPlayer(consultaTipoPlayer: TipoPlayer): Player[] {
        return this.players.filter(player => player.getTipoPlayer() === consultaTipoPlayer);

    }
   
}