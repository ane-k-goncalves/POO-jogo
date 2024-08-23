"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Datacenter {
    constructor() {
        this.jogo = [];
        this.player = [];
    }
    addNewPlay(jogo) {
        this.jogo.push(jogo);
    }
    getNewPlay() {
        return this.jogo.length;
    }
    addNewPlayer(player) {
        this.player.push(player);
    }
    consultarTipoPlayer(player) {
    }
}
exports.default = Datacenter;
