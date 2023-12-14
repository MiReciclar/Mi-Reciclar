// HTML Elements
const smiley = document.getElementById("user-menu-button");
const userMenu = document.getElementById("user-menu");
const hamburguerMenu = document.getElementById("mobile-menu");
const hamburguer = document.getElementById("hamburger");
const hamburgerBars = document.querySelectorAll("#hamburger .bar");

// Methods
const handleModal = () => {
  if (userMenu.classList.contains("hidden")) {
    userMenu.classList.remove("hidden");
  } else {
    userMenu.classList.add("hidden");
  }
};
smiley.addEventListener("click", handleModal);

const handleHamburguer = () => {
  hamburguerMenu.classList.toggle("hidden");
  hamburguerMenu.classList.toggle("md:hidden");
  hamburguerMenu.classList.toggle("custom-modal");
};
hamburguer.addEventListener("click", handleHamburguer);

// ! NAVBAR RENDER
const navigationItems = [
  {
    id: "inicio",
    label: "Inicio",
    nav: "../../index.html",
  },
  {
    id: "nuestraMision",
    label: "Nuestra Misión",
    nav: "../htmls/nosotros.html",
  },
  { id: "recompensa", label: "Recompensas", nav: "../htmls/Recompensas.html" },
  { id: "jornadas", label: "Jornadas", nav: "../htmls/voluntariados.html" },
  {
    id: "ecoNoticias",
    label: "Eco noticias",
    nav: "../htmls/Eco-Noticias.html",
  },
  { id: "contacto", label: "Contacto", nav: "../htmls/contacto.html" },
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
  navContainerMobile.innerHTML = navigationItems
    .map((item) => {
      return `<a
    href=${item.nav}
    class="text-white hover:bg-green-800 rounded-md px-3 py-2 lg:text-lg font-medium text-sm"
    >${item.label}</a
  >`;
    })
    .join("");
};

renderNavigationItemsMobile();
