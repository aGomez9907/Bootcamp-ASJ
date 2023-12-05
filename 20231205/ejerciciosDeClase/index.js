// function fibo(n) {
//   var array = [];
//   if (n === 1) {
//     array = [0];
//   } else {
//     array = [0, 1];
//     for (let i = 3; i <= n; i++) {
//         array.push(array[i - 3] + array[i - 2]);
//     }
//   }
//   return array;
// }

//input nombre y apellido
//click--->boton----->se muestre con un H1 el nombre y con un H2 el apellido en color rojo
let nombreH1 = document.getElementById("nombre_h1");
let apellidoH2 = document.getElementById("apellido_h2");
let obtenerTexto = document.getElementById("obtener-texto");

obtenerTexto.addEventListener("click", function () {
  let nombre_input = document.getElementById("nombre").value;
  let apellido_input = document.getElementById("apellido").value;

  apellidoH2.style.color = "red";
  nombreH1.textContent = nombre_input;
  apellidoH2.textContent = apellido_input;
});
