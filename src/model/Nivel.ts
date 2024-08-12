import Fase from "./Fase";
import Player from "./Player";

export default class Nivel extends Fase {

    constructor(nivel:number, player:Player) {
       super(nivel, player);
    }
    atualizarNivel(): void{
        if (this.nivel >= 20) {
            console.log("Fase 2!");
        } else {
            console.log("Ainda na fase 1");
        }

    }
}




