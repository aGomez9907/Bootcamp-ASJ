var edad = prompt("Ingrese su edad");
var edadMax = prompt("Ingrese su edad máxima");
var snackFav = prompt("Ingrese su snack favorito");
var snacksPorDia = parseInt(prompt("Ingrese cuantos snack comerás por día"));
var resultado = (parseInt(edadMax) - parseInt(edad)) * 365 * snacksPorDia;
var precio = parseInt(prompt("Ingrese el precio por snack")) * resultado;

alert("Cantidad de " + snackFav + ": " + resultado);
alert("Gastarás: " + precio);
