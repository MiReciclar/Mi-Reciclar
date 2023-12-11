<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../styles/register.css">

    <title>Inicio Sesion</title>
</head>
<body>
    <main class="main dos">
        <div class="cont-form">
            <!-- Login -->
            <form id="login-form" class="form" action="./login_usuario.php" method="POST">
                <h2 class="titulo-form">Iniciar Sesion</h2>
    
                <input class="user-name" type="text" name="username" placeholder="Nombre de usuario" required>
                <input class="password" type="password" name="password" placeholder="Contraseña" required>
                
                <input class="btn-form" id="btn-ingresar" type="submit" value="Ingresar">
    
                <a href="#" id="register-form-link" class="link-form">¿No tienes una cuenta? Registrate aqui</a>
            </form>
    
            <!-- Register -->
            <form id="register-form" class="form">
                <h2 class="titulo-form">Registrarse</h2>
    
                <input class="name" type="text" name="name" placeholder="Nombre" required>
                <input class="last-name" type="text" name="last-name" placeholder="Apellido" required>
                <input class="user-name" type="text" name="username" placeholder="Nombre de usuario" required>
                <input class="password" type="password" name="password" placeholder="Contraseña" required>
                <input class="confirm-password" type="password" name="confirm-password" placeholder="Confirmar Contraseña" required>
    
                <input class="btn-form" id="btn-registrar" type="submit" value="Registrarse">
    
                <a href="#" id="login-form-link" class="link-form">¿Ya tienes una cuenta? Inicia sesion aqui</a>
            </form>
        </div>

        <div class="cont-detalle">
            <div class="cont-img-detalle">
                <img src="../img/img-register/familia-reciclando.png" alt="">
            </div>
        </div>

        <div class="decoracion esfera-inferior-derecha"></div>
    </main>

    <script src="../js/register.js"></script>
</body>
</html>