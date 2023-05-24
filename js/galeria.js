// CARGAR BASE DE DATOS DE TATUAJES REALIZADOS
const realizados = [
  {
    id: 1,
    imagen: "anubis.jpg",
    alt: "Tatuaje de Anubis en el brazo",
    detalle: "Puntillismo",
  },
  {
    id: 2,
    imagen: "mascara.jpg",
    alt: "Tatuaje de mascara japonesa en abdomen femenino",
    detalle: "Neo Tradicional",
  },
  {
    id: 3,
    imagen: "meduza.jpg",
    alt: "Tatuaje de meduza en el antebrazo",
    detalle: "Tradicional",
  },
  {
    id: 4,
    imagen: "tego.jpg",
    alt: "Tatuaje de la tapa de un CD del cantante Tego Calderon, en parte trasera de la pierna",
    detalle: "Realismo",
  },
  {
    id: 5,
    imagen: "colibri.jpg",
    alt: "Tatuaje de un colibri en el antebrazo",
    detalle: "Puntillismo",
  },
  {
    id: 6,
    imagen: "tribal.jpg",
    alt: "Tatuaje tribal en espalda baja femenina",
    detalle: "Tribal",
  },
  {
    id: 7,
    imagen: "sirena.jpg",
    alt: "Tatuaje de una sirena en el brazo",
    detalle: "Puntillismo",
  },
];

function guardarRealizadosLS(realizados) {
  localStorage.setItem("realizados", JSON.stringify(realizados));
}

function cargarRealizadosLS() {
  return JSON.parse(localStorage.getItem("realizados")) || [];
}

guardarRealizadosLS(realizados);

// RENDERIZAR DISEÑOS DISPONIBLES
function renderRealizados() {
    const tatuajesRealizados = cargarRealizadosLS();
    let salida = "";
  
    for (let i = 0; i < tatuajesRealizados.length; i++) {
      const tatuajeRealizado = tatuajesRealizados[i];
      salida += `<div>
          <div class="tarjeta-tatuajes-realizados">
              <img src="${"../img/" + tatuajeRealizado.imagen}" alt="${tatuajeRealizado.alt}"/>
          </div>
      </div>`;
    }
  
    document.getElementById("trabajos-real").innerHTML = salida;
  }
  
  renderRealizados();


// ------------------------------------------------------------------------------------------------------------------------
// CARGAR BASE DE DATOS DE DISEÑOS DISPONIBLE
const disponibles = [
  {
    id: 1,
    imagen: "varios.PNG",
    alt: "Diseños de varios tatuajes para elegir. Calavera, angel, ramillete de flores y hombre con capucha",
  },
  {
    id: 2,
    imagen: "rosa.PNG",
    alt: "Diseño de una rosa en neotradicional",
  },
  {
    id: 3,
    imagen: "pimpollo.PNG",
    alt: "Diseño de una rosa pimpollo",
  },
  {
    id: 4,
    imagen: "escorpion.PNG",
    alt: "Diseño de un escorpion",
  },
  {
    id: 5,
    imagen: "vela.PNG",
    alt: "Diseño de una mano sosteniendo una vela",
  },
  {
    id: 6,
    imagen: "flor.PNG",
    alt: "Diseño de una flor",
  },
  {
    id: 7,
    imagen: "hongo.PNG",
    alt: "Diseño de un hongo",
  },
];

function guardarDisponiblesLS(disponibles) {
  localStorage.setItem("disponibles", JSON.stringify(disponibles));
}

function cargarDisponiblesLS() {
  return JSON.parse(localStorage.getItem("disponibles")) || [];
}

guardarDisponiblesLS(disponibles);

// RENDERIZAR DISEÑOS DISPONIBLES
function renderDisponibles() {
  const diseñosDisponibles = cargarDisponiblesLS();
  let salida = "";

  for (let i = 0; i < diseñosDisponibles.length; i++) {
    const diseñoDisponible = diseñosDisponibles[i];
    salida += `<div>
        <div class="tarjeta-diseños-disponibles">
            <img src="${"../img/" + diseñoDisponible.imagen}" alt="${diseñoDisponible.alt}"/>
        </div>
    </div>`;
  }

  document.getElementById("diseños-disp").innerHTML = salida;
}

renderDisponibles();
