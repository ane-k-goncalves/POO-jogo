"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TipoPlayer_1 = require("./../model/TipoPlayer");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const User_1 = __importDefault(require("../model/User"));
const Player_1 = __importDefault(require("../model/Player"));
const Monstro_1 = __importDefault(require("../model/Monstro"));
class PrimaryScreen {
    constructor(jogoController, userController) {
        this.prompt = (0, prompt_sync_1.default)();
        this.jogoController = jogoController;
        this.userController = userController;
    }
    getFirstScreen() {
        let showScreen = false;
        while (!showScreen) {
            console.clear();
            let choice = this.prompt("1. Cadastrar - 2: Entrar - 3: Sair ");
            switch (choice) {
                case '1':
                    console.log("Bem vindo");
                    let nome = this.prompt("Nome: ");
                    let email = this.prompt("Email: ");
                    let senha = this.prompt("Senha: ");
                    let u = new User_1.default(nome, email, senha);
                    this.userController.newUser(u);
                //const allUsers = this.userController.listarUsers();
                //console.log(allUsers);
                case '2':
                    console.log("Bem vindo, entre na sua conta!");
                    let loginEmail = this.prompt("Email: ");
                    let loginSenha = this.prompt("Senha: ");
                    if (loginEmail && loginSenha) {
                        let existingUser = this.userController.loginUser(loginEmail, loginSenha);
                        if (existingUser) {
                            console.log(`Bem vindo!`);
                            let escolha = this.prompt("1:Iniciar jogo");
                            let player1;
                            switch (escolha) {
                                case '1':
                                    console.log("Crie seu personagem para a partida");
                                    let nomePlayer = this.prompt("Nome: ");
                                    let vida = Number(this.prompt("Vida: "));
                                    let ataque = Number(this.prompt("Ataque: "));
                                    let tipoPlayerEntrada = this.prompt("Tipo de heroi: controlador, duelista, sentinela, iniciador ");
                                    let tipoPlayer;
                                    switch (tipoPlayerEntrada) {
                                        case 'controlador':
                                            tipoPlayer = TipoPlayer_1.TipoPlayer.controlador;
                                            break;
                                        case 'duelista':
                                            tipoPlayer = TipoPlayer_1.TipoPlayer.duelista;
                                            break;
                                        case 'sentinela':
                                            tipoPlayer = TipoPlayer_1.TipoPlayer.sentinela;
                                            break;
                                        case 'iniciador':
                                            tipoPlayer = TipoPlayer_1.TipoPlayer.iniciador;
                                            break;
                                        default:
                                            console.log("Tipo de herói inválido. Usando controlador como padrão.");
                                            tipoPlayer = TipoPlayer_1.TipoPlayer.controlador;
                                    }
                                    let player1 = new Player_1.default(nomePlayer, vida, ataque, tipoPlayer);
                                    console.log(player1.status());
                                    console.log("Iniciando jogo...");
                                    let monstro = new Monstro_1.default("monstro", 100, 50);
                                    this.jogoController.iniciarJogo(player1, monstro);
                                    break;
                                default:
                                    console.log("Escolha inválida. Voltando ao menu principal.");
                                    break;
                            }
                        }
                    }
                case '3':
                    console.log("Saindo do jogo!");
                    process.exit(0);
                default:
                    console.log("Escolha inválida. Por favor, escolha uma opção válida.");
                    break;
            }
        }
    }
    iniciarJogo() {
        const jogo = this.jogoController.getNewPlay();
    }
}
exports.default = PrimaryScreen;
// node ./dist/index.js
