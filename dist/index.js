"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JogoController_1 = __importDefault(require("./control/JogoController"));
const Jogo_1 = __importDefault(require("./model/Jogo"));
const Player_1 = __importDefault(require("./model/Player"));
const Monstro_1 = __importDefault(require("./model/Monstro"));
const Nivel_1 = __importDefault(require("./model/Nivel"));
let player1 = new Player_1.default("Ane", 70, 30);
player1.setNome("Ane");
player1.setVida(70);
player1.setAtaque(30);
player1.setIdPlayer(1);
console.log(player1);
//analisar se nivel nao pode ser uma classe, e a class itens herdarem da class nivel a info sobre o nivel do jogador e assim definir o dano do item
//dependendo disso
//fazer documetação
//banco de dados?id player - nivel player
let monstro = new Monstro_1.default("Monster", 40, 10);
console.log(player1.getVida());
//let startController: BasicController = new BasicController();
//startController.startSystem();
let jogar = new JogoController_1.default();
jogar.getNewPlay();
console.log(player1.getVida());
let batalha = new Jogo_1.default();
batalha.iniciarJogo(player1, monstro);
console.log(monstro.getVida());
console.log(player1.status());
let batalha2 = new Jogo_1.default();
batalha.iniciarJogo(player1, monstro);
console.log(monstro.getVida());
let p = new Nivel_1.default(10);
console.log(p.nivel);
console.log(player1.dialogo());
console.log(monstro.dialogo());
console.log(player1.status());
console.log(monstro.status());
