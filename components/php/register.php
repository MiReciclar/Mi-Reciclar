<?php
    session_start();
    include 'conexion_bd.php';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../styles/register.css">
    <link rel="shortcut icon" href="../img/logo-reciclar-removebg-preview.png" type="image/x-icon"/>

    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="../styles/nav-foot.css" />
    <link rel="stylesheet" href="../styles/perfil.css">
    <link rel="shortcut icon" href="../img/logo-reciclar-removebg-preview.png" type="image/x-icon"/>

    <title>Inicio Sesion</title>
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Menu mobile -->
        <div class="md:hidden hidden flex flex-columns" id="mobile-menu"></div>
      </nav>

    <main class="main dos">
        <div class="cont-form">
            <!-- Login -->
            <form id="login-form" class="form" action="#" method="POST">
                <h2 class="titulo-form">Iniciar Sesion</h2>
    
                <input class="user-name" type="text" name="username" placeholder="Nombre de usuario" required>
                <input class="password" type="password" name="password" placeholder="Contraseña" required>
                
                <input class="btn-form" id="btn-ingresar" type="submit" value="Ingresar" name="ingresar">
    
                <a href="#" id="register-form-link" class="link-form">¿No tienes una cuenta? Registrate aqui</a>
            </form>

            <?php
                if(isset($_POST['ingresar'])){
                    $usuario = $_POST['username'];
                    $password = $_POST['password'];

                    if(!empty($usuario) && !empty($password)){
                        $password = md5($password);
                        $consulta = "SELECT * FROM usuario WHERE usuario = '$usuario' and contrasenia = '$password'";
                        $resultado = mysqli_query($conectar, $consulta);

                        $filas = mysqli_num_rows($resultado);
                        
                        if ($filas > 0){
                            $datos_usuario = mysqli_fetch_array($resultado);
                
                            echo $datos_usuario['id'];
                            echo $datos_usuario['nombre'];
                            echo $datos_usuario['apellido'];
                            echo $datos_usuario['usuario'];
                            echo $datos_usuario['contrasenia'];
                
                            $_SESSION['id'] = $datos_usuario['id'];

                            echo '<script>window.location.href = "../php/perfilUsuario.php";</script>';
                        }else{
                            echo '<div class = "mensaje mensaje-error">Usuario o contraseña incorrectos</div>';
                        }
                    }else{
                        echo '<div class = "mensaje mensaje-error">Los campos estan vacios</div>';
                    }
                }
            ?>
    
            <!-- Register -->
            <form id="register-form" class="form" action="#" method="POST">
                <h2 class="titulo-form">Registrarse</h2>
    
                <input class="name" type="text" name="name" placeholder="Nombre" required>
                <input class="last-name" type="text" name="last-name" placeholder="Apellido" required>
                <input class="user-name" type="text" name="username" placeholder="Nombre de usuario" required>
                <input class="password" type="password" name="password" placeholder="Contraseña" required>
                <input class="confirm-password" type="password" name="confirm-password" placeholder="Confirmar Contraseña" required>
    
                <input class="btn-form" id="btn-registrar" type="submit" value="Registrarse" name="registrar">
    
                <a href="#" id="login-form-link" class="link-form">¿Ya tienes una cuenta? Inicia sesion aqui</a>
            </form>

            <?php
                if(isset($_POST['registrar'])){
                    $nombre = $_POST['name'];
                    $apellido = $_POST['last-name'];
                    $usuario = $_POST['username'];
                    $contrasenia = $_POST['password'];
                    $confir_contrasenia = $_POST['confirm-password'];

                    if(!empty($nombre) && !empty($apellido) && !empty($usuario) && !empty($contrasenia) && !empty($confir_contrasenia)){
                        $consulta = "SELECT usuario FROM usuario WHERE usuario = '$usuario'";
                        $resultado = mysqli_query($conectar, $consulta);

                        $filas = mysqli_num_rows($resultado);

                        if($filas <= 0){
                            if($contrasenia == $confir_contrasenia){
                                $contrasenia_encriptada = md5($contrasenia);
                                $puntos_regalo = 1250;
    
                                $consulta = "INSERT INTO usuario (nombre, apellido, usuario, contrasenia, img_perfil, puntos) VALUES ('$nombre', '$apellido', '$usuario', '$contrasenia_encriptada', '../img/img-perfil/sin foto 2.png', '$puntos_regalo')";
                                $resultado = mysqli_query($conectar, $consulta);
    
                                if($resultado){
                                    echo '<div class = "mensaje mensaje-exito">Usuario registrado correctamente</div>';
                                }else{
                                    echo '<div class = "mensaje mensaje-error">Error al registrar usuario.<br> Intentelo de nuevo mas tarde.</div>';
                                }
                    
                            }else{
                                echo '<div class = "mensaje mensaje-error">Las contraseñas no coinciden</div>';
                            }
                        }else{
                            echo '<div class = "mensaje mensaje-error">El nombre de usuario ya existe, intente con otro.</div>';
                        }
                    }else{
                        echo '<div class = "mensaje mensaje-error">Los campos estan vacios</div>';
                    }
                }
            ?>

        </div>

        <div class="cont-detalle">
            <div class="cont-img-detalle">
                <img id="img-form" src="../img/img-register/familia-reciclando.png" alt="">
            </div>
        </div>

        <div class="decoracion esfera-inferior-derecha"></div>
    </main>

    <script src="../js/register.js"></script>
    <script src="../js/nav-foot.js"></script>
</body>
</html>