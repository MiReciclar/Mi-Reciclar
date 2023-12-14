<?php

  session_start();

  if(!isset($_SESSION['id'])){
    header("location:../php/register.php");
    session_destroy();
  }else{
    include 'conexion_bd.php';

    $id = $_SESSION['id'];

    $consulta = "SELECT * FROM usuario WHERE id = '$id'";
    $resultado = mysqli_query($conectar, $consulta);

    $datos_usuario = mysqli_fetch_array($resultado);

    $nombre = $datos_usuario['nombre'];
    $apellido = $datos_usuario['apellido'];
    $usuario = $datos_usuario['usuario'];
    $img_perfil = $datos_usuario['img_perfil'];
    $puntos = $datos_usuario['puntos'];
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="../styles/nav-foot.css" />
    <link rel="stylesheet" href="../styles/perfil.css">
    <link rel="shortcut icon" href="../img/logo-reciclar-removebg-preview.png" type="image/x-icon"/>

    <title>Perfil</title>
</head>
<body>

<nav class="bg-green-600">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-20 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <!-- Hamburguesa mobile -->
              <button
                type="button"
                id="hamburger"
                class="relative flex-column items-center justify-center rounded-md p-2 text-white hover:bg-green-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <div id="bar1" class="bar"></div>
                <div id="bar2" class="bar"></div>
                <div id="bar3" class="bar"></div>
              </button>
            </div>

            <div
              class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
            >
              <!-- Links navbar  -->
              <div class="flex flex-shrink-0 items-center">
                <img
                  class="h-12 w-auto rounded-full bg-white"
                  src="../img/logo-reciclar-removebg-preview.png"
                  alt="Mi Reciclar"
                />
              </div>
              <div class="hidden sm:ml-6 sm:block">
                <div id="navContainer" class="flex space-x-3"></div>
              </div>
            </div>

            <div
              class="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0"
            >
              <!-- Usuario -->
              <div class="relative ml-3">
                <div>
                  <button
                    type="button"
                    class="relative flex rounded-full focus:ring-2 focus:ring-green-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <img
                      class="h-11 w-11 rounded-full"
                      src="../img/image-removebg-preview (1).png"
                      alt="emoji-usuario"
                    />
                  </button>
                </div>

                <!-- MODAL USUARIO -->
                <div
                  id="user-menu"
                  class="opacity-0 absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition opacity transform duration-300 ease-out"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  <a
                    href="../php/perfilUsuario.php"
                    class="block px-4 py-2 text-lg text-green-800"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-0"
                    >Mi Perfil</a
                  >
                  <a
                    href="../php/register.php"
                    class="block px-4 py-2 text-lg text-green-800"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-1"
                    >Iniciar Sesión</a
                  >
                  <a
                    href="../htmls/Eco-Memo.html"
                    class="block px-4 py-2 text-lg text-green-800"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-2"
                    >Eco Memo</a
                  >
                  <a
                    href="../php/cerrar_sesion.php"
                    class="block px-4 py-2 text-lg text-green-800"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-2"
                    >Salir</a
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Menu mobile -->
        <div class="md:hidden hidden flex flex-columns" id="mobile-menu"></div>
      </nav>

    <div class="perfil-cont">
        <div class="perfil-datos-cont">
            <div class="foto-perfil-cont">
              <?php
                if (file_exists($img_perfil)) {
                  echo "<img class='foto-perfil' src='$img_perfil' alt='foto de perfil del usuario'>";
              } else {
                echo "<img class='foto-perfil' src='../img/img-perfil/sin foto 2.png' alt='foto de perfil del usuario'>";
              }
              ?>
                <!-- <img class="foto-perfil" src="../img/img-perfil/sin foto 2.png" alt="foto de perfil del usuario"> -->
                <div class="btn-modificar modif-img-perfil"></div>
            </div>

            <div class="usuario-info-cont">
                <div class="nombre-cont contenido-cont">
                    <h3>Usuario</h3>
                    <div class="nombre-usuario"><?php echo ucfirst($usuario) ?></div>
                    <div class="btn-modificar modif-nombre"></div>
                    <!-- ver como implemetar el btn para modificar el nombre -->
                </div>

                <div class="puntos-cont contenido-cont">
                    <h3>Puntos</h3>
                    <div class="puntos-usuario"><?php echo $puntos ?></div>
                </div>
            </div>
        </div>

        <div class="mapa-cont">
            <iframe class="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210146.75955271677!2d-58.5981081473618!3d-34.61571293339003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1698012999677!5m2!1ses-419!2sar"></iframe>
            <div class="icono-ampliar">
                <img src="../img/img-perfil/papelera-de-reciclaje.png" alt="icono tachos de reciclaje">
                <div class="ampliartxt">Ampliar</div>
            </div>
        </div>

        <div class = "cont-form-edit-usuario">
          <form action="#" method = "POST" class = "form-edit-usuario">
            <h3>Cambiar nombre de Usuario</h3>
            <input type="text" name = "edit-usuario" id = "edit-usuario" placeholder = "Nuevo nombre usuario"><br>
            <div class = "cont-btn-form-edit-usuario">
              <button type="submit" name="actualizar_usuario" id = "aceptar" >Aceptar</button>
              <button name="cancelar" id = "cancelar" >Cancelar</button>
            </div>
          </form>
        </div>
        <?php
        
          if(isset($_POST['actualizar_usuario'])){
            $usuario_nuevo = $_POST['edit-usuario'];

            if(!empty($usuario_nuevo)){
              $consulta = "UPDATE usuario SET usuario = '$usuario_nuevo' WHERE id = '$id'";
              $resultado = mysqli_query($conectar, $consulta);

              if($resultado){
                echo '<div class = "mensaje mensaje-exito">Actualización exitosa</div>';
                echo '<script>window.location.href = "../php/perfilUsuario.php";</script>';
              }else{
                echo '<div class = "mensaje mensaje-error">Error al actualizar</div>';
              }

            }else{
              echo '<div class = "mensaje mensaje-error">El campo no puede estar vacio</div>';
            }
          }

        ?>

        <div class = "cont-form-img-usuario">
          <form action="#" method = "POST" enctype="multipart/form-data" class = "form-edit-usuario">
            <h3>Añadir imagen de perfil</h3>
            <input type="file" name = "img" id = "img"><br>
            <div class = "cont-btn-form-edit-usuario">
              <button type="submit" name="enviar_img" id = "aceptar">Aceptar</button>
              <button type="submit" name="cancelar" id = "cancelar">Cancelar</button>
            </div>
          </form>
        </div>

        <?php
          if(isset($_POST['enviar_img'])){
            $carpeta_destino  = "../img/img-perfil/";

            $nombre_imagen = $_FILES['img']['name'];

            $extension = pathinfo($nombre_imagen, PATHINFO_EXTENSION);

            if($extension == "jpg" || $extension == "png" || $extension == "jpeg") {

              $ruta_temporal = $_FILES['img']['tmp_name'];
              $ruta_destino = $carpeta_destino . $nombre_imagen;
              move_uploaded_file($ruta_temporal, $ruta_destino);

              $consulta = "UPDATE usuario SET img_perfil = '$ruta_destino' WHERE id = '$id'";
              $resultado = mysqli_query($conectar, $consulta);

              if($resultado){
                echo '<div class = "mensaje mensaje-exito">Actualización exitosa</div>';
                echo '<script>window.location.href = "../php/perfilUsuario.php";</script>';
              }else{
                echo '<div class = "mensaje mensaje-error">Error al actualizar</div>';
              }
            }
            else{
                echo '<div class = "mensaje mensaje-error">Tipo de imagen no permitida</div>';
            }
          }
        ?>

    </div>
    <footer class="py-6 bg-green-800 dark:text-gray-50">
        <div
          class="container px-6 mx-auto space-y-6 divide-y dark:divide-gray-400 md:space-y-12 divide-opacity-50"
        >
          <div class="grid grid-cols-12">
            <div class="pb-6 col-span-full md:pb-0 md:col-span-6">
              <a
                rel="noopener noreferrer"
                href="#"
                class="flex justify-center space-x-3 md:justify-start"
              >
                <div
                  class="flex items-center justify-center w-12 h-12 rounded-full bg-white"
                >
                  <img src="../img/logo-reciclar-removebg-preview.png" alt="" />
                </div>
                <span class="self-center text-3xl font-semibold"
                  >Mi Reciclar</span
                >
              </a>
            </div>
            <div class="col-span-6 text-center md:text-left md:col-span-3">
              <ul>
                <p class="pb-1 text-xl font-medium">Nuestra Web</p>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    class="hover:text-green-500"
                    >Misión</a
                  >
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    class="hover:text-green-500"
                    >¿Cómo Reciclar?</a
                  >
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    class="hover:text-green-500"
                    >Recompensas</a
                  >
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    class="hover:text-green-500"
                    >Jornadas</a
                  >
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    class="hover:text-green-500"
                    >Eco Noticias</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-span-6 text-center md:text-left md:col-span-3">
              <p class="pb-1 text-xl font-medium">El Equipo</p>
              <ul>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    class="hover:text-green-500"
                    >Mailen Alvarez</a
                  >
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    class="hover:text-green-500"
                    >Giuliana Ambrosino</a
                  >
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    class="hover:text-green-500"
                    >Camila Ortubey</a
                  >
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    class="hover:text-green-500"
                    >Santiago Flores</a
                  >
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    class="hover:text-green-500"
                    >Emanuel Gaona</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="grid justify-center pt-6 lg:justify-between">
            <div
              class="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6"
            >
              <span>©2023 Mi Reciclar - Todos los derechos reservados</span>
            </div>
            <div class="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
              <a
                rel="noopener noreferrer"
                href="#"
                title="Email"
                class="flex items-center justify-center w-10 h-10 rounded-full bg-green-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  ></path>
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  ></path>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Twitter"
                class="flex items-center justify-center w-10 h-10 rounded-full bg-green-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"
                  ></path>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="GitHub"
                class="flex items-center justify-center w-10 h-10 rounded-full bg-green-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  class="w-5 h-5"
                >
                  <path
                    d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    <script src="../js/nav-foot.js"></script>
    <script src="../js/perfil-usuario.js"></script>
</body>
</html>