"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fase {
    constructor(nivel, player) {
        this.nivel = nivel;
        this.player = player;
    }
    atualizarNivel() {
        this.nivel = 10;
    }
}
exports.default = Fase;
