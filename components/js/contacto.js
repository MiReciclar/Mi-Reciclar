// ! ALERTA DE FORMULARIO
document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  fetch("https://formsubmit.co/ajax/mireciclar.2023@gmail.com", {
    method: "POST",
  }).then((res) =>
    res.json().then((data) =>
      Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Tu consulta ha sido enviada!",
        text: "Nos pondremos en contacto a la brevedad",
        showConfirmButton: false,
        timer: 2500,
        customClass: {
          content: "color-custom-alerta", // Aplica la clase personalizada al contenido del alert
        },
      }).then(() => {
        // Después de cerrar la alerta, restablece el formulario
        document.getElementById("formulario").reset();
      })
    )
  );
});

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
    descripcion:
      '<a href="mailto:mireciclar.2023@gmail.com">mireciclar.2023@gmail.com</a>',
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
