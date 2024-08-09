"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TipoPlayer_1 = require("./TipoPlayer");
const Personagens_1 = __importDefault(require("./Personagens"));
class Player extends Personagens_1.default {
    constructor(nome, vida, ataque, tipoPlayer) {
        super(nome, vida, ataque);
        this.idPlayer = 0;
        this.idPlayer = this.idPlayer;
        this.tipoPlayer = tipoPlayer;
    }
    getIdPlayer() {
        return this.idPlayer;
    }
    setIdPlayer(idPlayer) {
        this.idPlayer = idPlayer;
    }
    status() {
        return `nome do jogador: ${this.getNome()}, vida do jogador: ${this.getVida()}, eu sou ${TipoPlayer_1.TipoPlayer[this.tipoPlayer]}.`;
    }
    dialogo() {
        return `${this.getNome()} diz:  "Eles vão temer!"`;
    }
}
exports.default = Player;
