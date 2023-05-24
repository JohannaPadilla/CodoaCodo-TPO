// Boton Galeria
function ocultarDiv(){
    document.getElementById('cat-galeria').style.display = 'none';
}
ocultarDiv()

function mostrarOcultarGal() {
  let div = document.getElementById("cat-galeria");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

function ocultarContDir(){
    document.getElementById('cont-direccion').style.display = 'none';
}
ocultarContDir()


function mostrarOcultarContDir() {
  let div = document.getElementById("cont-direccion");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}


// RENDERIZAR PRODUCTOS
function renderProductos() {
  const productos = cargarProductosLS();
  let salida = "";
  
  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i]
      salida += `<div class="contenedor-producto">
          <div class="tarjeta-producto">
              <img src="${"../img/" + producto.imagen}" alt="${producto.alt}"/>
              <div>
                  <p class="nombre-producto">${producto.nombre}</p>
                  <p><button class="dropdown-toggle boton-detalle" onclick="mostrarOcultarDetalle(${i})">Mas detalles</button>
                  <p id="detalle-${i}" style="display: none;">${producto.detalle}</p>
                  <p><button class="boton-producto" onclick="agregarAlCarrito(${producto.id});" title="Agregar Producto">Agregar (+)</button>
              </div>
          </div>
      </div>`;
  }

  document.getElementById("productos").innerHTML = salida;
}

renderProductos();
renderBotonCarrito();

// BOTON DE DETALLES
function mostrarOcultarDetalle(indice) {
let div = document.getElementById(`detalle-${indice}`);
if (div.style.display === "none") {
  div.style.display = "block";
} else {
  div.style.display = "none";
}
}