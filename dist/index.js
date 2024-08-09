"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TipoPlayer_1 = require("./model/TipoPlayer");
const JogoController_1 = __importDefault(require("./control/JogoController"));
const Jogo_1 = __importDefault(require("./model/Jogo"));
const Player_1 = __importDefault(require("./model/Player"));
const Monstro_1 = __importDefault(require("./model/Monstro"));
const Nivel_1 = __importDefault(require("./model/Nivel"));
// import BasicController from "./control/BasicController";
//analisar se nivel nao pode ser uma classe, e a class itens herdarem da class nivel a info sobre o nivel do jogador e assim definir o dano do item
//dependendo disso
//fazer documetação
//banco de dados?id player - nivel player
let monstro = new Monstro_1.default("Monster", 40, undefined);
//let startController: BasicController = new BasicController();
//startController.startSystem();
let jogar = new JogoController_1.default();
jogar.getNewPlay();
let batalha = new Jogo_1.default();
//batalha.iniciarJogo(player1, monstro);
console.log(monstro.getVida());
let batalha2 = new Jogo_1.default();
//batalha.iniciarJogo(player1,monstro);
console.log(monstro.getVida());
let p = new Nivel_1.default(10);
console.log(p.nivel);
console.log(monstro.dialogo());
console.log(monstro.status());
console.log(TipoPlayer_1.TipoPlayer[3]);
let player1 = new Player_1.default("Ane", 70, 30, TipoPlayer_1.TipoPlayer.controlador);
console.log(player1.status());
console.log(player1.dialogo());
let j = new Jogo_1.default();
j.iniciarJogo(player1, monstro);
//let firstScreen: BasicController = new BasicController();
//firstScreen.startSystem();
