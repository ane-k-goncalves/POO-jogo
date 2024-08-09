"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const User_1 = __importDefault(require("../model/User"));
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
            let choice = this.prompt("1. Cadastrar - 2: Entrar ");
            //cadastro logar
            //let choice = this.prompt("1: jogar - 2: sair");
            switch (choice) {
                case '1':
                    console.log("Bem vindo");
                    let nome = this.prompt("Nome: ");
                    let email = this.prompt("Email: ");
                    let senha = this.prompt("Senha: ");
                    let u = new User_1.default(nome, email, senha);
                    this.userController.newUser(u);
                    break;
                case '2':
                    console.log("Bem vindo novamente!");
                    break;
                default:
                    console.log("Escolha inválida. Por favor, escolha uma opção válida.");
                    break;
            }
            /* switch (choice) {
                 case '1':
                     console.log("Iniciando o jogo...")
                     this.iniciarJogo();
                 
                     break;
                 case '2':
                     console.log("Saindo do jogo. Até mais!");
                     process.exit(0); // Encerra o programa
                     break;
                 default:
                     console.log("Escolha inválida. Por favor, escolha uma opção válida.");
                     break;
             }*/
        }
    }
    iniciarJogo() {
        this.jogoController.getNewPlay();
    }
}
exports.default = PrimaryScreen;
