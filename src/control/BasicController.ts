import PrimaryScreen from "../view/PrimaryScreen";
import Jogo from "../model/Jogo";
import JogoController from "./JogoController";
import UserController from "./UserController";


export default class BasicController{

   
    private primaryScreen: PrimaryScreen = new PrimaryScreen(new JogoController(), new UserController());

    public startSystem():void {
        this.primaryScreen.getFirstScreen();
    }
}