// Javascript Aula 57 Removendo ELementos

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numeros);
// Adiciona um novo elemento ao final do array e retorna o número de elementos do array
console.log(numeros.push(10), numeros);

// Adicona um novo alemento ao início do array e retorna o numero de elementos do array
console.log(numeros.unshift(0), numeros);

// Remove elementos de um array e adiciona novos elementos no seu lugar, retornando os elementos removidos
// Remove 1 elementos a partir da posição 2
numeros.splice(2, 1);
console.log(numeros);

// Remove elmento do final do array
let ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);

// Remove elemento do início do array
let primeiro = numeros.shift();
console.log(primeiro);
console.log(numeros);

//Remove elementos do meio de array
let meio = numeros.splice(2, 1);
console.log(meio);
console.log(numeros);


// meu array
const letras = ['a', 'b', 'c', 'y', 'h', 'o', 'l', 'v', 'j'];

console.log(letras);
// Adiciona um novo elemento ao final do array e retorna o número de elementos do array
console.log(letras.push('x'), letras);

// Adicona um novo alemento ao início do array e retorna o numero de elementos do array
console.log(letras.unshift('a'), letras);

// Remove elementos de um array e adiciona novos elementos no seu lugar, retornando os elementos removidos
// Remove 1 elementos a partir da posição 2
letras.splice(1, 1);
console.log(letras);

// Remove elmento do final do array
ultimo = letras.pop();
console.log(ultimo);
console.log(letras);

// Remove elemento do início do array
primeiro = letras.shift();
console.log(primeiro);
console.log(letras);

//Remove elementos do meio de array
meio = letras.splice(2, 1);
console.log(meio);
console.log(letras);
