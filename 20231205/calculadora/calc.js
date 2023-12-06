let numericos = document.getElementsByClassName("numerico");
let operadores = document.getElementsByClassName("operador");
let display = document.getElementById("display");
let borrar = document.getElementById("btn_borrar");
let igual = document.getElementById("btn_igual");

let inputActual = "";
let operador = "";
let resultado = 0;

//listeners
for (let btn of numericos) {
  btn.addEventListener("click", function (e) {
    agregarEnPantalla(e.target.value);
  });
}

for (let btn of operadores) {
  btn.addEventListener("click", function (e) {
    operadorActual(e.target.value);
    console.log(inputActual, operador, resultado);
  });
}

borrar.addEventListener("click", function () {
  borrarDisplay();
});

igual.addEventListener("click", function () {
  calcular();
});

//funciones
function actualizarDisplay() {
  display.value = inputActual;
}

function agregarEnPantalla(value) {
  inputActual += value;
  actualizarDisplay();
}

function operadorActual(op) {
  operador = op;
  resultado = Number(inputActual);
  inputActual = "";
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
        borrarDisplay();
        display.value = "Error";
        inputActual = "";
        resultado = 0;
        operador = "";
        return;
      }
      break;
  }

  inputActual = resultado.toString();
  operador = "";
  actualizarDisplay();
}

function borrarDisplay() {
  inputActual = "";
  operador = "";
  resultado = 0;

  actualizarDisplay();
}
