"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PowerCegar {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
    }
    usePower(player) {
        console.log(`${player.getNome()} usou ${this.nome} que ${this.descricao} `);
    }
}
exports.default = PowerCegar;
