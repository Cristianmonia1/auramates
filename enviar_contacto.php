<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoge los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Dirección de correo a la que se enviará el mensaje
    $destinatario = "matesauradistribuidor@gmail.com"; // Cambia esto a tu dirección de correo electrónico

    // Asunto del correo
    $asunto = "Nuevo mensaje de contacto de " . $nombre;

    // Cuerpo del correo
    $cuerpo = "Nombre: " . $nombre . "\n";
    $cuerpo .= "Email: " . $email . "\n";
    $cuerpo .= "Mensaje: " . $mensaje . "\n";

    // Encabezados del correo
    $encabezados = "From: " . $email;

    // Envía el correo
    if (mail($destinatario, $asunto, $cuerpo, $encabezados)) {
        echo "Mensaje enviado con éxito.";
    } else {
        echo "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.";
    }
}
?>
