// ! CONTACTO RENDER
const contacto = [
  {
    id: "telefono",
    img: "../img/contacto/phone.png",
    titulo: "Teléfono",
    descripcion: "01131225993",
  },
  {
    id: "email",
    img: "../img/contacto/message.png",
    titulo: "Email",
    descripcion: "mireciclar@gmail.com",
  },
  {
    id: "direccion",
    img: "../img/contacto/adress.png",
    titulo: "Dirección",
    descripcion: "California 2000, CABA, Argentina",
  },
];

const renderContacto = () => {
  const divContacto = document.getElementById("divContacto");
  divContacto.innerHTML = contacto
    .map((info) => {
      return `<div class="flex gap-3 text-green-600 items-center">
      <img
        class="w-6 h-6"
        src=${info.img}
        alt=${info.id}
      />
      <div class="flex flex-col gap-[2px]">
        <p class="font-bold hover:text-green-900">${info.titulo}</p>
        <p>${info.descripcion}</p>
      </div>
    </div>`;
    })
    .join("");
};

renderContacto();
