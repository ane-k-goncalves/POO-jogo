"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Jogo {
    iniciarJogo(player, monstro) {
        let ataqueAleatorio = Math.random();
        let dano = player.getAtaque() * ataqueAleatorio;
        if (dano >= 5) {
            console.log(`O jogador ${player.getNome()} venceu a partida!Seu dano foi ${dano}`);
        }
    }
}
exports.default = Jogo;
