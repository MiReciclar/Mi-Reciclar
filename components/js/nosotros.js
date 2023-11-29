// HTML Elements
const smiley = document.getElementById("user-menu-button");
const userMenu = document.getElementById("user-menu");
const hamburguerMenu = document.getElementById("mobile-menu");
const hamburguer = document.getElementById("hamburger");
const hamburgerBars = document.querySelectorAll("#hamburger .bar");

console.log(hamburgerBars);
// Methods
const handleModal = () => {
  userMenu.classList.toggle("opacity-100");
  userMenu.classList.toggle("scale-100");
  userMenu.classList.toggle("opacity-0");
  userMenu.classList.toggle("scale-95");
};
smiley.addEventListener("click", handleModal);

const handleHamburguer = () => {
  hamburguerMenu.classList.toggle("hidden");
  hamburguerMenu.classList.toggle("md:hidden");
  hamburguerMenu.classList.toggle("custom-modal");
};
hamburguer.addEventListener("click", handleHamburguer);

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

// Inicializa Swiper después de que el DOM esté listo
// document.addEventListener('DOMContentLoaded', function () {
//     var swiper = new Swiper('.swiper-container', {
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//     });
//   });

var swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ! NAVBAR DINAMICA
const navigationItems = [
  { id: "nuestraMision", label: "Nuestra Misión", nav: "/nuestraMision" },
  { id: "rencompensa", label: "Rencompensas", nav: "rencompensa" },
  { id: "jornadas", label: "Jornadas", nav: "jornadas" },
  { id: "ecoNoticias", label: "Eco noticias", nav: "ecoNoticias" },
  { id: "contacto", label: "Contacto", nav: "contacto" },
];

const renderNavigationItems = () => {
  const navContainer = document.getElementById("navContainer");
  navContainer.innerHTML = navigationItems
    .map((item) => {
      return `<a
    href=${item.nav}
    class="text-white hover:bg-green-800 rounded-md px-3 py-2 lg:text-lg font-medium text-sm"
    >${item.label}</a
  >`;
    })
    .join("");
};

renderNavigationItems();

const renderNavigationItemsMobile = () => {
  const navContainerMobile = document.getElementById("mobile-menu");
  console.log(navContainerMobile);
  navContainerMobile.innerHTML = navigationItems
    .map((item) => {
      console.log(item);
      return `<a
    href=${item.nav}
    class="text-white hover:bg-green-800 rounded-md px-3 py-2 lg:text-lg font-medium text-sm"
    >${item.label}</a
  >`;
    })
    .join("");
};

renderNavigationItemsMobile();

export const integrantes = [
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quasi non corrupti dolores aspernatur sunt et! Temporibus, aperiam dolore! Necessitatibus",
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quasi non corrupti dolores aspernatur sunt et! Temporibus, aperiam dolore! Necessitatibus",
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

export const renderIntegrantes = () => {
  const divIntegrantes = document.getElementById("div-integrantes");
  divIntegrantes.innerHTML = integrantes
    .map((item) => {
      return `<div class="flex flex-col items-center">
    <img
      src=${item.img}
      alt=${item.name}-foto
      class="w-40 h-40 rounded-full mb-4"
    />
    <h3 class="text-lg font-bold text-green-900">${item.name}</h3>
    <p class="text-gray-700 text-center">
     ${item.description}
    </p>
    <div class="flex p-2 w-[150px] items-center justify-center">
      ${item.social
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
