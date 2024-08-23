"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerDB {
    constructor() {
        this.players = [];
    }
    addNewPlayer(player) {
        this.players.push(player);
    }
    consultarTipoPlayer(consultaTipoPlayer) {
        return this.players.filter(player => player.getTipoPlayer() === consultaTipoPlayer);
    }
}
exports.default = PlayerDB;
