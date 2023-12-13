let btn_modificar = document.querySelector(".modif-nombre");
let btn_img_perfil = document.querySelector(".modif-img-perfil");

let cont_form_edit_usuario = document.querySelector(".cont-form-edit-usuario");
let cont_form_img_usuario = document.querySelector(".cont-form-img-usuario");

let btn_cancelar = document.querySelector("cancelar");


btn_modificar.addEventListener("click", function () {
    cont_form_edit_usuario.style.display = "flex";
});

btn_img_perfil.addEventListener("click", function() {
    cont_form_img_usuario.style.display = "flex";
});

let mensajes = document.querySelectorAll('.mensaje');

    mensajes.forEach(function (mensaje) {
        setTimeout(function () {
            mensaje.style.display = 'none';
        }, 5000);
    });