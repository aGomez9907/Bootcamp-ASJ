// class ShopHeader extends HTMLElement{
//     connectedCallback(){
//         this.innerHTML = '         <header>     <h1 class="header-name">BOUTIQUE</h1>        <nav class="nav-menu">          <ul class="nav-menu-list">            <li><a href="" class="nav-menu-item">HOME</a></li>            <li><a href="" class="nav-menu-item">SHOP</a></li>            <li>              <a href="" class="nav-menu-item">DEMOS</a              ><select ></select>            </li>            <li>              <a href="" class="nav-menu-item">BLOCKS</a              ><select ></select>            </li>            <li><a href="" class="nav-menu-item">COMPONENTS</a></li>            <li><a href="" class="nav-menu-item">CONTACT US</a></li>            <li><a href="" class="nav-menu-item">MY CART</a></li>          </ul>        </nav>      </header>'
//     //     <header>
//     //     <h1 class="header-name">BOUTIQUE</h1>
//     //     <nav class="nav-menu">
//     //       <ul class="nav-menu-list">
//     //         <li><a href="" class="nav-menu-item">HOME</a></li>
//     //         <li><a href="" class="nav-menu-item">SHOP</a></li>
//     //         <li>
//     //           <a href="" class="nav-menu-item">DEMOS</a
//     //           ><select ></select>
//     //         </li>
//     //         <li>
//     //           <a href="" class="nav-menu-item">BLOCKS</a
//     //           ><select ></select>
//     //         </li>
//     //         <li><a href="" class="nav-menu-item">COMPONENTS</a></li>
//     //         <li><a href="" class="nav-menu-item">CONTACT US</a></li>
//     //         <li><a href="" class="nav-menu-item">MY CART</a></li>
//     //       </ul>
//     //     </nav>
//     //   </header>
//     }
// }

// customElements.define('shop-header', ShopHeader)

/*-------PRINCIPALES PROBLEMAS---------*/
//boton de agregar al carrito en la pagina individual de producto no anda
/*-------------------------------------- */

/* VARIABLES */

miLocalStorage = window.localStorage;
let totalGlobal = 0;

//no se si esta es la mejor solucion pero es lo que se me ocurrio para parametrizar la funcion agregarAlCarrito() desde el eventListener
const todosMisProductos = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 5000,
    img: "https://dummyimage.com/300x300/0c0cf0/fff",
    desc: "Descripcion del producto 1.",
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 2000,
    img: "https://dummyimage.com/300x300/000/fff",
    desc: "Descripcion del producto 2.",
  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 1000,
    img: "https://dummyimage.com/300x300/f22d21/fff",
    desc: "Descripcion del producto 3.",
  },
  {
    id: 4,
    nombre: "Producto 4",
    precio: 500,
    img: "https://dummyimage.com/300x300/01bbbb/fff",
    desc: "Descripcion del producto 4.",
  },
];

/* selectores */

let btnAgregarAlCarrito = document.getElementsByClassName("cart-btn");
let btnEliminar = document.getElementsByClassName("eliminar_carrito");
let btnVaciar = document.getElementsByClassName("vaciar-carrito");
let checkout = document.getElementsByClassName("checkout");

// let irAlProducto = document.getElementsByClassName("abrir-producto");

/* listeners */

// for (let btn of irAlProducto) {
//   btn.addEventListener("click", function (e) {
//   });
// }
for (let btn of checkout) {
  btn.addEventListener("click", function (e) {
    window.open(`MyPaymentBootstrap.html?total=${totalGlobal}`);
  });
}
for (let btn of btnVaciar) {
  btn.addEventListener("click", function (e) {
    vaciarCarrito();
  });
}

for (let btn of btnAgregarAlCarrito) {
  btn.addEventListener("click", function (e) {
    todosMisProductos.forEach((producto) => {
      if (producto.id == e.target.value) {
        agregarAlCarrito(
          producto.id,
          producto.nombre,
          producto.precio,
          producto.img
        );
      }
    });
  });
}

for (let btn of btnEliminar) {
  btn.addEventListener("click", function (e) {
    eliminarDelCarrito(e.target.value);
  });
}

/* funciones */

function abrirProducto() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  const contenedorDelProducto = document.getElementById("contenedor-producto");

  let elemento = document.createElement("div");
  elemento.classList.add("row");
  elemento.innerHTML = `
  <div class="col-lg-6">
    <img
      src="${todosMisProductos[productId - 1].img}"
      class="img-fluid"
      alt="${todosMisProductos[productId - 1].nombre}"
    />
  </div>
  <div class="col-lg-6">
    <h2>${todosMisProductos[productId - 1].nombre}</h2>
    <p class="lead">
    ${todosMisProductos[productId - 1].desc}
    </p>
    <p><strong>Precio:</strong> $${todosMisProductos[productId - 1].precio}</p>
    <button class="btn btn-primary cart-btn" value="${productId}">Agregar al carrito</button>
  </div>
`;

  contenedorDelProducto.append(elemento);
}

