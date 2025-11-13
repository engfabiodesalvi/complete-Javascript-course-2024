// Compara alguns valores de entrada e retorna um valor.

// Tipos de valores passados como argumento da funçã e os devidos retornos provenientes da função após análise:
// Divisível por 3 => Fizz
// Divisível por 5 => Buzz
// Divisível por 3 e 5 => FizzBuzz
// Não divisível por 3 ou 5 => retorna o valr da entrada
// Não é um número => Retorna a mensagem 'Não é um número'

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';    
    if (entrada % 3 === 0) 
        return 'Fizz';
    if (entrada % 5 === 0) 
        return 'Buzz';

    return entrada;
        
}

let valor = true;
let resultado = fizzBuzz(valor);

console.log(valor, resultado);

valor = 6;
resultado = fizzBuzz(valor);
console.log(valor, resultado);

valor = 15;
resultado = fizzBuzz(valor);
console.log(valor, resultado);

valor = 20;
resultado = fizzBuzz(valor);
console.log(valor, resultado);

