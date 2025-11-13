// Exercício Média da Nota Escolar
// obter a média a partir de um array

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

function calcularMedia(arrayNotas) {
    let soma = 0;
    for (let nota of arrayNotas) {
        soma += nota;
    }
    return soma / (arrayNotas.length);
}

function determinarConceito(arrayNotas) {
    const media = calcularMedia(arrayNotas);

    if (media <= 59) return 'F';
    if (media <= 69) return 'D';
    if (media <= 79) return 'C';
    if (media <= 89) return 'B';
    return 'A';
}

const arrayNotas1 = [70, 75, 80];
// 75

const mediaDoAluno = calcularMedia(arrayNotas1);

console.log(mediaDoAluno, determinarConceito(arrayNotas1));