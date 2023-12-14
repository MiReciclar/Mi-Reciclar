// HTML Elements
const smiley = document.getElementById("user-menu-button");
const userMenu = document.getElementById("user-menu");
const hamburguerMenu = document.getElementById("mobile-menu");
const hamburguer = document.getElementById("hamburger");
const hamburgerBars = document.querySelectorAll("#hamburger .bar");

// Methods
let banderaHamburguer = false;
const handleModal = () => {
<<<<<<< HEAD
  banderaHamburguer = !banderaHamburguer;
  // userMenu.classList.toggle("opacity-100");
  // userMenu.classList.toggle("scale-100");
  // // userMenu.classList.toggle("opacity-0");
  // userMenu.classList.toggle("scale-95");

  if (banderaHamburguer) {
    userMenu.style.display = "block";
    userMenu.style.opacity = "1";
  }else{
    userMenu.style.display = "none";
    userMenu.style.opacity = "0";
  }
  
=======
  if (userMenu.classList.contains("hidden")) {
    userMenu.classList.remove("hidden");
  } else {
    userMenu.classList.add("hidden");
  }
>>>>>>> 0788f00f6c19e7a1437d40aa976ae192159cce0d
};
smiley.addEventListener("click", handleModal);

const handleHamburguer = () => {
  // hamburguerMenu.classList.toggle("hidden");
  // hamburguerMenu.classList.toggle("md:hidden");
  // hamburguerMenu.classList.toggle("custom-modal");
};
hamburguer.addEventListener("click", handleHamburguer);

// ! NAVBAR RENDER
const navigationItems = [
<<<<<<< HEAD
  { id: "inicio", label: "Inicio", nav: "../../index.html" },
=======
  {
    id: "inicio",
    label: "Inicio",
    nav: "../../index.html",
  },
>>>>>>> 0788f00f6c19e7a1437d40aa976ae192159cce0d
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
