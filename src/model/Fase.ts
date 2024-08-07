import Player from "./Player";

export default abstract class Fase {
    private nivel: number;
    private player: Player;

    public constructor(nivel:number, player:Player){
        this.nivel = nivel;
        this.player = player;
    }

    atualizarNivel(): void{
        this.nivel = 10;
    }

}