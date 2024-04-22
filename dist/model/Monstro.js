"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Personagens_1 = __importDefault(require("./Personagens"));
class Monstro extends Personagens_1.default {
    status() {
        return `vida do monstro: ${this.getVida()},\n ataque o monstro${this.getAtaque()}`;
    }
    constructor(nome, vida, ataque, nivel) {
        super(nome, vida, ataque, nivel);
        this.pontosDeExperienciaAoDerrotar = 0;
        this.pontosDeExperienciaAoDerrotar = this.pontosDeExperienciaAoDerrotar;
    }
    getPontosDeExperienciaAoDerrotar() {
        return this.pontosDeExperienciaAoDerrotar;
    }
    setPontosDeExperienciaAoDerrotar(pontosDeExperienciaAoDerrotar) {
        this.pontosDeExperienciaAoDerrotar = pontosDeExperienciaAoDerrotar;
    }
}
exports.default = Monstro;
