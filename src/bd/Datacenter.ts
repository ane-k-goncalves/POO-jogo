import Jogo from "../model/Jogo";
import Player from "../model/Player";

export default class Datacenter <V extends number>{
    public jogo : Jogo <V> [] = [];

    public addNewPlay(jogo: Jogo<V>): void{
        this.jogo.push(jogo);
    }
    public getNewPlay(): number{
        return this.jogo.length;
    }
}