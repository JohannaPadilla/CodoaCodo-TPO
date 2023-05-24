// CARGAR BASE DE DATOS DE PRODUCTOS
const productos = [
      {
        id: 1,
        nombre: "Papelillos OCB",
        imagen: "papelillos.jpg",
        alt:"Papelillos para armar cigarrillos marca OCB",
        precio: 100,
        detalle: "Contiene 50 papelillos",
      },
      {
        id: 2,
        nombre: "Picador",
        imagen: "picador.jpg",
        alt:"Picadores de tabaco",
        precio: 150,
        detalle: "Material de plastico resistente con un centro imantado ",
      },
      {
        id: 3,
        nombre: "Armadores",
        imagen: "armador.png",
        alt:"Armador de cigarrillos",
        precio: 130,
        detalle: "Plastico con banda de goma.",
      },
      {
        id: 4,
        nombre: "Encendedores",
        imagen: "encendedor.webp",
        alt:"Encendedores customizados",
        precio: 80,
        detalle: "Colores varios.",
      },
      {
        id: 5,
        nombre: "Ceniceros",
        imagen: "cenicero.webp",
        alt:"Ceniceros de colores",
        precio: 250,
        detalle: "Diferentes colores y motivos a elección.",
      },
    ]

    function guardarProductosLS(productos) {
      localStorage.setItem("productos", JSON.stringify(productos));
    }
    
    function cargarProductosLS() {
      return JSON.parse(localStorage.getItem("productos")) || [];
    }
    
    guardarProductosLS(productos);

