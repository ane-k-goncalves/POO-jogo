"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JogoController_1 = __importDefault(require("./control/JogoController"));
const Jogo_1 = __importDefault(require("./model/Jogo"));
const Player_1 = __importDefault(require("./model/Player"));
const Monstro_1 = __importDefault(require("./model/Monstro"));
let player1 = new Player_1.default("Ane", 70, 30, 1);
player1.setNome("Ane");
player1.setVida(70);
player1.setAtaque(30);
player1.setNivel(1);
player1.setIdPlayer(1);
console.log(player1);
//analisar se nivel nao pode ser uma classe, e a class itens herdarem da class nivel a info sobre o nivel do jogador e assim definir o dano do item
//dependendo disso
//fazer documetação
//banco de dados?id player - nivel player
let monstro = new Monstro_1.default("Monster", 40, 10, 1);
monstro.setNome("monstro");
monstro.setVida(40);
monstro.setAtaque(10);
monstro.setNivel(1);
monstro.setPontosDeExperienciaAoDerrotar(10);
console.log(player1.getVida());
//let startController: BasicController = new BasicController();
//startController.startSystem();
let jogar = new JogoController_1.default();
jogar.getNewPlay();
console.log(player1.getVida());
let batalha = new Jogo_1.default();
batalha.ataquePlayer(player1, monstro);
console.log(monstro.getVida());
console.log(player1.status());
let batalha2 = new Jogo_1.default();
batalha.ataquePlayer(player1, monstro);
console.log(monstro.getVida());
console.log(player1.getNivel());
