import Player from "./Player";

export default abstract class Fase {
    protected nivel: number;
    private player: Player;

    public constructor(nivel:number, player:Player){
        this.nivel = nivel;
        this.player = player;
    }

    abstract atualizarNivel(): void;

}