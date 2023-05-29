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

// Consultar todos los Productos
$sql = "SELECT * FROM Productos";
$result = $conn->query($sql);

$productos = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $producto = array(
            "id" => $row["Id"],
            "nombre" => $row["Nombre"],
            "descripcion" => $row["Descripcion"],
            "imagen" => $row["Imagen"],
            "precio" => $row["Precio"],
            "existencia" => $row["Existencia"],
            "activo" => $row["Activo"]
        );

        $productos[] = $producto;
    }
}

echo json_encode($productos);

$conn->close();
?>
