let calculoFinal = definirSaldo(65, 10);
console.log("O Herói tem um saldo de " + saldo)
console.log("e seu ranking é: ")
definirRanking(calculoFinal)


function definirSaldo(vitorias, derrotas){
    saldo = vitorias - derrotas
    return saldo
}

function definirRanking(saldo){
    if(saldo < 10){
        console.log("Ranking de Ferro")
    }else if(saldo>11 && saldo<=20){
        console.log("Ranking de Cobre")
    }else if(saldo>21 && saldo<=50){
        console.log("Ranking de Prata")
    }else if(saldo>51 && saldo<=80){
        console.log("Ranking de Ouro")
    }else if(saldo>81 && saldo<=90){
        console.log("Ranking de Diamante")
    }else if(saldo>91 && saldo<=100){
        console.log("Ranking Lendário")
    }else{
        console.log("Ranking Imortal")
    }
}


