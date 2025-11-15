const celular = {
    marcaCelular : 'ASUS',
    tamanhoTela : {
        vertical : 155,
        hotizontal : 75
    },
    capacidadeBateria: 5000,
    ligar : function() {
        console.log("Fazendo ligação...")
    }    
}

// Jacascript Aula 34 - Factory Functions (função de Fábrica)
// Encapsula a informação dentro de um método que irá criar o objeto

function criarCelular1(marcaCelular, tamanhoTela, capacidadeBateria) {
    const celular = {
        marcaCelular : marcaCelular,
        tamanhoTela : tamanhoTela,
        capacidadeBateria: capacidadeBateria,
        ligar : function() {
            console.log("Fazendo ligação...")
        } 
    }
    return celular;
}

function criarCelular2(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular : marcaCelular,
        tamanhoTela : tamanhoTela,
        capacidadeBateria: capacidadeBateria,
        ligar : function() {
            console.log("Fazendo ligação...")
        } 
    }
}

function criarCelular3(marcaCelular, tamanhoTela, capacidadeBateria) {
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

const celular1 = criarCelular3('Zenfone', 5.5, 5000);
console.log(celular1);

const semaforo = criarSemaforo('semáforo veicular convencional', 'vermelha', 30);
console.log(semaforo);
const mensagem = semaforo.tempoRestante;
console.log(mensagem);

