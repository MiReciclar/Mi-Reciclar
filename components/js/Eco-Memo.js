document.addEventListener("DOMContentLoaded", () => {
    const all_back = document.querySelectorAll(".back")
    const all_front = document.querySelectorAll(".front")

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