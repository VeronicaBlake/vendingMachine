import { ProxyState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js"

function _draw(){
document.getElementById('total-money').innerText = ProxyState.totalAmount.toFixed(2)
}

export default class snacksController{
    constructor(){
        _draw()
    }
    addMoney(){
        snacksService.addMoney()
    }
}