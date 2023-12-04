/*
quiero simular un bar con una sola mesa para atender. Cuando venga un cliente quiero simular que el usuario seleccione productos de una carta (todos los que quiera)
poder pedir la cuenta
que pregunte si quiero dejar propina
y quiero poder pedirle al mozo que me cuente un chiste

usando if else while do while
*/
let total = 0;
let a = 1;
do {
  let opcion = Number(
    prompt(
      "Bienvenido al bar, elija una opcion: 1.Contar chiste | 2.Elegir menu. | 3.Pedir la cuenta"
    )
  );
  switch (opcion) {
    case 1:
      alert("-¿Te gusta la música progresiva? -Sí, cada vez más");
      break;
    case 2:
      let i = 1;
      while (i != 0) {
        let menu = Number(
          prompt(
            "Elija una opcion del menu: 1.Cafe | 2.Te. | 3.Medialuna | 0.Salir"
          )
        );
        switch (menu) {
          case 1:
            total += 500;
            break;
          case 2:
            total += 300;
            break;
          case 3:
            total += 200;
            break;
          case 0:
            i = 0;
            break;
        }
      }
      break;
    case 3:
      let prop = prompt(`Gastaste ${total}, desea agregar propina?`);
      switch (prop.toLowerCase()) {
        case "si":
          alert(`Pagarás $${total + total * 0.1}.`);
          break;

        case "no":
          alert(`Pagarás $${total}.`);
          break;
      }
      a = 0;
      break;

    default:
      alert(`No es una opción válida`);
      break;
  }
} while (a != 0);
