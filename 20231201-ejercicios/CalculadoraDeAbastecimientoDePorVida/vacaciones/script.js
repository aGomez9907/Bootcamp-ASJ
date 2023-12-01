var dias = prompt("Ingrese cantidad de dias");
var presumepuestoMax = prompt("Ingrese su presupuesto máximo");
var comida = prompt("Ingrese comida");
var comidasPorDia = parseInt(
  prompt("Ingrese cantidad de comidas que comerá por día")
);
var resultado = parseInt(presumepuestoMax) / (comidasPorDia * parseInt(dias));

alert(
  "Podes gastar " +
    resultado +
    " en cada comida para que te alcance la plata durante los " +
    dias +
    " dias de viaje."
);
