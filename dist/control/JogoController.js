"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Datacenter_1 = __importDefault(require("../bd/Datacenter"));
const Jogo_1 = __importDefault(require("../model/Jogo"));
class JogoController {
    constructor() {
        this.datacenter = new Datacenter_1.default();
    }
    getNewPlay(nivel, player, monstro) {
        return new Jogo_1.default(nivel, player, monstro);
    }
    registerNewJogo(jogo) {
        this.datacenter.addNewPlay(jogo);
    }
    iniciarJogo(player, nivel, monstro) {
        const jogo = this.getNewPlay(nivel, player, monstro);
        jogo.iniciarJogo(nivel, player, monstro);
        this.registerNewJogo(jogo);
    }
}
exports.default = JogoController;
