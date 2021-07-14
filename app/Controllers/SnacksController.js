import { ProxyState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js"

function _draw(){
document.getElementById('total-money').innerText = 'Total Money: $' + ProxyState.totalAmount.toFixed(2)
}

export default class snacksController{
    constructor(){
    }
    addMoney(){
        snacksService.addMoney()
        _draw()
    }
    buySnack(snackName){
        snacksService.buySnack(snackName)
    }
}