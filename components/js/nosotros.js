//Animaciones de scroll en las imagenes
ScrollReveal().reveal(".reveal-on-scroll", {
  duration: 1000,
  delay: 150,
  distance: "50px",
  easing: "ease-in-out",
  origin: "left",
  reset: true,
  viewFactor: 0.3, // Ajusta este valor para controlar cuánto tiene que hacer scroll el usuario antes de que la animación se active completamente
});

ScrollReveal().reveal(".reveal-on-scroll2", {
  duration: 1000,
  delay: 150,
  distance: "50px",
  easing: "ease-in-out",
  origin: "bottom",
  reset: true,
  viewFactor: 0.5, // Ajusta este valor para controlar cuánto tiene que hacer scroll el usuario antes de que la animación se active completamente
});

ScrollReveal().reveal(".reveal-on-scroll-text", {
  duration: 1000,
  delay: 150,
  distance: "50px",
  easing: "ease-in-out",
  origin: "right",
  reset: true,
  viewFactor: 0.3, // Ajusta este valor para controlar cuánto tiene que hacer scroll el usuario antes de que la animación se active completamente
});

var swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ! NUESTROS VALORES RENDER
const valores = [
  {
    id: "equipo",
    descripcion:
      "Valoramos la sostenibilidad y la preservación del medio ambiente para transformar la visión de un mundo más verde en una realidad",
    img: "../img/valores/community.png",
  },
  {
    id: "ideas",
    descripcion:
      "Abrazamos la innovación como motor de cambio, proponemos soluciones creativas para minimizar nuestro impacto ambiental",
    img: "../img/valores/ideas.png",
  },
  {
    id: "mas",
    descripcion:
      "Promovemos el diálogo y la difusión como herramientas clave para inspirar acciones colectivas y salvar el medio ambiente",
    img: "../img/valores/dialogo.png",
  },
];

const renderValores = () => {
  const divValores = document.getElementById("div-valores");
  divValores.innerHTML = valores.map((valor) => {
    return `<div
    class="flex text-green-900 max-w-[300px] flex-col items-center justify-center border-2 border-green-200 p-8 rounded-md shadowAndBlur gap-6"
  >
    <img src=${valor.img} alt=${valor.id} class="w-20 h-20" />
    <p class="text-center">${valor.descripcion}
    </p>
  </div>`;
  });
};

renderValores();

// ! NUESTRO EQUIPO RENDER
const integrantes = [
  {
    id: "camila",
    img: "../img/integrantes/cami.jpeg",
    name: "Camila Ortubey",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quasi non corrupti dolores aspernatur sunt et! Temporibus, aperiam dolore! Necessitatibus",
    social: [
      {
        id: "git",
        icon: "../img/iconos/github.svg",
        link: "https://github.com/Cami-cao96",
      },
      { id: "gmail", icon: "../img/iconos/gmail.svg" },
      {
        id: "linkedin",
        icon: "../img/iconos/linkedin.svg",
        link: "https://www.linkedin.com/in/camila-ortubey/",
      },
    ],
  },
  {
    id: "giuli",
    img: "../img/integrantes/giuli.jpeg",
    name: "Giuliana Ambrosino",
    description:
      "Soy desarrolladora Web Full Stack con un gran interés en el desarrollo de entornos dinámicos y la seguridad informática.",
    social: [
      {
        id: "git",
        icon: "../img/iconos/github.svg",
        link: "https://github.com/GiulianaAmbrosino",
      },
      { id: "gmai", icon: "../img/iconos/gmail.svg" },
      {
        id: "linkedin",
        icon: "../img/iconos/linkedin.svg",
        link: "https://www.linkedin.com/in/ambrosino-giuliana/",
      },
    ],
  },
  {
    id: "mai",
    img: "../img/integrantes/mai.jpeg",
    name: "Mailen Alvarez",
    description:
      "Soy desarrolladora Web Full Stack, apasionada por el aprendizaje continuo, creativa y perseverante. <br>Disfruto juntarme con amigos, hacer música y nadar.",
    social: [
      {
        id: "git",
        icon: "../img/iconos/github.svg",
        link: "https://github.com/Mailen93",
      },
      { id: "gmai", icon: "../img/iconos/gmail.svg" },
      {
        id: "linkedin",
        icon: "../img/iconos/linkedin.svg",
        link: "https://www.linkedin.com/in/mlabarrere/",
      },
    ],
  },
  {
    id: "santi",
    img: "../img/integrantes/santi.jpeg",
    name: "Santiago Flores",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quasi non corrupti dolores aspernatur sunt et! Temporibus, aperiam dolore! Necessitatibus",
    social: [
      {
        id: "git",
        icon: "../img/iconos/github.svg",
        link: "https://github.com/AgustinCrow",
      },
      { id: "gmai", icon: "../img/iconos/gmail.svg" },
      {
        id: "linkedin",
        icon: "../img/iconos/linkedin.svg",
        link: "https://www.linkedin.com/in/santiago-agustin-flores/",
      },
    ],
  },
  {
    id: "ema",
    img: "../img/integrantes/ema.jpeg",
    name: "Emanuel Gaona",
    description:
      "Soy desarrollador Web Full Stack apasionado por resolver problemas y enfrentar desafíos. Me gusta jugar al fútbol con amigos como una forma de divertirme.",
    social: [
      {
        id: "git",
        icon: "../img/iconos/github.svg",
        link: "https://github.com/Gaona21",
      },
      { id: "gmai", icon: "../img/iconos/gmail.svg" },
      {
        id: "linkedin",
        icon: "../img/iconos/linkedin.svg",
        link: "https://www.linkedin.com/in/gaonacorreaemanuel/",
      },
    ],
  },
];

const renderIntegrantes = () => {
  const divIntegrantes = document.getElementById("div-integrantes");
  divIntegrantes.innerHTML = integrantes
    .map((integrante) => {
      return `<div class="flex flex-col justify-between items-center">
    <img
      src=${integrante.img}
      alt=${integrante.name}-foto
      class="w-40 h-40 rounded-full mb-4"
    />
    <h3 class="text-lg font-bold text-green-900">${integrante.name}</h3>
    <p class="text-green-800 text-center max-w-[250px]">
     ${integrante.description}
    </p>
    <div class="flex p-2 w-[150px] items-center justify-center">
      ${integrante.social
        .map(
          (icon) =>
            `<a href=${icon.link || ""} target=_blank ><img src=${
              icon.icon
            } alt=${icon.id} /></a>`
        )
        .join("")}
    </div>
  </div>
    `;
    })
    .join("");
};

renderIntegrantes();
