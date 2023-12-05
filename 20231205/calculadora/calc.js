// let nombreH1 = document.getElementById("nombre_h1");
// let apellidoH2 = document.getElementById("apellido_h2");
// let obtenerTexto = document.getElementById("obtener-texto");

// obtenerTexto.addEventListener("click", function () {
//   let nombre_input = document.getElementById("nombre").value;
//   let apellido_input = document.getElementById("apellido").value;

//   apellidoH2.style.color = "red";
//   nombreH1.textContent = nombre_input;
//   apellidoH2.textContent = apellido_input;
// });

let botones = document.getElementsByTagName("button");
let display = document.getElementById("display");

for (let btn of botones) {
  btn.addEventListener("click", function (e) {
    escribir(btn.value);
  });
}

function escribir(value) {
  display.innerText += value;
}

function calcular() {}

function borrarDisplay() {
  display.innerText = "";
}
