let contagem = 0;

const temporizador1 = document.getElementById('temporizador1');

const contador = function(){
    contagem += 1;
    temporizador1.innerText = contagem;
};

let repita1 = setInterval(contador,1000);

const continuarTemporizador1 = function(){
    if(repita1 === null){
        repita1 = setInterval(contador,1000);
    }
};

const pararTemporizador1 = function(elemento){
    clearInterval(repita1);
    repita1 = null;
};

let testeTimeout = setTimeout(() => {
    alert("Rodou depois de 3 segundos");
}, 3000);

const pararTesteTimeout = function(elemento){
    clearTimeout(testeTimeout);
    testeTimeout = null;
};