/* <div class="row">
        <div class="col-lg-6">
          <img
            src="https://via.placeholder.com/400"
            class="img-fluid"
            alt="Product Image"
          />
        </div>
        <div class="col-lg-6">
          <h2>Producto</h2>
          <p class="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p><strong>Precio:</strong> $19.99</p>
          <button class="btn btn-primary">Add to Cart</button>
        </div>
      </div> */

function agregarAlCarrito(
  idProducto,
  nombreProducto,
  precioProducto,
  imgProducto
) {
  let producto = {
    id: idProducto,
    nombre: nombreProducto,
    precio: precioProducto,
    img: imgProducto,
  };
  let cart = JSON.parse(miLocalStorage.getItem("cart")) || [];
  cart.push(producto);
  miLocalStorage.setItem("cart", JSON.stringify(cart));
}

// function agregarAlCarrito(idProducto) {
//   let cart = JSON.parse(miLocalStorage.getItem("cart")) || [];
//   cart.push(idProducto);
//   miLocalStorage.setItem("cart", JSON.stringify(cart));
// }

function eliminarDelCarrito(idProducto) {
  let cart = JSON.parse(miLocalStorage.getItem("cart")) || [];

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === idProducto) {
      cart.splice(i, 1);
      break;
    }
  }
  miLocalStorage.setItem("cart", JSON.stringify(cart));
}

// function eliminarDelCarrito(idProducto) {
//   let cart = JSON.parse(miLocalStorage.getItem("cart")) || [];
//   for (let i = 0; i < cart.length; i++) {
//     if (cart[i] === idProducto) {
//       cart.splice(i, 1);
//       break;
//     }
//   }
//   miLocalStorage.setItem("cart", JSON.stringify(cart));
// }

function cargarCarrito() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let contenedorDelCarrito = document.getElementById("contenedor-carrito");
  let setDeProductos = new Set();
  let contadorDeProductos = [];
  let totalAPagar = 0;

  if (contenedorDelCarrito) {
    contenedorDelCarrito.innerHTML = "";

    cart.forEach((producto) => {
      if (!setDeProductos.has(todosMisProductos[producto.id - 1])) {
        setDeProductos.add(todosMisProductos[producto.id - 1]);
        contadorDeProductos[producto.id] = 1;
      } else {
        contadorDeProductos[producto.id]++;
      }
    });
    console.log(setDeProductos);

    setDeProductos.forEach((producto) => {
      totalAPagar += Number(producto.precio) * contadorDeProductos[producto.id];
      let elemento = document.createElement("div");
      elemento.classList.add("card", "mb-2");
      elemento.innerHTML = ` <div class="card-body row">
      <div class="col-md-8">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">Precio: $${producto.precio.toFixed(2)}</p>
          <p class="card-text">Cantidad: ${contadorDeProductos[producto.id]}</p>
          <button class="btn btn-danger" onclick="eliminarDelCarrito(${
            producto.id
          }), cargarCarrito()">Eliminar</button>
          </div>
      <div class="col-md-4 align-self-center text-end "><img src="${
        producto.img
      }" alt="${
        producto.nombre
      }" class="img-thumbnail mb-2"style="max-width: 150px;"></div>
      
</div>`;

      contenedorDelCarrito.appendChild(elemento);
    });
    // console.log(contadorDeProductos);
  }
  let subTotalLocator = document.getElementById("subtotal");
  subTotalLocator.innerText = totalAPagar.toFixed(2);
  totalGlobal = totalAPagar.toFixed(2); // uso  esta variable para pasarle el total a la pagina de pago, hay que refactorizar
}

// function cargarCarrito() {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   let contenedorDelCarrito = document.getElementById("contenedor-carrito");

//   if (contenedorDelCarrito) {
//     contenedorDelCarrito.innerHTML = "";
//     let contadorDeProductos = [];

//     cart.forEach((id) => {
//       if (contadorDeProductos[id]) {
//         contadorDeProductos[id]++;
//       } else {
//         contadorDeProductos[id] = 1;
//       }

//       contadorDeProductos.forEach((id) => {
//         let elemento = document.createElement("div");
//         elemento.classList.add("card", "mb-2");
//         elemento.innerHTML = `
//                     <div class="card-body">
//                     <h5 class="card-title">${
//                       todosMisProductos[id].nombre
//                     }</h5>
//                     <p class="card-text">Precio: $${todosMisProductos[
//                       id
//                     ].precio.toFixed(2)}</p>
//                     <p class="card-text">Cantidad: </p>
//                     <button class="btn btn-danger eliminar_carrito" value="${id}">Eliminar</button>
//                   </div>
//                     `;

//         contenedorDelCarrito.appendChild(elemento);
//       });
//     });
//     console.log(contadorDeProductos);
//   }
// }

function vaciarCarrito() {
  miLocalStorage.removeItem("cart");
  cargarCarrito();
}
