import Personagens from "./Personagens";

export default class Monstro extends Personagens{
    public status(): string {
        return `vida do monstro: ${this.getVida()},\n ataque o monstro${this.getAtaque()}`;
    }

    private pontosDeExperienciaAoDerrotar: number = 0;

    constructor(nome: string,vida: number, ataque: number, nivel: number){
        super(nome, vida, ataque, nivel);
        
        this.pontosDeExperienciaAoDerrotar = this.pontosDeExperienciaAoDerrotar;
    }

    public getPontosDeExperienciaAoDerrotar(): number{
        return this.pontosDeExperienciaAoDerrotar;
    }
    public setPontosDeExperienciaAoDerrotar(pontosDeExperienciaAoDerrotar:number){
        this.pontosDeExperienciaAoDerrotar = pontosDeExperienciaAoDerrotar;
    }


    
}