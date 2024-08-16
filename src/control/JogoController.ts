import Datacenter from "../bd/Datacenter";
import Jogo from "../model/Jogo";
import Monstro from "../model/Monstro";
import Player from "../model/Player";
import PrimaryScreen from "../view/PrimaryScreen";

export default class JogoController{
    private datacenter: Datacenter = new Datacenter(); 


    public getNewPlay(): Jogo {
         return new Jogo();
    }
    public registerNewJogo(jogo: Jogo){
        this.datacenter.addNewPlay(jogo);
    }

    public iniciarJogo(player: Player, monstro: Monstro): void {
        const jogo = this.getNewPlay();
        jogo.iniciarJogo(player, monstro);
        this.registerNewJogo(jogo);
    }
}