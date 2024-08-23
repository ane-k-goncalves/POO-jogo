import PlayerDB from "../bd/PlayerDB";
import Player from "../model/Player";
import { TipoPlayer } from "../model/TipoPlayer";

export default class PlayerController {
    private playerDb: PlayerDB = new PlayerDB;

    public getNewPlayer(): Player {
        return new Player('',0,0,TipoPlayer.controlador);
    }

    public addNewPlayer(player: Player): void {
        this.playerDb.addNewPlayer(player);
        console.log(`Jogador ${player.getNome()} foi criado com sucesso!`);
    }

    public getPlayers(): Player[] {
        return this.playerDb.players; //Retorna todos os jogadores armazenados
    }

    public getPlayersTipo(consultarTipoPlayer:TipoPlayer): Player[] {
        return this.playerDb.consultarTipoPlayer(consultarTipoPlayer);
       
    }
}