
const COLOR_NAME =  document.querySelector("#description");
const CHANGE_BUTTON = document.querySelector('#changer');

const colorList = ["#F2F2F2", "#C7C7C7", "#292929"]

//Index (contador)
let i=0;

function changePage() {
    document.body.style.backgroundColor = colorList[i];
    COLOR_NAME.innerHTML = `Background:  ` + colorList[i];
    //Atualiza contador
    i++;
    if(i==3) i=0;
}

CHANGE_BUTTON.onclick = function () {
    changePage();
}