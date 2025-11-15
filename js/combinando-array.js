// Javascript Aula 59 Combinando e Cortando Arrays
const primeiro = [{id:1}, 1, 2, 3,];
const segundo = [4, 5, 6];
primeiro[0].id = 10;

// combinar
const combinado = primeiro.concat(segundo);
console.log(combinado);

// dividir
const cortado = combinado.slice();
console.log(cortado);

// ------------------
// meu array
const primeiroLetras = [{nome: 'rufao'}, 'a', 'b', 'c', 'd'];
const segundoLetras = ['h', 'i', 'j', 'k', 'l'];
primeiroLetras[0].nome = 'jhonatan';

// combinar
const combinadoLetras = primeiroLetras.concat(segundoLetras);
console.log(combinadoLetras);

// dividir
const cortadoLetras = combinadoLetras.slice();
console.log(cortadoLetras);