import Personagens from "./model/Personagens";
import BasicController from "./control/BasicController";
import JogoController from "./control/JogoController";
import Jogo from "./model/Jogo";
import Player from "./model/Player";
import Monstro from "./model/Monstro";

let player1 : Player = new Player("Ane",70,30,1);
player1.setNome("Ane");
player1.setVida(70);
player1.setAtaque(30);
player1.setNivel(1);
player1.setIdPlayer(1)
console.log(player1)

//analisar se nivel nao pode ser uma classe, e a class itens herdarem da class nivel a info sobre o nivel do jogador e assim definir o dano do item
//dependendo disso

//fazer documetação

//banco de dados?id player - nivel player

let monstro : Monstro =  new Monstro("Monster", 40, 10, 1);
monstro.setNome("monstro");
monstro.setVida(40);
monstro.setAtaque(10);
monstro.setNivel(1);

monstro.setPontosDeExperienciaAoDerrotar(10);



console.log(player1.getVida())

//let startController: BasicController = new BasicController();
//startController.startSystem();

let jogar : JogoController = new JogoController();
jogar.getNewPlay();

console.log(player1.getVida())

let batalha : Jogo = new Jogo();
batalha.ataquePlayer(player1,monstro);

console.log(monstro.getVida());

console.log(player1.status());

let batalha2 : Jogo = new Jogo();
batalha.ataquePlayer(player1,monstro);
console.log(monstro.getVida());
console.log(player1.getNivel());