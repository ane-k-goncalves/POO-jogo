"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Personagens {
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getVida() {
        return this.vida;
    }
    setVida(vida) {
        this.vida = vida;
    }
    getAtaque() {
        return this.ataque;
    }
    setAtaque(ataque) {
        this.ataque = ataque;
    }
    constructor(nome, vida, ataque) {
        this.nome = "";
        this.vida = 0;
        this.ataque = 0;
        this.nome = nome;
        this.vida = vida;
        if (ataque === undefined) {
            console.log("Ataque não definido");
        }
        else {
            this.ataque = ataque;
        }
    }
    status() {
        return `nome do jogador: ${this.getNome()},\n vida do jogador: ${this.getVida()}`;
    }
    dialogo() {
        return "Eu vou te derrotar";
    }
}
exports.default = Personagens;
