const tablero = document.querySelector(".tablero")
const card = document.createElement("div")

console.log(card)

const lista_ruta_imagenes = ["../img/img-perfil/lapiz.png"]

const crearCard = (src) =>{
    let card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML= `<img src=${src}>`


    tablero.appendChild(card)
}
crearCard(lista_ruta_imagenes[0])
