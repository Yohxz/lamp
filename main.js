const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');

function lampIsCrash () {
    return lamp.src.indexOf ('quebrada') > - 1
}

function lampCrash(){
  lamp.src = "img/quebrada.jpg";
  setTimeout(() => {
    alert("Parece que você quebrou a lâmpada... Recarregue a página");
  }, 500);
}
function lampOn () {
    if(!lampIsCrash ()){
        lamp.src = "img/ligada.jpg";
    }
}

function lampOff () {
    if(!lampIsCrash()){
        lamp.src = "img/desligada.jpg";
    }
}

function lampOnOff() {
    if(turnOnOff.textContent == '|'){
        lampOn();
        (turnOnOff.textContent = 'O');
    } else {
        lampOff();
        turnOnOff.textContent = '|';
    }
}


turnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampCrash);

