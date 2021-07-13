import { ProxyState } from "../AppState.js";
import Snack from "../Models/Snack.js";

class SnacksService{
    addMoney(){
        ProxyState.totalAmount += .25
        console.log(ProxyState.totalAmount)
    }
}

export const snacksService = new SnacksService