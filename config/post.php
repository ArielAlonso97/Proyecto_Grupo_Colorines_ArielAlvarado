<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$database = "punto_de_venta";

$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener los datos enviados por Angular
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$nombreUsuario = $_POST['nombreUsuario'];
$correoElectronico = $_POST['correoElectronico'];
$contrasena = $_POST['contrasena'];
$contrasenaConfirmacion = $_POST['contrasenaConfirmacion'];

// Log de datos recibidos
$dataLog = "Datos recibidos:\n";
$dataLog .= "Nombre: $nombre\n";
$dataLog .= "Apellido: $apellido\n";
$dataLog .= "Nombre de usuario: $nombreUsuario\n";
$dataLog .= "Correo electrónico: $correoElectronico\n";
$dataLog .= "Contraseña: $contrasena\n";
$dataLog .= "Confirmación de contraseña: $contrasenaConfirmacion\n\n";
file_put_contents('log.txt', $dataLog, FILE_APPEND);

// Realizar la inserción en la base de datos
$sql = "INSERT INTO Usuarios (Nombre, Apellido, NombreUsuario, CorreoElectronico, Contrasena)
        VALUES ('$nombre', '$apellido', '$nombreUsuario', '$correoElectronico', '$contrasena')";

if ($conn->query($sql) === TRUE) {
    // Registro exitoso
    $log = "Registro exitoso:\n";
    $log .= "Nombre: $nombre\n";
    $log .= "Apellido: $apellido\n";
    $log .= "Nombre de usuario: $nombreUsuario\n";
    $log .= "Correo electrónico: $correoElectronico\n";
    $log .= "Contraseña: $contrasena\n";
    $log .= "Confirmación de contraseña: $contrasenaConfirmacion\n\n";
    file_put_contents('log.txt', $log, FILE_APPEND);

    echo json_encode('Registro exitoso');
} else {
    // Error al insertar en la base de datos
    echo json_encode('Error al registrar usuario');
}

$conn->close();
?>
