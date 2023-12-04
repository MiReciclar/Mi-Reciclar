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
    img: "../img/contato/mail.png",
    titulo: "Email",
    descripcion: "mireciclar@gmail.com",
  },
  {
    id: "direccion",
    img: "../img/contacto/adress.png",
    titulo: "Dirección",
    descripcion: "Spiro 65, Adrogué, Buenos Aires, Argentina",
  },
];

const renderContacto = () => {
  const divContacto = document.getElementById("divContacto");
  divContacto.innerHTML = contacto
    .map((info) => {
      return `<div class="flex gap-2 items-center">
      <img
        class="w-6 h-6"
        src=${info.img}
        alt=${info.id}
      />
      <div class="flex flex-col gap-[2px]">
        <p class="font-bold">${info.titulo}</p>
        <p>${info.descripcion}</p>
      </div>
    </div>`;
    })
    .join("");
};

renderContacto();
