const main = document.querySelector(".main");

const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");

const loginLink = document.querySelector("#login-form-link");
const registerLink = document.querySelector("#register-form-link");

const btnIngresa = document.querySelector("#btn-ingresar");
const btnRegistrate = document.querySelector("#btn-registrar");

const contDetalle = document.querySelector(".contenedor-detalle");

const esfera = document.querySelector(".decoracion");

usuarios = [];

loginLink.addEventListener("click", (e) => {
    // e.preventDefault();
    registerForm.style.display = "none";
    loginForm.style.display = "flex";

    registerForm.classList.add("difuminado")
    loginForm.classList.add("difuminado")


    main.style.flexDirection = "row";

    esfera.classList.remove("esfera-superior-izquierda");
    esfera.classList.add("esfera-inferior-derecha");

    // let img_form = document.querySelector("#img-form");

    // img_form.src = "../img/img-register/familia-reciclando.png"
});

registerLink.addEventListener("click", (e) => {
    // e.preventDefault();
    loginForm.style.display = "none";
    registerForm.style.display = "flex";

    registerForm.classList.add("difuminado")
    loginForm.classList.add("difuminado")
    
    main.style.flexDirection = "row-reverse";

    esfera.classList.remove("esfera-inferior-derecha");
    esfera.classList.add("esfera-superior-izquierda");

    // let img_form = document.querySelector("#img-form");

    // img_form.src = "../img/img-register/reciclar.png"
});

let mensajes = document.querySelectorAll('.mensaje');

console.log(mensajes);

    mensajes.forEach(function (mensaje) {
        setTimeout(function () {
            mensaje.style.display = 'none';
        }, 5000);
    });

// function generarId(arrayObjetos) {
//     let id = 0;

//     if (arrayObjetos.length > 0) {
//         let idMayor = arrayObjetos[0].id;

//         // Iterar sobre el array de objetos para encontrar el ID más grande
//         arrayObjetos.forEach((objeto) => {
//             if (objeto.id > idMayor) {
//                 idMayor = objeto.id;
//             }
//         });
//         // Establecer el ID actual después de completar la iteración
//         id = idMayor;
//     }
//     // Incrementar el ID en 1 para obtener un nuevo ID único
//     id++;

//     return id;
// }


// // obtener datos del formulario
// btnIngresa.addEventListener("click", (e) => {
//     e.preventDefault();

//     const userName = loginForm.querySelector(".user-name");
//     const password = loginForm.querySelector(".password");

//     //verificar si se puede iniciar sesion
//     if(userName.value === '' || password.value === ''){
//         alert("Por favor, completa todos los campos.");
//         return;
//     }else{
//         const usuario = usuarios.find((usuario) => {
//             return usuario.userName === userName.value && usuario.password === password.value;
//         });

//         if(usuario){
//             alert("Bienvenido");
//             // redireccionar a la pagina principal
//             console.log("id: "+usuario.id+"\nnombre: "+usuario.name+"\napellido: "+usuario.lastName+"\npuntos: "+usuario.puntos);
//         }else{
//             alert("Usuario o contraseña incorrectos");
//         }
//     }
// });

// btnRegistrate.addEventListener("click", (e) => {
//     e.preventDefault();

//     const name = registerForm.querySelector(".name");
//     const lastName = registerForm.querySelector(".last-name");
//     const userName = registerForm.querySelector(".user-name");
//     const password = registerForm.querySelector(".password");
//     const password2 = registerForm.querySelector(".confirm-password");

//     usuarioExistente = usuarios.find((usuario) => {
//         return usuario.userName === userName.value;
//     });

//     if (name.value === '' || lastName.value === '' || userName.value === '' || password.value === '' || password2.value === '') {
//         alert("Por favor, completa todos los campos.");
//         return;
//     }else{
//         if(usuarioExistente){
//             alert("El usuario ya existe");
//         }else{
//             console.log("Usuario registrado");

//             if(password.value === password2.value){
//                 //registrar usuario
//                 usuario = {
//                     id: generarId(usuarios),
//                     userName: userName.value,
//                     password: password.value,
//                     name: name.value,
//                     lastName: lastName.value,
//                     imgPerfil: "",
//                     puntos: 0,
//                     localidad: ""
//                 };
//                 usuarios.push(usuario);
//                 alert("Usuario registrado");
//             }else{
//                 console.log("Las contraseñas no coinciden");
//             }
//         }
//     }
// });

