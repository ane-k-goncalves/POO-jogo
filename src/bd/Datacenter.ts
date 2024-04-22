import Jogo from "../model/Jogo";
import Player from "../model/Player";

export default class Datacenter{
    public jogo : Jogo [] = [];

    public addNewPlay(jogo: Jogo): void{
        this.jogo.push(jogo);
    }
    public getNewPlay(): number{
        return this.jogo.length;
    }
}