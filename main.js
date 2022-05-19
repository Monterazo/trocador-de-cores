//Seleciona o botão e o texto que indica o #hex da cor para que sejam manipulados depois
const COLOR_NAME =  document.querySelector("#description");
const CHANGE_BUTTON = document.querySelector('#changer');

//Array com as cores que serão utilizadas
const colorList = ["#F2F2F2", "#C7C7C7", "#292929"]

//Index (contador)
let i=0;

//Atualiza o contador
function refreshIndex(){
    i++;
    if(i==3) i=0;
}

//Atualiza a página de acordo com a queue de cores
function changePage() {
    document.body.style.backgroundColor = colorList[i];
    COLOR_NAME.innerHTML = `Background:  ` + colorList[i];

    refreshIndex();
}

//Espera o botão ser clicado
CHANGE_BUTTON.onclick = function () {
    changePage();
}