"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Jogo {
    ataqueMonstro(player, monstro) {
        if (player.getVida() > 0) {
            let dano = monstro.getAtaque();
            let vidaRestante = player.getVida() - dano;
            player.setVida(vidaRestante);
        }
        return player.getVida();
    }
    //iniciar batalha- ataqueplayer = defesa mosntro- vidamonstro
    // ataque monstro = defesa player - vidaplayer
    //   usar for para repetir ate que vida do player ou do monstro chegue a zero
    ataquePlayer(player, monstro) {
        if (monstro.getVida() > 0) {
            let dano = player.getAtaque();
            let vidaRestante = monstro.getVida() - dano;
            monstro.setVida(vidaRestante);
        }
        else if (monstro.getVida() == 0 || -0) {
            let pontos = 10;
            let uparNivel = player.getNivel() + pontos;
            player.setVida(uparNivel);
        }
        return monstro.getVida();
    }
}
exports.default = Jogo;
