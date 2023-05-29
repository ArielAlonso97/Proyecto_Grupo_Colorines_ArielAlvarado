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

$id = isset($_POST['id']) ? $_POST['id'] : '';

// Consultar todos los Productos
$sql = "SELECT * FROM Productos WHERE Id = $id";
$result = $conn->query($sql);

$producto = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $producto = array(
            "id" => $row["Id"],
            "nombre" => $row["Nombre"],
            "descripcion" => $row["Descripcion"],
            "imagenBase64" => $row["Imagen"],
            "precio" => $row["Precio"],
            "existencia" => $row["Existencia"],
            "activo" => $row["Activo"]
        );
    }
}

echo json_encode($productos);

$conn->close();
?>
