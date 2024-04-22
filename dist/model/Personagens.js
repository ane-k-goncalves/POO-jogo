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
    getNivel() {
        return this.nivel;
    }
    setNivel(nivel) {
        this.nivel = nivel;
    }
    constructor(nome, vida, ataque, nivel) {
        this.nome = "";
        this.vida = 0;
        this.ataque = 0;
        this.nivel = 0;
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.nivel = nivel;
    }
}
exports.default = Personagens;
