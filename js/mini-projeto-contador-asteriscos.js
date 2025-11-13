// Criar uma função que exibe a quantiade de *
// que aquela linha possui

function exibirAsteriscos1(linhas) {
    let padrao = '';
    for (let linha = 1; linha <= linhas; linha++) {
        padrao += '*';
        console.log(padrao);
    }
}

function exibirAsteriscos2(linhas) {
    for (let linha = 1; linha <= linhas; linha++) {
        let padrao = '';
        for (let i = 0; i < linha; i++) {
            padrao += '*';
        }
        console.log(padrao);
    }
}

exibirAsteriscos1(10);
exibirAsteriscos2(10);