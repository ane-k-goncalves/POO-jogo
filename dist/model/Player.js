"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Personagens_1 = __importDefault(require("./Personagens"));
class Player extends Personagens_1.default {
    constructor(nome, vida, ataque) {
        super(nome, vida, ataque);
        this.idPlayer = 0;
        this.idPlayer = this.idPlayer;
    }
    getIdPlayer() {
        return this.idPlayer;
    }
    setIdPlayer(idPlayer) {
        this.idPlayer = idPlayer;
    }
    status() {
        return `nome do jogador: ${this.getNome()},\n vida do jogador: ${this.getVida()}`;
    }
    lutar() {
        let ataqueAleatorio = Math.random();
        console.log(ataqueAleatorio);
        let dano = this.getAtaque() * ataqueAleatorio;
        return dano;
    }
    dialogo() {
        return "Eles vão temer!";
    }
}
exports.default = Player;
