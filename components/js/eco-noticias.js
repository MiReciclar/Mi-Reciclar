const containerCards = document.querySelector("#container-news")
const news = [
    {
        title: "“Recrear el buen vestir”, encuentro sobre moda sustentable en el Museo del Traje",
        resume: "Una propuesta destinada a quienes les interesa el vestir sustentable con una mirada ambientalista e inclusiva, con actividades en torno a la cultura del buen vestir, incorporando hábitos responsables y colaborando por un futuro en armonía, sustentable e inclusivo.",
        img: "../img/eco-noticias/news1.jpg",
        id: ""
    },
    {
        title: "Avanza la intervención artística en el Obelisco para concientizar sobre el Día Mundial del Reciclaje",
        resume: "Miles de bolsas plásticas de un solo uso crean un mosaico multicolor, en un mensaje sobre la importancia de las “tres R”: reducir, reutilizar y reciclar. ",
        img: "../img/eco-noticias/news2.jpg",
        id: ""
    },
    {
        title: "Buenos Aires recicla más de 4.000 toneladas de residuos por día",
        resume: "La cifra se corresponde con el número de vecinos y vecinas que actualmente separan materiales en sus hogares, que ya involucra al 53% de la población.",
        img: "../img/eco-noticias/news3.jpg",
        id: ""
    },
    {
        title: "Desechos plásticos: son un problema ambiental apremiante",
        resume: "Los autores defienden la necesidad de políticas públicas que incentiven la escala industrial del reciclado de un material que no pertenece al ambiente. ",
        img: "../img/eco-noticias/news4.jpg",
        id: ""
    }
];

[...news, ...news].forEach(element => {
    containerCards.innerHTML = containerCards.innerHTML + 
    `<div class="card-news">
        <div class="card-img">
            <img src="${element.img}" alt="" srcset="">
        </div>
        <div class="card-text">
            <h3 id="card-text-title" class="card-text-title">${element.title}</h3>
            <p id="card-text-resume" class="card-text-resume">${element.resume}</p>
        <button id="btn-see-more" class="btn-see-more">Ver más</button>
     </div>
    `})
