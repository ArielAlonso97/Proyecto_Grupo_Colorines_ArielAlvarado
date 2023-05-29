<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: POST");
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

// Obtén los datos del formulario
$id = isset($_POST['id']) ? $_POST['id'] : '';

// Actualiza los datos en la tabla existencia
$sql = "UPDATE Productos SET Activo = IF(Activo = 1, 0, 1) WHERE Id = $id";
if ($conn->query($sql) === false) {
    die(json_encode(array("error" => "Error al actualizar en la tabla Productos: " . $conn->error)));
}

$conn->close();

// Envía una respuesta exitosa al cliente
http_response_code(200);
echo json_encode(array("success" => true));
?>