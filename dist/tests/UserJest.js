"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDB_1 = __importDefault(require("../bd/UserDB"));
describe('Userdb', () => {
    let userdb;
    beforeEach(() => {
        userdb = new UserDB_1.default();
    });
    test('deve retornar null', () => {
        userdb.users = null;
        const user = userdb.getUserByEmailAndPassword("", "senha123");
        expect(user).toBeNull();
    });
});
