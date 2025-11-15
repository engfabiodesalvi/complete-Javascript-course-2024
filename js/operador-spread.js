// Javascript Aula 55 o operador spread (...)
const primeiro = [{id:1}, 1, 2, 3,];
const segundo = [4, 5, 6];

// combinar
const combinado = primeiro
    .concat('a')
    .concat(segundo)
    .concat('#');
console.log(combinado);

const combinadoSpread = [...primeiro, 'a', ...segundo, '#'];
console.log(combinado);

// dividir
const cortado = combinado.slice();
console.log(cortado);

const clonado = [...combinadoSpread];
console.log(clonado);

// imprimir 1, 2, 3, %, 4, 5, 6
const primeiraParte = [1, 2, 3];
const segundaParte = [4, 5, 6];

console.log([...primeiraParte, '%', ...segundaParte]);