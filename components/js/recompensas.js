// ! PREMIOS RENDER
const filters = [
  {
    id: "categorias",
    title: "Categorías",
    nombre: "categorias",
    oppciones: [
      { valor: "todos", label: "Todos los productos" },
      { valor: "todos", label: "Todos los productos" },
      { valor: "todos", label: "Todos los productos" },
      { valor: "todos", label: "Todos los productos" },
    ],
  },
  {
    id: "precio",
    title: "Por precio",
    nombre: "precio",
    oppciones: ["Menor precio", "Menor precio"],
  },
];

const premios = [
  {
    id: 1,
    img: "../img/recompensas/cine.jpg",
    categoria: "entretenimiento",
    puntos: 300,
    titulo: "2 x 1 en Cines 3D!!",
    descripcion:
      "¡Celebrá momentos inolvidables con nuestro Voucher 2x1 para el cine! Este regalo te invita a disfrutar de una experiencia cinematográfica única junto a alguien especial en Hoyts Cinema.",
  },
  {
    id: 2,
    img: "../img/recompensas/kiosko.jpg",
    categoria: "compras",
    puntos: 1000,
    titulo: "Orden de compra $5000 en Kioskos y comercios adheridos",
    descripcion:
      "Este Voucher te brinda la libertad de descubrir productos y delicias en diversos establecimientos, proporcionándote una experiencia de compra diversa y emocionante.",
  },
  {
    id: 3,
    img: "../img/recompensas/spa.jpg",
    categoria: "belleza",
    puntos: 3800,
    titulo: "Día de Spa para dos personas",
    descripcion:
      "¿Estás pensando en agasajar a alguien? Sumergite en esta experiencia única en Orange Spa. Este premio te invita a disfrutar de un día completo de relajación y bienestar junto a alguien especial.",
  },
  {
    id: 4,
    img: "../img/recompensas/teatro.jpg",
    categoria: "entretenimiento",
    puntos: 2000,
    titulo: "Disfrutá del teatro en famiia",
    descripcion:
      "Voucher para 4 entradas en Teatro Picadilly! Este regalo te ofrece la oportunidad de sumergirte en el mundo del arte escénico y disfrutar de una noche llena de emociones en familia.",
  },
  {
    id: 5,
    img: "../img/recompensas/supermercado.jpg",
    categoria: "compras",
    puntos: 3000,
    titulo: "Orden de compra $15.000 en Hipermercados",
    descripcion:
      "Aprovechá esta oportunidad para llenar tu despensa, disfrutar de productos frescos y de calidad, ¡Hacé tu experiencia de compras aún más placentera! Comercios adheridos: Coto, Carrefour, Jumbo.",
  },
  {
    id: 6,
    img: "../img/recompensas/petshop.jpg",
    categoria: "compras",
    puntos: 4500,
    titulo:
      "Orden de compra $20.000 en alimentos para mascotas y artículos de Pet's Shop",
    descripcion:
      "¡Celebrá el amor por tus mascotas con nuestro Voucher de Compra para Artículos de Pet Shop en [Nombre del Pet Shop]! Este regalo te permite consentir a tus peludos amigos con productos de calidad y cuidado especial.",
  },
  {
    id: 7,
    img: "../img/recompensas/peeling.jpg",
    categoria: "belleza",
    puntos: 2000,
    titulo: "Limpieza Facial + Peeling con ác. glicólico",
    descripcion:
      "¡Hacé espacio para la renovación y el resplandor con nuestro Voucher para una Limpieza Facial y Peeling en Centro Bruma! Este premio te invita a experimentar el lujo de cuidado de la piel y a disfrutar de una sesión revitalizante.",
  },
  {
    id: 8,
    img: "../img/recompensas/estancia.jpg",
    categoria: "entretenimiento",
    puntos: 3500,
    titulo: "Día de campo en Familia",
    descripcion:
      "¡Celebrá la naturaleza y la alegría familiar con nuestro Voucher para un Día de Campo en la Estancia Rancho Colorado! Este regalo te invita a disfrutar de un día de diversión, relajación y delicias campestres en un entorno idílico.",
  },
  {
    id: 9,
    img: "../img/recompensas/smart.jpg",
    categoria: "tecnologia",
    puntos: 30000,
    titulo: "Smart TV 55'",
    descripcion:
      "¡Preparate para una experiencia de entretenimiento envolvente con nuestro Voucher para una Televisión de 55 Pulgadas en MusiMundo! Este regalo te brinda la oportunidad de disfrutar de imágenes vibrantes y sonido envolvente en la comodidad de tu hogar.",
  },
  {
    id: 10,
    img: "../img/recompensas/playstation.jpg",
    categoria: "tecnologia",
    puntos: 40000,
    titulo: "Play Station 5",
    descripcion:
      "Voucher exclusivo para adquirir una PlayStation 5 en Sony Store Argentina. Este emocionante premio te brinda la oportunidad de sumergirte en la próxima generación de entretenimiento interactivo.",
  },
];

const divPremios = document.getElementById("premios");

const renderPremios = (arrayDePremios) => {
  divPremios.innerHTML = arrayDePremios
    .map((premio) => {
      return `<div data-categoria=${premio.categoria} class="premios flex shadow-2xl w-[650px] h-[220px] rounded-lg border-green-600 border-2">
        <div
          class="w-48 flex-none bg-cover bg-center bg-no-repeat rounded-t text-center overflow-hidden"
          style="background-image: url(${premio.img})"
          title=""
        ></div>
        <div
          class="bg-white p-4 flex flex-col justify-between leading-normal"
        >
          <div class="mb-8">
            <p
              class="text-lg font-semibold text-green-800 flex items-center"
            >
              <svg
                class="fill-current text-green-800 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                />
              </svg>
             ${premio.puntos}
            </p>
            <div class="text-gray-900 font-bold text-xl mb-2">
             ${premio.titulo}
            </div>
            <p class="text-green-700 text-base">
             ${premio.descripcion}
            </p>
          </div>
        </div>
      </div>`;
    })
    .join("");
};

renderPremios(premios);

const selectFiltroCategorias = document.getElementById("filtrosCategorias");
const selectFiltroPrecio = document.getElementById("filtrosPrecio");

const filtrarYOrdenar = () => {
  const valorCategoria = selectFiltroCategorias.value;
  const valorPrecio = selectFiltroPrecio.value;

  let productosFiltrados = premios.filter(
    (premio) =>
      valorCategoria === "todos" || premio.categoria === valorCategoria
  );

  if (valorPrecio === "menor") {
    productosFiltrados.sort((a, b) => a.puntos - b.puntos);
  } else if (valorPrecio === "mayor") {
    productosFiltrados.sort((a, b) => b.puntos - a.puntos);
  }
  renderPremios(productosFiltrados);
};
selectFiltroPrecio.addEventListener("change", filtrarYOrdenar);
selectFiltroCategorias.addEventListener("change", filtrarYOrdenar);
