let oracionH1 = document.getElementById("oracion_h1");
let oracion_input = document.getElementById("input_oracion");
let borrar = document.getElementById("btn_borrar");

// oracion_input.addEventListener("keyup", function (e) {
//   if (
//     e.key === "a" ||
//     e.key === "e" ||
//     e.key === "i" ||
//     e.key === "o" ||
//     e.key === "u"
//   ) {
//     oracionH1.innerText += "_";
//   } else if (e.key === "Backspace") {
//     oracionH1.innerText = oracionH1.innerText.slice(0, -1);
//   } else {
//     oracionH1.innerText += `${e.key}`;
//   }
// });

borrar.addEventListener("click", function () {
  oracion_input.value = "";
  oracionH1.innerText = "";
});

/*---------------USANDO REGEX---------------- */

oracion_input.addEventListener("keyup", function (e) {
  oracionH1.innerText = oracion_input.value.replace(
    /[aeiouAEIOUáéíóúÁÉÍÓÚ]/g,
    "_"
  );
});
