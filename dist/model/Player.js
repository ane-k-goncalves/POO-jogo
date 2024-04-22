"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Personagens_1 = __importDefault(require("./Personagens"));
class Player extends Personagens_1.default {
    status() {
        return `nome do jogador: ${this.getNome()},\n vida do jogador: ${this.getVida()}`;
    }
    constructor(nome, vida, ataque, nivel) {
        super(nome, vida, ataque, nivel);
        this.idPlayer = 0;
        this.idPlayer = this.idPlayer;
    }
    getIdPlayer() {
        return this.idPlayer;
    }
    setIdPlayer(idPlayer) {
        this.idPlayer = idPlayer;
    }
}
exports.default = Player;
