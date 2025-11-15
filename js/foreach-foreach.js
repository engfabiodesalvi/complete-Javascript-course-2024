// Javascript AUa 56 Iterando um Array

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

// forEach
numeros.forEach(function(numero) {
    console.log(numero);
});

// forEach - ES6
numeros.forEach((numero) =>  {
    console.log(numero);
});

// forEach - ES6
numeros.forEach((numero, indice) => console.log(numero, indice));


// ------------------------
// meu array
const elementos = [{id: 1}, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

elementos.forEach((elemento, indice) => console.log(indice, elemento));