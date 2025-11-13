// Criar uma função para mostrar os numeros primos

// Primos
// Compostos

function numeroPrimo(numero) {

    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true
}

function exibirNumerosPrimos(primeiroNumero, ultimoNumero) {
    if (primeiroNumero <= ultimoNumero && primeiroNumero >= 2) {
        for (let numero = primeiroNumero; numero <= ultimoNumero; numero++) {
            if (numeroPrimo(numero)) console.log(numero);
        }
    }
}

exibirNumerosPrimos(2, 100);