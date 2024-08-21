import Datacenter from "../bd/Datacenter";
import GerarMonstro from "../model/GerarMonstro";
import Jogo from "../model/Jogo";
import Monstro from "../model/Monstro";

import Player from "../model/Player";
import PrimaryScreen from "../view/PrimaryScreen";

export default class JogoController{
    private datacenter: Datacenter<number> = new Datacenter(); 


    public getNewPlay(nivel: number, player: Player, monstro: Monstro): Jogo<number> {
         return new Jogo<number>(nivel, player, monstro);
    }
    public registerNewJogo(jogo: Jogo<number>){
        this.datacenter.addNewPlay(jogo);
    }

    public iniciarJogo(player: Player, nivel:number, monstro:Monstro): void {
        const jogo = this.getNewPlay( nivel, player, monstro);
        jogo.iniciarJogo(nivel, player, monstro);
        this.registerNewJogo(jogo);

    }
}