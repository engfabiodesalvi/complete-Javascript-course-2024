// Javascript Aula 55 encontrando elementos (tipos de referência)


const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'}
];

const marca = marcas.find(function(marca){
    return marca.nome === 'a';
});

console.log(marca);


// meu array
const lampadas = [
    {id: 1, potencia: 4},
    {id: 2, potencia: 7},
    {id: 3, potencia: 9},
    {id: 4, potencia: 10},
    {id: 5, potencia: 14},
];

const lampada = lampadas.find(function(lampada){
    return lampada.potencia === 7;
});

console.log(lampada);