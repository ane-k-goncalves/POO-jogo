import UserDB from "../bd/UserDB";
import User from "../model/User";

export default class UserController { 
    private datacenter: UserDB  = new UserDB(); 

    public newUser(user: User) {
        this.datacenter.newUser(user);
    }
}