import Inivel from "./Inivel"

export default class Nivel implements Inivel {
    public nivel: number;

    constructor(nivel:number) {
        this.nivel = nivel;
    }
    atualizarNivel(): number{
       return this.nivel;
    }
}




