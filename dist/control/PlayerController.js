"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PlayerDB_1 = __importDefault(require("../bd/PlayerDB"));
const GerarMonstro_1 = __importDefault(require("../model/GerarMonstro"));
const Player_1 = __importDefault(require("../model/Player"));
const TipoPlayer_1 = require("../model/TipoPlayer");
class PlayerController {
    constructor() {
        this.playerDb = new PlayerDB_1.default;
    }
    getNewPlayer() {
        return new Player_1.default('', 0, 0, TipoPlayer_1.TipoPlayer.controlador);
    }
    addNewPlayer(player) {
        this.playerDb.addNewPlayer(player);
        console.log(`Jogador ${player.getNome()} foi criado com sucesso!`);
    }
    getPlayers() {
        return this.playerDb.players; //Retorna todos os jogadores armazenados
    }
    getPlayersTipo(consultarTipoPlayer) {
        return this.playerDb.consultarTipoPlayer(consultarTipoPlayer);
    }
    getNewMonstro() {
        return new GerarMonstro_1.default();
    }
}
exports.default = PlayerController;
