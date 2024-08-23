import PrimaryScreen from "../view/PrimaryScreen";
import Jogo from "../model/Jogo";
import JogoController from "./JogoController";
import UserController from "./UserController";
import PlayerController from "./PlayerController";


export default class BasicController{

   
    private primaryScreen: PrimaryScreen = new PrimaryScreen(new JogoController(), new UserController(), new PlayerController());

    public startSystem():void {
        this.primaryScreen.getFirstScreen();
    }
}