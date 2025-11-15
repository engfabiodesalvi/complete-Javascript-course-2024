// Javascript - Objeto Endereço

// Criar um objeto endereço que contenha
// Rua
// Cidade
// CEP
// exibirEndereço(endereco)

function exibirEndereco(endereco) {
    for (let chave in endereco)
        console.log(chave, endereco[chave]);
}

let endereco = {
    rua: 'José Bonifácio',
    numero: 2387,
    cidade: 'São José do Rio Preto',
    estado: 'São Paulo',
    cep: '17487-876'
};

exibirEndereco(endereco);
