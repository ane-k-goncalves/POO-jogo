import { TipoPlayer } from './../model/TipoPlayer';
import promptSync from "prompt-sync";
import Jogo from "../model/Jogo";
import Personagens from "../model/Personagens";
import JogoController
 from "../control/JogoController";
import User from "../model/User";
import UserController from "../control/UserController";
import Player from '../model/Player';
import { log } from 'console';
import Monstro from '../model/Monstro';
//import Nivel from '../model/Nivel';

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


            let choice = this.prompt("1. Cadastrar - 2: Entrar - 3: Sair ");



            switch (choice) {
                case '1':
                    console.log("Bem vindo");
                    let nome = this.prompt("Nome: ");
                    let email = this.prompt("Email: ");
                    let senha = this.prompt("Senha: ");

                    let u = new User(nome, email, senha);
                    this.userController.newUser(u);
        

                    //const allUsers = this.userController.listarUsers();
                    //console.log(allUsers);
                    
                    
                case '2':
                    console.log("Bem vindo, entre na sua conta!")
                    
                    
                    let loginEmail = this.prompt("Email: ");
                    let loginSenha = this.prompt("Senha: ");

                   if ( loginEmail && loginSenha) {
                      let existingUser = this.userController.loginUser(loginEmail, loginSenha);
                        if (existingUser) {
                            console.log(`Bem vindo!`);
                            let escolha = this.prompt("1:Criar seu personagem - 2:Sair");
                            let  player1:any 

                            switch(escolha) {
                                case '1' :
                                    console.log("Crie seu personagem para a partida");
                                    let nomePlayer = this.prompt("Nome: ");
                                    let vida = Number(this.prompt("Vida: "));
                                    let ataque = Number( this.prompt("Ataque: "));
                                    
                                    let tipoPlayerEntrada = this.prompt("Tipo de heroi: controlador, duelista, sentinela, iniciador ");
                                    let tipoPlayer: TipoPlayer;

                                    switch(tipoPlayerEntrada) {
                                        case 'controlador':
                                            tipoPlayer = TipoPlayer.controlador;
                                            break;
                                        case 'duelista':
                                            tipoPlayer = TipoPlayer.duelista;
                                            break;
                                        case 'sentinela':
                                            tipoPlayer = TipoPlayer.sentinela;
                                            break;
                                        case 'iniciador':
                                            tipoPlayer = TipoPlayer.iniciador;
                                            break;
                                        default:
                                            console.log("Tipo de herói inválido. Usando controlador como padrão.");
                                            tipoPlayer = TipoPlayer.controlador;
                                    }

                
                                    
                                let player1 : Player = new Player(nomePlayer, vida, ataque, tipoPlayer);
                                let monstro1 = new Monstro("monstro", 100, 50);
                                
                                    let opcoes = this.prompt("1: Iniciar partida - 2:Consultar Nivel - 3:Dados jogador - 4:Sair ")
                                    switch(opcoes) {
                                        case '1': 
                                            console.log("Iniciando jogo...");
                                            let nivel = 1;
                                          
                                          console.log( this.jogoController.iniciarJogo(player1, nivel));

                                           break;
                                       /* case '2':
                                            let nivelAtualizado =1;
                                            let a:Jogo<number> = new Jogo(nivelAtualizado, player1);
                                            console.log(a.atualizarNivel());
                                        break;*/
                                        case '3':
                                            console.log(player1.status());
                                        break;
                                    }
                                
                                    
                                

                                break;
                                
                                case '4':
                                    console.log("Saindo do jogo!");
                                    process.exit(0);
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


}

// node ./dist/index.js