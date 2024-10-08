"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrimaryScreen_1 = __importDefault(require("../view/PrimaryScreen"));
const JogoController_1 = __importDefault(require("./JogoController"));
const UserController_1 = __importDefault(require("./UserController"));
const PlayerController_1 = __importDefault(require("./PlayerController"));
class BasicController {
    constructor() {
        this.primaryScreen = new PrimaryScreen_1.default(new JogoController_1.default(), new UserController_1.default(), new PlayerController_1.default());
    }
    startSystem() {
        this.primaryScreen.getFirstScreen();
    }
}
exports.default = BasicController;
