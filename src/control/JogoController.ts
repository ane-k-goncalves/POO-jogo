import Datacenter from "../bd/Datacenter";
import Jogo from "../model/Jogo";
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
}