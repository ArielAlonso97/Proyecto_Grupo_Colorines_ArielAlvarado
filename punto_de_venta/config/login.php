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
$data = json_decode(file_get_contents('php://input'), true);
$nombre = isset($data['nombre']) ? $data['nombre'] : '';
$contrasena = isset($data['contrasena']) ? $data['contrasena'] : '';

// Realizar la consulta en la base de datos
$sql = "SELECT * FROM Usuarios WHERE Nombre = '$nombre' AND Contrasena = '$contrasena'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Inicio de sesión exitoso
    echo json_encode(true);
} else {
    // Credenciales inválidas
    echo json_encode(false);
}

$conn->close();
?>
