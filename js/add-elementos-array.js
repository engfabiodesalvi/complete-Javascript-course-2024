// Javascript Aula 53 Adicionando elementos

const numeros = [1, 2, 3];

// Inicio
numeros.unshift(0);
console.log(numeros);

// Meio
numeros.splice(1, 0, 'a');
console.log(numeros);

// Final
numeros.push(5);
console.log(numeros);


//-------
// Meu array
const alfabeto = ['b', 'c', 'e', 'g', 'o', 'p'];

// Inicio
alfabeto.unshift('a');
console.log(alfabeto);

// Meio
alfabeto.splice(3, 0, 'd');
console.log(alfabeto);

// Final
alfabeto.push('x');
console.log(alfabeto);