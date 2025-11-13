// Comparações não booleanas

// Falsy:
// undefined
// null
// 0
// false
// ''
// NaN - not a number


// Truthy


let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);

corPersonalizada = '';
corPadrao = 'Azul';
corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);