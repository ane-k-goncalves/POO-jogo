"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Datacenter {
    constructor() {
        this.jogo = [];
    }
    addNewPlay(jogo) {
        this.jogo.push(jogo);
    }
    getNewPlay() {
        return this.jogo.length;
    }
}
exports.default = Datacenter;
