// Tipo primitivo
console.log('>PRIMITIVO')
const mensagem1 = '   minha primeira mensagem   ';
console.log(mensagem1);
console.log(typeof(mensagem1),mensagem1[2], mensagem1.length);
console.log(mensagem1.includes('primeira'));
console.log(mensagem1.includes('vermelho'));
console.log(mensagem1.startsWith('primeira'));
console.log(mensagem1.endsWith('mensagem'));
console.log(mensagem1.indexOf('primeira'));
console.log(mensagem1.replace('minha', 'sua'));
console.log(mensagem1.trim());
console.log(mensagem1.trim().split(' '));

// Tipo objeto
console.log('>OBJETO')
const mensagem2 = new String('bom dia');
console.log(mensagem2);
console.log(typeof(mensagem2), mensagem2[2], mensagem2.length);

