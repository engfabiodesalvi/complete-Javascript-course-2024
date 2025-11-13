// Criar um métod para ler propriedades de um objeto e
// exibir as propridades do tipo string que estão nesse objeto

function exibirPropriedades(obj) {
    for (prop in obj)        
        if (typeof obj[prop] === 'string')
            console.log(prop, obj[prop]);
}

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
}
exibirPropriedades(filme);