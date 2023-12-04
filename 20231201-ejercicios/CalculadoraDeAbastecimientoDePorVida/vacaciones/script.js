let dias = prompt("Ingrese cantidad de dias");
let presumepuestoMax = prompt("Ingrese su presupuesto máximo");
let comida = "Papas fritas";
let comidasPorDia = parseInt(
  prompt("Ingrese cantidad de comidas que comerá por día")
);
let resultado = parseInt(presumepuestoMax) / (comidasPorDia * parseInt(dias));

alert(
  "Podes gastar " +
    resultado +
    " en cada comida para que te alcance la plata durante los " +
    dias +
    " dias de viaje."
);
