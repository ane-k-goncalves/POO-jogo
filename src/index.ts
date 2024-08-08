import Personagens from "./model/Personagens";
import BasicController from "./control/BasicController";
import JogoController from "./control/JogoController";
import Jogo from "./model/Jogo";
import Player from "./model/Player";
import Monstro from "./model/Monstro";
import PrimaryScreen from "./view/PrimaryScreen";
import Nivel from "./model/Nivel";

// import BasicController from "./control/BasicController";

let player1 : Player = new Player("Ane",70,30);
player1.setNome("Ane");
player1.setVida(70);
player1.setAtaque(30);

player1.setIdPlayer(1)
console.log(player1)

//analisar se nivel nao pode ser uma classe, e a class itens herdarem da class nivel a info sobre o nivel do jogador e assim definir o dano do item
//dependendo disso

//fazer documetação

//banco de dados?id player - nivel player

let monstro : Monstro =  new Monstro("Monster", 40, undefined);





console.log(player1.getVida())

//let startController: BasicController = new BasicController();
//startController.startSystem();

let jogar : JogoController = new JogoController();
jogar.getNewPlay();

console.log(player1.getVida())

let batalha : Jogo = new Jogo();
batalha.iniciarJogo(player1, monstro);

console.log(monstro.getVida());

console.log(player1.status());

let batalha2 : Jogo = new Jogo();
batalha.iniciarJogo(player1,monstro);
console.log(monstro.getVida());


let p = new Nivel(10)

console.log(p.nivel)

console.log(player1.dialogo())
console.log(monstro.dialogo())
console.log(player1.status());
console.log(monstro.status());



// let firstScreen: BasicController = new BasicController();

// firstScreen.startSystem();