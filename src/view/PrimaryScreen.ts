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
import GerarMonstro from '../model/GerarMonstro';
import AtualizarFase from '../model/AtualizarFase';
import PlayerController from '../control/PlayerController';
//import Nivel from '../model/Nivel';

export default class PrimaryScreen{
    private jogoController : JogoController;
    private userController: UserController;
    private playerController: PlayerController;

    constructor(jogoController : JogoController, userController: UserController, playerController: PlayerController){
        this.jogoController  = jogoController ;
        this.userController = userController;
        this.playerController = playerController;
    }

   
    private prompt = promptSync();


        public getFirstScreen():void {
        let showScreen: boolean = false;
        while (!showScreen){
            console.clear(); 

            while(true){
            let choice = this.prompt("1. Cadastrar - 2: Entrar - 3: Sair ");



            switch (choice) {
                case '1':
                    console.log("Bem vindo");
                    let nome = this.prompt("Nome: ");
                    let email = this.prompt("Email: ");
                    let senha = this.prompt("Senha: ");

                    
                    let u2 = this.userController.getNewUser();
                    u2.setName(nome);
                    u2.setEmail(email);
                    u2.setSenha(senha);

                    this.userController.newUser(u2);
    
                    
                    break;
                case '2':
                    console.log("Bem vindo, entre na sua conta!")
                    
                    
                    let loginEmail = this.prompt("Email: ");
                    let loginSenha = this.prompt("Senha: ");

                   if ( loginEmail && loginSenha) {
                      let existingUser = this.userController.loginUser(loginEmail, loginSenha);
                        if (existingUser) {
                            console.log(`Bem vindo!`);
                            while(true) {
                            let escolha = this.prompt("1:Criar seu personagem  -  2:Dados - 3:Jogar - 4:Consultar personagens por tipo - 5:Sair");
                            

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
                                
                                let player1 = this.playerController.getNewPlayer();
                                
                                player1.setNome(nomePlayer);
                                player1.setVida(vida);
                                player1.setAtaque(ataque);
                                player1.setTipoPlayer(tipoPlayer);
            
                                this.playerController.addNewPlayer(player1);

                            break;

                            case '2': 
                                const allUsers = this.userController.listarUsers();
                                console.log("Seus dados: \n");
                                console.log( allUsers);
                            break;
                            case '3':
                                const allPlayers = this.playerController.getPlayers();

                                console.log("Escolha o personagem para jogar:");
                                allPlayers.forEach((player, index) => {
                                    console.log(`${index + 1}: ${player.status()}`);
                                });

                                let escolhaPlayer = Number(this.prompt("Digite o número do personagem: ")) - 1;
                                if (escolhaPlayer >= 0 && escolhaPlayer < allPlayers.length) {
                                    let selecionado = allPlayers[escolhaPlayer];
                                    console.log(`Você escolheu: ${selecionado.status()}`);

                                let criar = this.playerController.getNewMonstro()
                                let monstro = criar.gerarMonstro();
                                while(true){
                                    let opcoes = this.prompt("1: Iniciar partida - 2:Dados Monstro - 3:Dados jogador - 4: Consultar fase - 5:Sair ")
                                    switch(opcoes) {
                                        case '1': 
                                            console.log("Iniciando jogo...");
                                            let nivel = 1;
                                          
                                            console.log(this.jogoController.iniciarJogo(selecionado, nivel, monstro));

                                           break;
                                        case '2':
                                           console.log(monstro.status());
                                        break;
                                        case '3':
                                            console.log(selecionado.status());
                                        break;
                                        case '4':
                                            let a = this.prompt("Quantas partidas você venceu? ");

                                            if(typeof a === "string"){
                                                let jog = new AtualizarFase<string>(a)
                                                 console.log(jog.atualizarFase());
                                            }else{
                                                let jogg = new AtualizarFase<number>(a)
                                                console.log(jogg.atualizarFase());
                                            }
                                            break;
                                        case '5':
                                            console.log("Saindo do jogo!");
                                            process.exit(0);
                                        default:
                                            console.log("Escolha inválida. Voltando ao menu principal.");
                                            break;
                                    }
                               
                                }
                            }
                            case '4':
                                console.log("Escolha o tipo de herói para consultar:");
                                let tipoEntrada = this.prompt("Tipo de herói: controlador, duelista, sentinela, iniciador ");
                                let tipo: TipoPlayer;

                                switch(tipoEntrada) {
                                    case 'controlador':
                                        tipo = TipoPlayer.controlador;
                                        break;
                                    case 'duelista':
                                        tipo = TipoPlayer.duelista;
                                        break;
                                    case 'sentinela':
                                        tipo = TipoPlayer.sentinela;
                                        break;
                                    case 'iniciador':
                                        tipo = TipoPlayer.iniciador;
                                        break;
                                    default:
                                        console.log("Tipo de herói inválido.");
                                        return;
                                }

                                const player = this.playerController.getPlayersTipo(tipo);
                                player.forEach(player => console.log(player.status()));
                            break;
                            case '5': 
                           
                                console.log("Saindo do jogo!");
                                process.exit(0);
                            
                                
                            default:
                                console.log("Escolha inválida. Por favor, escolha uma opção válida.");
                                
                        }
                     }
                    }
                }
                break;
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
}



// node ./dist/index.js