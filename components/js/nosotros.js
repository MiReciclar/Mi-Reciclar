// HTML Elements
const smiley = document.getElementById("user-menu-button")
const userMenu = document.getElementById("user-menu")
const hamburguerMenu = document.getElementById("mobile-menu")
const hamburguer = document.getElementById("hamburger")
const hamburgerBars = document.querySelectorAll('#hamburger .bar')

console.log(hamburgerBars)
// Methods
const handleModal = () => {
    userMenu.classList.toggle('opacity-100');
    userMenu.classList.toggle('scale-100');
    userMenu.classList.toggle('opacity-0');
    userMenu.classList.toggle('scale-95')

}
smiley.addEventListener('click', handleModal)


const handleHamburguer = () => {
    hamburguerMenu.classList.toggle('hidden');
    hamburguerMenu.classList.toggle('md:hidden');
    hamburguerMenu.classList.toggle('custom-modal');
}
hamburguer.addEventListener('click', handleHamburguer)


//Animaciones de scroll en las imagenes
  ScrollReveal().reveal('.reveal-on-scroll', {
    duration: 1000,
    delay: 150,
    distance: '50px',
    easing: 'ease-in-out',
    origin: 'left',
    reset: true,
    viewFactor: 0.3, // Ajusta este valor para controlar cuánto tiene que hacer scroll el usuario antes de que la animación se active completamente
  });

  ScrollReveal().reveal('.reveal-on-scroll2', {
    duration: 1000,
    delay: 150,
    distance: '50px',
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: true,
    viewFactor: 0.5, // Ajusta este valor para controlar cuánto tiene que hacer scroll el usuario antes de que la animación se active completamente
  });

  
  ScrollReveal().reveal('.reveal-on-scroll-text', {
    duration: 1000,
    delay: 150,
    distance: '50px',
    easing: 'ease-in-out',
    origin: 'right',
    reset: true,
    viewFactor: 0.3, // Ajusta este valor para controlar cuánto tiene que hacer scroll el usuario antes de que la animación se active completamente
  });

// Inicializa Swiper después de que el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });