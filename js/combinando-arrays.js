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

// Exemplo split
const itens = "Item1: R$  10,00|Item2: R$   1,00|Item3: R$  23,85|Item4: R$ 205,00"
const itensSplit = itens.split('|');
console.log(itensSplit);

// Pega algum url na internet e tentar replicá-lo utilizando o join

// Example 1
// Simple Path Appending
const baseURL1 = "https://api.example.com";
const pathSegment1 = "users";
const arrayResultingURL11 = [baseURL1, pathSegment1];
const arrayResultingURL12 = new Array(baseURL1, pathSegment1);
const resultingURL11 = arrayResultingURL11.join('/');
const resultingURL12 = arrayResultingURL12.join('/');
console.log(resultingURL11);
console.log(resultingURL12);

// Example 2
// Appending Multiple Path Segments
const baseURL2 = resultingURL11;
const pathSegment21 = ["users", "profile", "123"];
const pathSegment22 = new Array("users", "profile", "123");
const arrayResultingURL21 = [baseURL2, ...pathSegment21];
console.log(arrayResultingURL21);
const resultingURL21 = arrayResultingURL21.join('/');
console.log(resultingURL21);

// Example 3
// Combining with query parameters
const queryParams = { id: "abc", token: "xyz" };
const paramStrings = Object.entries(queryParams).map(([key, value]) => `${key}=${value}`);
console.log(paramStrings);
const urlWithQuery = new Array(resultingURL11, paramStrings.join('&')).join('?');
console.log(urlWithQuery);