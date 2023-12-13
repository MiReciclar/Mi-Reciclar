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

    <title>Inicio Sesion</title>
</head>
<body>
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
                            header("location:../php/perfilUsuario.php");
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
</body>
</html>