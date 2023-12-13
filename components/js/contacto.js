const { get } = require('http');
const nodemailer = require('nodemailer');

// ! ALERTA DE FORMULARIO
document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    //----------------------------------------
    const formBody = document.getElementById('Mensaje')

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'tucorreo@gmail.com',
        pass: 'tupassword',
      },
    });

    async function main() {
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <mireciclar.2023@gmail.com>', // sender address
        to: "mireciclar.2023@gmail.com", // list of receivers
        subject: "", // Subject line
        text: `${formBody}`, // plain text body
        html: "<b>Hello world?</b>", // html body

      });
      console.log("Message sent: %s", info.messageId);
    }
    main().catch(console.error);
    //----------------------------------------
    console.log('hola');
    event.preventDefault();
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
    });
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
