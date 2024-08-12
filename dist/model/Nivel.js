"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Fase_1 = __importDefault(require("./Fase"));
class Nivel extends Fase_1.default {
    constructor(nivel, player) {
        super(nivel, player);
    }
    atualizarNivel() {
        if (this.nivel >= 20) {
            console.log("Fase 2!");
        }
        else {
            console.log("Ainda na fase 1");
        }
    }
}
exports.default = Nivel;
