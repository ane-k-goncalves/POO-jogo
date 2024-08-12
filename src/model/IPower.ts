import Player from "./Player";

export default interface IPower {

    nome: string;
    descricao: string;

    usePower(player:Player) : void;
}