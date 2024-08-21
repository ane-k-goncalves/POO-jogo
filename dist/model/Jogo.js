"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Fase_1 = __importDefault(require("./Fase"));
class Jogo extends Fase_1.default {
    constructor(nivel, player, monstro) {
        super(nivel, player, monstro);
    }
    iniciarJogo(nivel, player, monstro) {
        let ataqueAleatorio = Math.random();
        let dano = player.getAtaque() * ataqueAleatorio;
        let subir = 20;
        if (dano >= 0.7) {
            console.log(`O jogador ${player.getNome()} venceu a partida! Seu dano foi ${dano}`);
            nivel = 20;
            let a = nivel;
            if (a >= subir) {
                console.log("Fase 2!");
            }
            else {
                console.log("Ainda na fase 1");
            }
            subir++;
        }
        else {
            console.log(`O jogador ${player.getNome()} perdeu a partida! Seu dano foi ${dano}`);
            nivel = 5;
            let a = nivel;
            4;
            if (a >= subir) {
                console.log("Fase 2!");
            }
            else {
                console.log("Ainda na fase 1");
            }
        }
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
