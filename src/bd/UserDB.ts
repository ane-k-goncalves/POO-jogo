import User from "../model/User";

export default class UserDB {
    private user: User [] = [];

    public newUser(user: User) {
        this.user.push(user);
    }

}