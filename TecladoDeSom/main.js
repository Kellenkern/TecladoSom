function tocaSom(selectorAudio){
    const element = document.querySelector(selectorAudio);
    if (element && element.localName === "audio") {
        element.play();
    } else {
        console.log("Elemento não encontrato ou seletor inválido")
    } 
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for ( let cont = 0; cont<listaDeTeclas.length; cont++){
    const tecla = listaDeTeclas[cont];
    const inst =tecla.classList[1];
    const idAudio = `#som_${inst}`;

    tecla.onclick = function (){
        tocaSom(idAudio)
    }
    
    tecla.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter'){
            tecla.classList .add('ativa');
        }
    }
    
    tecla.onkeyup = function () {
        listaDeTeclas[cont].classList.remove('ativa');
    }
}

