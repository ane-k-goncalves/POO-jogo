import Jogo from "./Jogo";
import Personagens from "./Personagens"; 

export default class Nivel extends Personagens{

    

    constructor(nome: string, vida: number ,ataque: number,nivel: number){
        super(nome,vida,ataque,nivel);
    }

    public atualizarVida(): void{

    }
    public atualizarNivel(): void{
        //pensar em logica para coisar os pontos
    }
    public atualizaAtaque(): void{

    }
    status():string {
        return `Nome do jogador: ${this.getNome()},\n Vida atualizada do jogador: ${this.atualizarVida()},\n Ataque
        atualizado do jogador: ${this.atualizaAtaque()},\n Nivel atualizado do jogador: ${this.atualizarNivel}`;
        
    }

    //acho que o nivel tem que ser uma class pai para herdar para outra class os metodos de upar e ai sim imprimir o status.

    //criar nivel

    //sobe de nivel apartir de pontos de experiencia 
    //quando sobre de nivel sobe a vida,ataque

    //sobe tambem o do monstro

    
}