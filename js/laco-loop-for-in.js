// 4. For..in
// Itera sobre as propriedades enumeráveis de um objeto.

const pessoa = {
    nome: 'Jhonatan',
    idade: 25
};


for (let chave in pessoa) {
    // quando sabemos a chave que iremos acessar
    console.log(chave, pessoa.nome);
    // quando não sabemos a chave que iremos acessar
    console.log(chave, pessoa['nome']);
}

const cores = ['Vermelho', 'Azul', 'Verde'];

for (let indice in cores) {
    console.log(indice, cores[indice]);
}