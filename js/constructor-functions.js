// Função de fábrica - Factory functions

// camelCase -> ex: umDoisTresQuatro
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


// Função de construtor - Factory constructor

// Pascal Case - UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelualar = marcaCelular;
    this.tamanhoTela = tamanhoTela;
    this.capacidadeBateria = capacidadeBateria;
    this.ligar = function() {
        console.log("Fazendo Ligação...");
    };
}

function Semaforo(tipoSemaforo, luzAcesa, tempoEspera) {
    this.tipoSemaforo = tipoSemaforo;
    this.luzAcesa = luzAcesa;
    this.capacidadeBateria = this.capacidadeBateria;
    this.tempoRestante = function() {
        console.log(`Faltam ${tempoEspera} segundos.`);
    };
}

const celular = new Celular('asus', 5.5, 5000);
console.log(celular);

const semaforo = new Semaforo('semáforo veicular convencional', 'vermelha', 30);
console.log(semaforo);
const mensagem = semaforo.tempoRestante;
console.log(mensagem);
