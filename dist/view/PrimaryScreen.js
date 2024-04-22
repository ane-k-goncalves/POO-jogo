"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class PrimaryScreen {
    constructor(jogoController) {
        this.prompt = (0, prompt_sync_1.default)();
        this.jogoController = jogoController;
    }
    getFirstScreen() {
        let showScreen = false;
        while (!showScreen) {
            console.clear();
            let choice = this.prompt("1: jogar - 2: sair");
            switch (choice) {
                case '1':
                    console.log("Iniciando o jogo...");
                    this.iniciarJogo();
                    break;
                case '2':
                    console.log("Saindo do jogo. Até mais!");
                    process.exit(0); // Encerra o programa
                    break;
                default:
                    console.log("Escolha inválida. Por favor, escolha uma opção válida.");
                    break;
            }
        }
    }
    iniciarJogo() {
        this.jogoController.getNewPlay();
    }
}
exports.default = PrimaryScreen;
