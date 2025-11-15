// -------------
// Número aleatório
// Math.random()
console.log('--------------\nValor aleatório\nMath.random()');

// Valor entre 0 e 1
console.log(Math.random());

// Valor entre um min e max
const max = 100;
const min = -100;

console.log(Math.random()*(max - min + 1) + min);

let maxRandom = 0;
let minRandom = Number.MAX_VALUE;
console.log(`Antes:\nMínimo valor: ${minRandom}\nMáximo valor: ${maxRandom}`)

const repeticao = 1000;
let randomNumber = 0;
for (let i = 0; i < repeticao; i++ ) {
    randomNumber = Math.random()*(max - min + 1) + min;
    maxRandom = (randomNumber > maxRandom) ? randomNumber : maxRandom;
    minRandom = (randomNumber < minRandom) ? randomNumber : minRandom;
    //console.log(i, Math.random()*(max - min) + min);
}
     
console.log(`Depois de ${repeticao} iterações:\nMínimo valor: ${minRandom}\nMáximo valor: ${maxRandom}`)

// -------------
// Valor máximo em um array
// Math.max() 
console.log('--------------\nValor máximo\nMath.max()');
const valores = [2, 5, 8, -10];
console.log(Math.max(...valores));

// -------------
// Valor mínimo em um array
// Math.min()
console.log('--------------\nValor mínimo\nMath.min()');
console.log(Math.min(...valores));

// -------------
// Arredondar para baixo
// Math.floor()
console.log('--------------\nArredondar para baixo\nMath.floor()');
console.log(`Depois de ${repeticao} iterações:\nMínimo valor: ${Math.floor(minRandom)}\nMáximo valor: ${Math.floor(maxRandom)}`)

// -------------
// Arredondar para cima
// Math.ceil()
console.log('--------------\nArredondar para cima\nMath.ceil()');
console.log(`Depois de ${repeticao} iterações:\nMínimo valor: ${Math.ceil(minRandom)}\nMáximo valor: ${Math.ceil(maxRandom)}`)


// -------------
// Calcular a raiz quadrada
// Math.sqrt()
console.log('--------------\nCalcular a raiz quadrada\nMath.sqrt()');
const numero = 14577895;
console.log(`Raiz quadrada do número ${numero}: ${Math.sqrt(numero)}`);

