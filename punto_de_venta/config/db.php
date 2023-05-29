<?php
// Conexión a la base de datos
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";
$password = "";
$database = "punto_de_venta";

$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener los datos enviados por Angular
$data = json_decode(file_get_contents("php://input"));

// Log de datos recibidos
file_put_contents('log.txt', print_r($data, true), FILE_APPEND);

// Validar las credenciales
$nombreUsuario = $data->nombreUsuario;
$contrasena = $data->contrasena;

$sql = "SELECT * FROM Usuarios WHERE Nombre = '$nombreUsuario' AND Contrasena = '$contrasena' AND Activo = 1";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    $row = $result->fetch_assoc();
    $usuario = [
        'id' => $row['Id'],
        'nombre' => $row['Nombre'],
        'rol' => $row['IdRol']
    ];
    echo json_encode($usuario);
} else {
    echo json_encode(null);
}

$conn->close();
?>
