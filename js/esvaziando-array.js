// Javascript Aula 58 Esvaziando um Array

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let outros = numeros;

// Solução 1 - não apaga todas as referências
numeros = [];
console.log(numeros, outros);

// Solução 2 - apaga todas as referências
numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
outros = numeros;
numeros.length = 0;
console.log(numeros, outros);

// Solução 3 - apaga todas as referências
numeros =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
outros = numeros;
numeros.splice(0, numeros.length);
console.log(numeros, outros);

// Solução 4 - apaga todas as referências
numeros =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
outros = numeros;
while (numeros.length > 0)
    numeros.pop();
console.log(numeros, outros);

// ------------
// Meu array
let elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
let outrosElementos = elementos;

// Solução 1 - não apaga todas as referências
elementos = [];
console.log(elementos, outrosElementos);

// Solução 2 - apaga todas as referências
elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
outrosElementos = elementos;
elementos.length = 0;
console.log(elementos, outrosElementos);

// Solução 3 - apaga todas as referências
elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
outrosElementos = elementos;
elementos.splice(0, elementos.length);
console.log(elementos, outrosElementos);

// Solução 4 - apaga todas as referências
elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
outrosElementos = elementos;
while (elementos.length > 0)
    elementos.pop();
console.log(elementos, outrosElementos);