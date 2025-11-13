// Operadores lógicos

// Operadr Lógico 'e' (&&)
// Retorna TRUE se os dois operandos forem true

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log(podeAplicar);

// Operadr lógico 'ou' (||)
// Retorna TRUE se um dos dois operands forem true

maiorDeIdade = false;
possuiCarteiraDeTrabalho = true;
podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
console.log(podeAplicar);

// Operador NOT (!)

let candidatoRecusado = !podeAplicar;

console.log('Candidato Recusado:', candidatoRecusado);