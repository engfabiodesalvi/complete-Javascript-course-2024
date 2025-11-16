function verificarEntrada() {
    const convidadosCristian = ['Amanda', 'Sabrina', 'Rafael', 'Jonas', 'Carol', 'Jhonatan'];
    const guestHostList = {
        Cristian: ['Amanda', 'Sabrina', 'Rafael', 'Jonas', 'Carol', 'Jhonatan'],
        Daniela: ['José', 'Maria', 'Angela', 'Ricardo', 'Pedro', 'Roangela']
    };
    const hostNames = Object.keys(guestHostList);
    //mensagemSearch.setAttribute('style', 'display: none;');
    //mensagemSearch.style.setProperty('display', 'none', 'important');
    // if (sessionStorage.getItem('searchDisplay') === 'none') {
    //     sessionStorage.setItem('searchDisplay','block');
    // } else {
    //     sessionStorage.setItem('searchDisplay','none');
    //     if (sessionStorage.getItem('guestAllowed') === 'true') {
    //         sessionStorage.setItem('guestAllowed', 'false');
    //     } else {
    //         sessionStorage.setItem('guestAllowed', 'true');
    //     }
    // }
    sessionStorage.setItem('searchDisplay','none');
    sessionStorage.setItem('nameGuest', nomeConvidado.value);
    sessionStorage.setItem('nameHost', nomeAnfitriao.value);
    //sessionStorage.setItem('nameGuest', hostNames.includes('Daniela'));

    if (hostNames.includes(nomeAnfitriao.value) && 
        guestHostList[nomeAnfitriao.value].includes(nomeConvidado.value)) {
        sessionStorage.setItem('guestAllowed', 'true');
    } else {
        sessionStorage.setItem('guestAllowed', 'false');
    }
    //alert(mensagemSearch.getAttribute('style','display'));    
}

async function limparEntrada() {
    sessionStorage.setItem('searchDisplay','block'); 

    mensagemSearch.setAttribute('style', `display: ${sessionStorage.getItem('searchDisplay')};`);   

    mensagemDeny.setAttribute('style', 'display: none;');
    mensagemAllow.setAttribute('style', 'display: none;');  

    buttonSearch.setAttribute('style', 'display: block;');
    buttonClear.setAttribute('style', 'display: none;');

    buttonSearch.disabled = false;
    buttonClear.disabled = true;
}

// inputs
const nomeConvidado = document.getElementById('guest');
const nomeAnfitriao = document.getElementById('host');
// divs 
const mensagemSearch = document.getElementById('search');
const mensagemDeny = document.getElementById('deny');
const mensagemAllow = document.getElementById('allow');
// buttons
const buttonSearch = document.getElementById('checkGuestList');
const buttonClear = document.getElementById('clearList');

if (sessionStorage.getItem('searchDisplay') != null) {
    mensagemSearch.setAttribute('style', `display: ${sessionStorage.getItem('searchDisplay')};`);
    if (sessionStorage.getItem('searchDisplay') === 'none') {        
        nomeConvidado.value = sessionStorage.getItem('nameGuest');
        nomeAnfitriao.value = sessionStorage.getItem('nameHost');
        buttonSearch.setAttribute('style', 'display: none;');
        buttonClear.setAttribute('style', 'display: block;');
        buttonSearch.disabled = true;
        buttonClear.disabled = false;
        if (sessionStorage.getItem('guestAllowed') === 'true') {
            mensagemDeny.setAttribute('style', 'display: none;');
            mensagemAllow.setAttribute('style', 'display: block;');
        } else {
            mensagemDeny.setAttribute('style', 'display: block;');
            mensagemAllow.setAttribute('style', 'display: none;');
        }
    } else {
        buttonSearch.setAttribute('style', 'display: block;');
        buttonClear.setAttribute('style', 'display: none;');
        buttonSearch.disabled = false;
        buttonClear.disabled = true;
    }
}