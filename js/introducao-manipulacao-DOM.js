const nameInput =  document.getElementById('name');
const descriptionInput =  document.getElementById('description');

// Use the defer attribute in the script tag.
nameInput.value = "Jhonatan";
descriptionInput.innerText = "Esta descrição foi inserida através do javascript!!";

// Use this event listener to update the variables after the page initialization.
document.addEventListener('DOMContentLoaded', function() {
    nameInput.value = "Jhonatan (addEventListener)";
    descriptionInput.innerHTML = "Esta descrição foi inserida através da função addEventListener do javascript!\n\nAltere este texto antes de clicar no botão 'enviar' utilizando o console do desenvolvedor.\n\n\n\nClique no botão enviar através do prompt do desenvolvedor utilizando a seguinte linha de código em javascript:\n\ndocument.getElementById('submit').click()";
})

// One update takes priority over the other!
// addEventLister realiza a última atualização dos campos da página!!
// Ele não necessita do atributo defer na tag scrip!!
