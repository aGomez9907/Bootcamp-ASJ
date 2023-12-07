miLocalStorage = window.localStorage;

let pagar = document.getElementById("pagar");

pagar.addEventListener("click", function (e) {
  vaciarCarrito();
  alert("El pago fue realizado con exito.");
  window.open("myShopBootstrap.html");
});

function cargarPrecio() {
  const urlParams = new URLSearchParams(window.location.search);
  const monto = urlParams.get("total");
  const total = document.getElementById("total-pago");
  total.value = monto;
}

function vaciarCarrito() {
  miLocalStorage.removeItem("cart");
}
