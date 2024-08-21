"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Monstro_1 = __importDefault(require("./Monstro"));
class GerarMonstro {
    gerarMonstro() {
        const nome = ["Goblin", "Orc", "Draggão"];
        const tipo = nome[Math.floor(Math.random() * nome.length)];
        const vida = Math.floor(Math.random() * 100) + 50;
        const ataque = Math.floor(Math.random() * 20) + 10;
        return new Monstro_1.default(tipo, vida, ataque);
    }
}
exports.default = GerarMonstro;
