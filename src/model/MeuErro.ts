import User from "./User";

export default class MeuErro extends Error {
    constructor(user: User){
        super("Ocorreu erro no " + user.getName())
    }
}