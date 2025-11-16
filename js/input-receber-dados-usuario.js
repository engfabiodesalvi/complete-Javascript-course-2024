let userCorFavorita;

while (!userCorFavorita) {   
    userCorFavorita = prompt("Qual a sua cor favoria?");    
    let browserCorFavorita1 = "vermelha";
    let browserCorFavorita2 = "vermelho";
    if (userCorFavorita) {
        if (userCorFavorita.toLowerCase() === browserCorFavorita1 || userCorFavorita.toLowerCase() === browserCorFavorita2) {
            alert(`A cor ${browserCorFavorita1} é a minha cor favorita também!`)
        }
    }
}


let userIdadePrompt;
let userIdade;

while (!userIdadePrompt || isNaN(userIdade)) {
    userIdadePrompt = prompt("Qual a sua idade?");
    if (userIdadePrompt) {
        userIdade = parseInt(userIdadePrompt, 10);
        if (isNaN(userIdade)) {            
            console.log('Valor inválido!');            
        } else {            
            if (userIdade < 18){
                alert(`Idade digitada: ${userIdade}.\nUsuário menor de idade!`);
                console.log(`Idade digitada: ${userIdade}.\nUsuário menor de idade!`);
            } else {
                alert(`Idade digitada: ${userIdade}.\nUsuário menor de idade!`);
                console.log(`Idade digitada: ${userIdade}.\nUsuário maior de idade!`);
            }                
        }
    }
}

