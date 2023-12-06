//selectores
let numericos = document.getElementsByClassName("numerico");
let operadores = document.getElementsByClassName("operador");
let displayPrincipal = document.getElementById("display");
let displaySecundario = document.getElementById("display_secundario");
let borrar = document.getElementById("btn_borrar");
let igual = document.getElementById("btn_igual");

//variables
let inputActual = "";
let operador = "";
let resultado = 0;

/*----------------LISTENERS------------------*/

//seria bueno encapsularlos en una funcion
for (let btn of numericos) {
  btn.addEventListener("click", function (e) {
    agregarDisplayPrincipal(e.target.value);
    agregarDisplaySecundario(e.target.value);
  });
}

for (let btn of operadores) {
  btn.addEventListener("click", function (e) {
    operadorActual(e.target.value);
    agregarDisplaySecundario(e.target.value);
    // console.log(inputActual, operador, resultado);
  });
}

borrar.addEventListener("click", function () {
  borrarDisplayPrincipal();
  borrarDisplaySecundario();
});

igual.addEventListener("click", function () {
  calcular();
  borrarDisplaySecundario();
  agregarDisplaySecundario(resultado);
});

/*--------------------------------------------------*/

// Necesito mostrar en el display secundario la operación completa

/*----------------DISPLPAY SECUNDARIO------------------*/
function agregarDisplaySecundario(value) {
  displaySecundario.value += value.toString();
}

function borrarDisplaySecundario() {
  displaySecundario.value = "";
}
/*--------------------------------------------------*/

/*----------------DISPLAY PRINCIPAL------------------*/
function agregarDisplayPrincipal(value) {
  inputActual += value;
  actualizarDisplayPrincipal();
}

function actualizarDisplayPrincipal() {
  displayPrincipal.value = inputActual;
}

function borrarDisplayPrincipal() {
  inputActual = "";
  operador = "";
  resultado = 0;
  actualizarDisplayPrincipal();
}
/*--------------------------------------------------*/

/*----------------OPERACIONES------------------*/

function operadorActual(op) {
  operador = op;
  resultado = Number(inputActual);
  inputActual = "";
  //PROBLEMA: si presiono dos operadores seguidos pierdo el valor del primer operando
}

function calcular() {
  switch (operador) {
    case "+":
      resultado += Number(inputActual);
      break;
    case "-":
      resultado -= Number(inputActual);
      break;
    case "*":
      resultado *= Number(inputActual);
      break;
    case "/":
      if (inputActual != 0) {
        resultado /= Number(inputActual);
      } else {
        borrarDisplayPrincipal();
        displayPrincipal.value = "Error";
        inputActual = "";
        resultado = 0;
        operador = "";
        return;
      }
      break;
  }
  inputActual = resultado.toString();
  operador = "";
  actualizarDisplayPrincipal();
}

/*--------------------------------------------------*/
