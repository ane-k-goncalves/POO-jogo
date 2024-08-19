import Fase from "./Fase";
import Player from "./Player";

export default class Jogo<V extends number> extends Fase<V> {

    constructor(nivel: V, player: Player) {
        super(nivel, player);
    }
   

    public iniciarJogo(nivel: V, player:Player):void { // Pode retornar um number sem problemas
        let ataqueAleatorio = Math.random();
        let dano = this.player.getAtaque() * ataqueAleatorio;

        if (dano >= 7) {
            console.log(`O jogador ${this.player.getNome()} venceu a partida! Seu dano foi ${dano}`);
           // this.nivel = 20 as V; // Atualiza o nível se a condição for satisfeita
        }
       
       
      
    }

    public atualizarNivel(): V {
        if (this.nivel >= 20) {
            console.log("Fase 2!");
        } else {
            console.log("Ainda na fase 1");
        }

        return this.nivel;
    }
}




    
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
    
