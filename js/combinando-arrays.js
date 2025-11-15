// Javascript Aula 57 Combinando Arrays
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const combinado = numeros.join('.');
console.log(combinado);

const frase = "olá bem vindo ao curso";
const resultado = frase.split(' ');
console.log(resultado);

// slug -> URL com traços
console.log(resultado.join('-'));

// Exemplo join
const letras = [1, 2, 3, 4, 5, 6, 'a', 'b', 'c', 'd', 'e'];
console.log(letras);

const letrasJoin = letras.join('><');
console.log(`<${letrasJoin}>`);

const itens = "Item1: R$ 10,00|Item2 item3 item4"
// Exemplo split

// Pega algum url na internet e tentar replicá-lo utilizando o join