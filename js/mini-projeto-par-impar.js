// Receber uma quantidade de valores para avaliar
// A função exibe se cada valor é par ou impar

function exibirTipo(numero) {
    if (numero % 2 === 0) 
        console.log(numero, 'PAR');
    else
        console.log(numero, 'IMPAR');
}

for (let i = 0; i <= 10; i++) {
    exibirTipo(i);
}