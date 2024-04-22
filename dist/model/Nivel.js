"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Personagens_1 = __importDefault(require("./Personagens"));
class Nivel extends Personagens_1.default {
    constructor(nome, vida, ataque, nivel) {
        super(nome, vida, ataque, nivel);
    }
    atualizarVida() {
    }
    atualizarNivel() {
    }
    atualizaAtaque() {
    }
    status() {
        return `Nome do jogador: ${this.getNome()},\n Vida atualizada do jogador: ${this.atualizarVida()},\n Ataque
        atualizado do jogador: ${this.atualizaAtaque()},\n Nivel atualizado do jogador: ${this.atualizarNivel}`;
    }
}
exports.default = Nivel;
