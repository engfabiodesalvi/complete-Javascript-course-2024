function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular, // chave e variável com o mesm nome
        tamanhoTela,
        capacidadeBateria,
        ligar() { // pode omitir function()
            console.log("Fazendo ligação...")
        } 
    }
}

function criarSemaforo(tipoSemaforo, luzAcesa, tempoEspera) {
    return {
        tipoSemaforo,
        luzAcesa,
        tempoEspera,
        tempoRestante() {
            console.log(`Faltam ${tempoEspera} segundos.`);
        }
    }
}

// -------------------------
// Clonando o objeto celular

const celular = criarCelular('Zenfone', 5.5, 5000);
console.log('celular', celular);

// Clonando objeto!
const novoObjeto = Object.assign({}, celular);
console.log('novoObjeto', novoObjeto);

// Adicionando propriedades
const novoObjeto2 = Object.assign({peso: 500}, celular);
console.log('novoObjeto2', novoObjeto2);

// Modificando uma proriedade
novoObjeto.capacidadeBateria = 6000;


// Utilizando o commando 'spread' -> (...) 
const novoObjeto3 = {...celular};
console.log('novoObjeto3', novoObjeto3);

// Comparando os objetos
console.log('celular', celular);
console.log('novoObjeto', novoObjeto);
console.log('novoObjeto2', novoObjeto2);
console.log('novoObjeto3', novoObjeto3);

// -------------------------
// Clonando o objeto semaforo

const semaforo = criarSemaforo('semáforo veicular convencional', 'vermelha', 30);
console.log('semaforo', semaforo);

// Clonando objeto!
const novoSemaforo1 = Object.assign({}, semaforo);
console.log('novoSemaforo1', novoSemaforo1);

// Adicionando propriedades
const novoSemaforo2 = Object.assign({numeroSinaleiros: 3}, semaforo);
console.log('novoSemaforo2', novoSemaforo2);

// Utilizando o commando 'spread' -> (...) 
const novoSemaforo3 = {...semaforo};
console.log('novoSemaforo3', novoSemaforo3);

// Comparando os objetos
console.log('semaforo', celular);
console.log('novoSemaforo1', novoSemaforo1);
console.log('novoSemaforo2', novoSemaforo2);
console.log('novoSemaforo3', novoSemaforo3);
