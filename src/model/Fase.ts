import Player from "./Player";

export default abstract class Fase <V>{
    protected nivel: V;
    protected player: Player;

    public constructor(nivel: V, player:Player){
        this.nivel = nivel;
        this.player = player;
    }
  

    abstract atualizarNivel(): V;
    abstract iniciarJogo(nivel: V, player:Player): void;
}