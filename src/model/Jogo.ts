import Fase from "./Fase";
import GerarMonstro from "./GerarMonstro";
import Monstro from "./Monstro";
import Player from "./Player";

export default class Jogo<V extends number> extends Fase<V> {

    constructor(nivel: V, player: Player, monstro: Monstro) {
        super(nivel, player, monstro);
    }
   

    public iniciarJogo(nivel: V, player:Player, monstro:Monstro):void { // Pode retornar um number sem problemas
        let ataqueAleatorio = Math.random();
        let dano = player.getAtaque() * ataqueAleatorio;
        let subir = 20;
        

        if (dano >= 0.7) {
            console.log(`O jogador ${player.getNome()} venceu a partida! Seu dano foi ${dano}`);
           
            nivel = 20 as V; 

            let a = nivel;

        if (a >= subir) {
            console.log("Fase 2!");
        } else {
            console.log("Ainda na fase 1");
        }

        subir++;

            
        }else{
            console.log(`O jogador ${player.getNome()} perdeu a partida! Seu dano foi ${dano}`);
            nivel = 5 as V;
        
       
        let a = nivel;4


        if (a >= subir) {
            console.log("Fase 2!");
        } else {
            console.log("Ainda na fase 1");
        }

    }
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
    
