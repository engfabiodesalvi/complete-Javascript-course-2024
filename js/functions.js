// Verbo + Substantivo
let corSite = "azul";
function resetaCor1(cor) {
    corSite = cor;
}

function resetaCor2(cor, tonalidade) {
    corSite = cor + ' ' + tonalidade;
}

// Calcula a média
let media = 0.0;
function calculaMedia(valor1, valor2) {
    media = (valor1 + valor2) / 2.0;
}

console.log(corSite);
resetaCor1("vermelho");
console.log(corSite);
resetaCor2("verde", "claro");
console.log(corSite);

calculaMedia(10.6, 4.7);
console.log(media);

