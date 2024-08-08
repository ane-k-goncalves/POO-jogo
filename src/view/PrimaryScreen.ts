import promptSync from "prompt-sync";
import Jogo from "../model/Jogo";
import Personagens from "../model/Personagens";
import JogoController
 from "../control/JogoController";

export default class PrimaryScreen{
    private jogoController : JogoController;

    constructor(jogoController : JogoController){
        this.jogoController  = jogoController ;
    }
    private prompt = promptSync();


        public getFirstScreen():void {
            let showScreen: boolean = false;
        while (!showScreen){
            console.clear(); 
            
            console.log("Bem vindo")

            //cadastro logar
            let choice = this.prompt("1: jogar - 2: sair");
            
            switch (choice) {
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
            }
        }
    }

    public iniciarJogo(): void{
       this.jogoController.getNewPlay();
        
        
    }
    
}