let edad = prompt("Ingrese su edad");
let edadMax = prompt("Ingrese su edad máxima");
let snackFav = prompt("Ingrese su snack favorito");
let snacksPorDia = parseInt(prompt("Ingrese cuantos snack comerás por día"));
let resultado = (parseInt(edadMax) - parseInt(edad)) * 365 * snacksPorDia;
let precio = parseInt(prompt("Ingrese el precio por snack")) * resultado;

alert("Cantidad de " + snackFav + ": " + resultado);
alert("Gastarás: " + precio);
