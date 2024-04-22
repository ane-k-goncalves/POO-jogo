import Personagens from "./Personagens";
import Player from "./Player";
import Monstro from "./Monstro";

export default class Jogo {

    
    public ataqueMonstro(player:Player, monstro: Monstro): number{

        if(player.getVida() > 0){
           let dano = monstro.getAtaque();
           let vidaRestante = player.getVida() - dano;
           player.setVida(vidaRestante);
           
        }
        return player.getVida();
    }

            //iniciar batalha- ataqueplayer = defesa mosntro- vidamonstro
                        // ataque monstro = defesa player - vidaplayer
                    //   usar for para repetir ate que vida do player ou do monstro chegue a zero


    public ataquePlayer(player:Player, monstro:Monstro): number{
    
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

}