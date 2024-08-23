export default class AtualizarFase <V extends any> {

    public entrada: V;

    public constructor(entrada: V){
        this.entrada = entrada;
    }
    atualizarFase(): V{
        return this.entrada;
    }
}