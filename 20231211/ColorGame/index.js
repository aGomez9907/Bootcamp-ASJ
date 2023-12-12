// const colors = [
//   "rgb(255, 0, 0)",
//   "rgb(0, 255, 0)",
//   "rgb(0, 0, 255)",
//   "rgb(255, 255, 0)",
//   "rgb(255, 0, 255)",
//   "rgb(0, 255, 255)",
// ];

let colorDisplay = document.getElementById("colorDisplay");
const mensaje = document.getElementById("message");
const cuadrados = document.querySelectorAll(`.square`);
const h1 = document.getElementById("h1");
const newColors = document.getElementById("reset");
const hard = document.getElementById("hard");
const easy = document.getElementById("easy");

let dificultad = 6;

hard.addEventListener("click", () => {
  dificultad = 6;
  cuadrados[3].style.display = "";
  cuadrados[4].style.display = "";
  cuadrados[5].style.display = "";

  reset(dificultad);
});

easy.addEventListener("click", () => {
  dificultad = 3;
  cuadrados[3].style.display = "none";
  cuadrados[4].style.display = "none";
  cuadrados[5].style.display = "none";

  reset(dificultad);
});

newColors.addEventListener("click", () => {
  reset(dificultad);
});

function darColores(colors) {
  for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = colors[i];
    let pickedColor = pickColor(colors);
    colorDisplay.textContent = pickedColor;

    cuadrados[i].addEventListener("click", function () {
      const clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        mensaje.textContent = "¡Correcto!";
        changeH1Color(clickedColor, colors);
      } else {
        cuadrados[i].style.backgroundColor = "#232323";
        mensaje.textContent = "¡Intetalo nuevamente!";
      }
    });
  }
}

function changeH1Color(clickedColor, colors) {
  for (let i = 0; i < colors.length; i++) {
    if (cuadrados[i].style.backgroundColor !== clickedColor) {
      cuadrados[i].style.backgroundColor = clickedColor;
    }
  }
  h1.style.backgroundColor = clickedColor;
}

function pickColor(colors) {
  let numeroRandom = Math.floor(Math.random() * colors.length);
  let colorRandom = colors[numeroRandom];
  return colorRandom;
}

function randomColor() {
  let redRandom = Math.floor(Math.random() * 255);
  let blueRandom = Math.floor(Math.random() * 255);
  let greenRandom = Math.floor(Math.random() * 255);
  let color = `rgb(${redRandom}, ${greenRandom}, ${blueRandom})`;
  return color;
}

function generateRandomColors(max) {
  let arrayDeColores = [];
  for (let i = 0; i < max; i++) {
    arrayDeColores.push(randomColor());
  }
  return arrayDeColores;
}

function reset(max) {
  darColores(generateRandomColors(max));
}

reset(dificultad);
