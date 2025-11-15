// Javascript AUla 56 Arrow Functions

const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'}
];

console.log(marcas.find(function(marca) {
    return marca.nome === 'a';
}));

// Arrow Function
console.log(marcas.find((marca) => {
    return marca.nome === 'a';
}));

// Arrow Function
console.log(marcas.find((marca) => marca.nome === 'a'));


// Meu objeto

const lampadas = [
    {id: 1, potencia: 4},
    {id: 2, potencia: 7},
    {id: 3, potencia: 9},
    {id: 4, potencia: 10},
    {id: 5, potencia: 14},
];

console.log(lampadas.find(function(lampada) {
    return lampada.potencia === 10;
}));

// Arrow Function
console.log(lampadas.find((lampada) => {
    return lampada.potencia === 7;
}));

// Arrow Function
console.log(lampadas.find((lampada) => lampada.potencia === 14));
