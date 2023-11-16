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
