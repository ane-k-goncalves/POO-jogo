"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Personagens_1 = __importDefault(require("./Personagens"));
class Monstro extends Personagens_1.default {
    constructor(nome, vida, ataque) {
        super(nome, vida, ataque);
    }
    status() {
        return `vida do monstro: ${this.getVida()},\n ataque o monstro${this.getAtaque()}`;
    }
    dialogo() {
        return "Eu sou o caçador!";
    }
}
exports.default = Monstro;
