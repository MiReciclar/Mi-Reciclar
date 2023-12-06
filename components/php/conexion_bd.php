<?php
    $conectar = mysqli_connect("localhost", "root", "", "miReciclar");

    if(!$conectar){
        echo "No se pudo conectar con el servidor";
    }else{
        echo "Se conecto con el servidor";
    }
?>