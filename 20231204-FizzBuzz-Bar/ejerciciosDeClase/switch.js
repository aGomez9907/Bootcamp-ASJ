function parOImpar2() {
  let n = Number(prompt("Ingrese un numero"));
  switch (n % 2) {
    case 0:
      alert("el numero es par");
      break;
    default:
      alert(`${n} no es un numero`);
  }
}

function traductor() {
  let n = prompt("Ingrese una una palabra para traducir");
  switch (n.toLowerCase()) {
    case "casa":
      alert(`${n} = house`);
      break;
    case "perro":
      alert(`${n} = dog`);
      break;
    case "arbol":
      alert(`${n} = tree`);
      break;
    case "pelota":
      alert(`${n} = ball`);
      break;
    case "genio":
      alert(`${n} = genius`);
      break;
    default:
      alert(`${n} no es una palabra valida`);
  }
}

function pelicula() {
  let n = prompt("Ingrese una calificacion");
  switch (n.toLowerCase()) {
    case "muy mala":
    case "mala":
    case "mediocre":
      alert(`Calificaste la pelicula como ${n}, lo lamentamos mucho.`);
      break;
    case "buena":
    case "muy buena":
      alert(`Calificaste la pelicula como ${n}, nos alegra mucho.`);
      break;
    default:
      alert(`${n} no es una calificacion valida`);
  }
}

// ingrese un numero y que en base a dicho numero haga una sumatoria de todos los numeros hasta ese numero y mostrar el promedio

function sumatoria() {
  let n = Number(prompt("Ingrese un numero"));
  if (n === Number(n)) {
    let a = 0;
    let sum = 0;
    while (a <= n) {
      sum += a;
      a++;
    }
    alert(`el promedio de la suma de 0 hasta ${n} es igual a: ${sum / n} `);
  } else {
    alert(`El valor ingresado no es un numero`);
  }
}

// Contador De Positivos
// En este ejercicio deberás crear un programa que le pida al usuario que ingrese un número entero. El programa terminará cuando se ingrese un número negativo.
// Al terminar, mostrarle un mensaje con la cantidad de números positivos que ingresó.

function contadorDePositivos() {
  let count = 0;

  let n = Number(prompt("Ingrese un numero"));

  while (n > 0) {
    count++;
    n = Number(prompt("Ingrese un numero"));
  }
  alert(`Ingesaste ${count} numeros.`);
}

/* FizzBuzz

En este ejercicio deberás escribir un programa que imprima en la consola los números del 1 al 100, 
teniendo en cuenta estos criterios:

Si el número es múltiplo de 3, deberá imprimir "Fizz" en vez del número.
Si es múltiplo de 5, deberá imprimir "Buzz".
Si es múltiplo de 3 y de 5 (a la misma vez), deberá imprimir "FizzBuzz". */

/*
quiero simular un bar con una sola mesa para atender. Cuando venga un cliente quiero simular que el usuario seleccione productos de una carta (todos los que quiera)
poder pedir la cuenta
que pregunte si quiero dejar propina
y quiero poder pedirle al mozo que me cuente un chiste

usando if else while do while
*/
