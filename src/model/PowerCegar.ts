import IPower from "./IPower";
import Player from "./Player";

export default class PowerCegar implements IPower {
    public nome: string ;
    public descricao: string ;

    constructor(nome:string, descricao:string) {
        this.nome = nome;
        this.descricao = descricao;
    }

    usePower(player: Player): void {
        console.log( `${player.getNome()} usou ${this.nome} que ${this.descricao} `)
    }

}