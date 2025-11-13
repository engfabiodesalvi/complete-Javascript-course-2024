// Criar uma função somar que retorna a sma de todos s múltiplos de 3 e 5

// Múltiplos dde 3
// 3, 6, 9
// Múltiplos de 5
// 5, 10

// Somando os múltiplos
//  armazenar os múltiplos de 3
//  armazenar os múltiplos de 5
//  somar os dis resultados

function somar(numero) {
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;

    for (i = 0; i <= numero; i++) {
        if (i % 3 === 0) {
            multiplosDe3 += i;
            console.log(`${i} é multiplo de 3: 3 x ${i / 3} = ${i}`);
        }
        if (i % 5 === 0) {
            multiplosDe5 += i;        
            console.log(`${i} é multiplo de 5: 5 x ${i / 5} = ${i}`)
        }
    }
    console.log(`Soma dos múltiplos: ${multiplosDe3 + multiplosDe5}`);
}

somar(100);