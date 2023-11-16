document.addEventListener("DOMContentLoaded", () => {
    const board = document.querySelector(".board")
    const card_back = document.querySelector(".board .card:first-child .back")
    const card_front = document.querySelector(".board .card:first-child .front")
    const all_back = document.querySelectorAll(".back")
    const all_front = document.querySelectorAll(".front")
    console.log(all_front)


    for (let i = 0; i < all_back.length; i++) {
        all_back[i].addEventListener('click', () => {
            all_back[i].classList.toggle('active')
            all_back[i].classList.toggle('desactive')

            all_front[i].classList.toggle('desactive')
            all_front[i].classList.toggle('active')

        })

        all_front[i].addEventListener('click', () => {
            all_front[i].classList.toggle('active')
            all_front[i].classList.toggle('desactive')
           

            all_back[i].classList.toggle('desactive')
            all_back[i].classList.toggle('active')
        })


    }

})