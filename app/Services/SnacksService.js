import { ProxyState } from "../AppState.js";
import Snack from "../Models/Snack.js";

class SnacksService{
    addMoney(){
       ProxyState.totalAmount +=.25
    }
    buySnack(snackName){
        let foundSnack = ProxyState.snack.find(s => s.name == snackName)
        if (ProxyState.totalAmount >= foundSnack.price){
            ProxyState.totalAmount -= foundSnack.price
            ProxyState.totalAmount = ProxyState.totalAmount
        }
    }
}

export const snacksService = new SnacksService