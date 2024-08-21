import Monstro from "./Monstro";

export default class GerarMonstro {

    gerarMonstro(): Monstro {
        const nome = ["Goblin", "Orc","Draggão" ];
        const tipo = nome[Math.floor(Math.random() * nome.length)];

        const vida = Math.floor(Math.random() * 100) + 50;
        const ataque = Math.floor(Math.random() * 20) + 10;
     
        return new Monstro(tipo, vida, ataque);
    }
}