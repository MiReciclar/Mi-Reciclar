// HTML Elements
const smiley = document.getElementById("user-menu-button")
const userMenu = document.getElementById("user-menu")

// Methods
const handleModal = () => {
    userMenu.classList.toggle('hidden')
}

smiley.addEventListener('click', handleModal)
