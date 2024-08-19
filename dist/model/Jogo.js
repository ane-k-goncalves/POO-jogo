"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Fase_1 = __importDefault(require("./Fase"));
class Jogo extends Fase_1.default {
    constructor(nivel, player) {
        super(nivel, player);
    }
    iniciarJogo(nivel, player) {
        let ataqueAleatorio = Math.random();
        let dano = this.player.getAtaque() * ataqueAleatorio;
        if (dano >= 7) {
            console.log(`O jogador ${this.player.getNome()} venceu a partida! Seu dano foi ${dano}`);
            // this.nivel = 20 as V; // Atualiza o nível se a condição for satisfeita
        }
    }
    atualizarNivel() {
        if (this.nivel >= 20) {
            console.log("Fase 2!");
        }
        else {
            console.log("Ainda na fase 1");
        }
        return this.nivel;
    }
}
exports.default = Jogo;
/*public ataqueMonstro(player:Player, monstro: Monstro): number{

    if(player.getVida() > 0){
       let dano = monstro.getAtaque();
       let vidaRestante = player.getVida() - dano;
       player.setVida(vidaRestante);
       
    }
    return player.getVida();
}*/
//iniciar batalha- ataqueplayer = defesa mosntro- vidamonstro
// ataque monstro = defesa player - vidaplayer
//   usar for para repetir ate que vida do player ou do monstro chegue a zero
/*public ataquePlayer(player:Player, monstro:Monstro): number{

    if(monstro.getVida() > 0){
        let dano = player.getAtaque();
        let vidaRestante = monstro.getVida() - dano;
        monstro.setVida(vidaRestante);
    } else if (monstro.getVida() == 0 || -0){
        let pontos: number = 10;
        let uparNivel = player.getNivel() + pontos;
        player.setVida(uparNivel);
      
    }

    return monstro.getVida();
}


/*public Experiencia(): number{
    if(monstro.getVida() == 0){
        return .getNivel()+5;
    }
 return this.getNivel();
}*/
