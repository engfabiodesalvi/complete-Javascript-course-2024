// Verifica a velocidade e determina se houve infração

// Velocidade máxima de até 70
// -> A cada 5km acima do limite você ganha 1 ponto
// Math.Floor()
// caso pontos maior que 12 -> "Carteira Suspensa"

function verificarVelocidade(velocidade) {
    if (velocidade <= 70) 
        console.log(velocidade, 'ok');
    else {
        const pontos = ((velocidade - 70) / 5);
        if (pontos >= 12) 
            console.log(velocidade, 'Carteira Suspensa!');
        else
            console.log(velocidade, 'Pontos', pontos);
    }
}

for (let velocidade = 60; velocidade <= 160; velocidade += 5) {
    verificarVelocidade(velocidade);
}

