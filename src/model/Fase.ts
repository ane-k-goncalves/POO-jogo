import Player from "./Player";

import GerarMonstro from "./GerarMonstro";
import Monstro from "./Monstro";

export default abstract class Fase <V>{
    protected nivel: V;
    protected player: Player;
    protected monstro: Monstro;

    public constructor(nivel: V, player:Player, monstro: Monstro){
        this.nivel = nivel;
        this.player = player;
        this.monstro = monstro;
    }
  

    
    abstract iniciarJogo(nivel: V, player:Player, monstro: Monstro): void;
}