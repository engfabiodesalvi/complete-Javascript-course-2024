// Escreve uma função que usa 2 números e retorna o maior entre eles

function max1(numero1, numero2) {
    if (numero1 > numero2)
        return numero1;    
    return numero2;    
}

function max2(numero1, numero2) {
    // Operador ternário
    return numero1 > numero2 ? numero1 : numero2;
}

let valorMaior1 = max1(10, 10);
console.log(valorMaior1);

let valorMaior2 = max2(100, 10);
console.log(valorMaior2);