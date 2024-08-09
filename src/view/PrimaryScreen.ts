import promptSync from "prompt-sync";
import Jogo from "../model/Jogo";
import Personagens from "../model/Personagens";
import JogoController
 from "../control/JogoController";
import User from "../model/User";
import UserController from "../control/UserController";

export default class PrimaryScreen{
    private jogoController : JogoController;
    private userController: UserController;

    constructor(jogoController : JogoController, userController: UserController){
        this.jogoController  = jogoController ;
        this.userController = userController;
    }

   
    private prompt = promptSync();


        public getFirstScreen():void {
        let showScreen: boolean = false;
        while (!showScreen){
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

                    let u = new User(nome, email, senha);
                    this.userController.newUser(u);
                    break;
                case '2':
                    console.log("Bem vindo novamente!")
                   
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

    public iniciarJogo(): void{
       this.jogoController.getNewPlay();
        
        
    }
    
}