// Repetir uma ação várias vezes

// 1. For

for (let i = 0; i < 5; i++) {
    console.log('Estou aprendendo!');
}

for (let i = 1; i <= 5; i++) {
    console.log('Estou aprendendo!');
}

// Números ímpares
for (let i = 0; i < 5; i++) {
    if (i % 2 !== 0) { // Operador modulus
        console.log(i);
    }    
}

// Números ímpares decrescente
for (let i = 5; i >= 1; i--) {
    if (i % 2 !== 0) { // Operador modulus
        console.log(i);
    }    
}