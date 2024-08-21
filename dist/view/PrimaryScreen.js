"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TipoPlayer_1 = require("./../model/TipoPlayer");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const User_1 = __importDefault(require("../model/User"));
const Player_1 = __importDefault(require("../model/Player"));
const GerarMonstro_1 = __importDefault(require("../model/GerarMonstro"));
//import Nivel from '../model/Nivel';
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
                case '2':
                    console.log("Bem vindo, entre na sua conta!");
                    let loginEmail = this.prompt("Email: ");
                    let loginSenha = this.prompt("Senha: ");
                    if (loginEmail && loginSenha) {
                        let existingUser = this.userController.loginUser(loginEmail, loginSenha);
                        if (existingUser) {
                            console.log(`Bem vindo!`);
                            while (true) {
                                let escolha = this.prompt("1:Criar seu personagem  -  2:Dados - 3:Sair");
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
                                        while (true) {
                                            let player1 = new Player_1.default(nomePlayer, vida, ataque, tipoPlayer);
                                            let criar = new GerarMonstro_1.default();
                                            let monstro = criar.gerarMonstro();
                                            let opcoes = this.prompt("1: Iniciar partida - 2:Dados Monstro - 3:Dados jogador - 4:Sair ");
                                            switch (opcoes) {
                                                case '1':
                                                    console.log("Iniciando jogo...");
                                                    let nivel = 1;
                                                    console.log(this.jogoController.iniciarJogo(player1, nivel, monstro));
                                                    break;
                                                case '2':
                                                    console.log(monstro.status());
                                                    break;
                                                case '3':
                                                    console.log(player1.status());
                                                    break;
                                                case '4':
                                                    console.log("Saindo do jogo!");
                                                    process.exit(0);
                                                default:
                                                    console.log("Escolha inválida. Voltando ao menu principal.");
                                                    break;
                                            }
                                        }
                                    case '2':
                                        const allUsers = this.userController.listarUsers();
                                        console.log("Seus dados: \n");
                                        console.log(allUsers);
                                        break;
                                    case '3':
                                        console.log("Saindo do jogo!");
                                        process.exit(0);
                                    default:
                                        console.log("Escolha inválida. Por favor, escolha uma opção válida.");
                                }
                            }
                        }
                    }
                case '4':
                    console.log("Saindo do jogo!");
                    process.exit(0);
                default:
                    console.log("Escolha inválida. Por favor, escolha uma opção válida.");
                    break;
            }
        }
    }
}
exports.default = PrimaryScreen;
// node ./dist/index.js
