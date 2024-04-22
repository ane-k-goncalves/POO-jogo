import PrimaryScreen from "../view/PrimaryScreen";
import Jogo from "../model/Jogo";
import JogoController from "./JogoController";


export default class BasicController{

   
    private primaryScreen: PrimaryScreen = new PrimaryScreen(new JogoController());

    public startSystem():void {
        this.primaryScreen.getFirstScreen();
    }
}