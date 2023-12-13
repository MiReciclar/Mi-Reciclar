<?php
    session_start();

    include 'conexion_bd.php';

    $usuario = $_POST['username'];
    $password = $_POST['password'];

    if (!empty($usuario) && !empty($password)){
        // $passwordHash = hash('sha256', $password);

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
            echo "Usuario o contraseña incorrectos php";
            
        }
    }else{
        echo "Los campos estan vacios";
    }
?>