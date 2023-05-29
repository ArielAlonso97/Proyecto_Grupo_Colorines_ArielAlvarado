<?php
// Conexión a la base de datos

$servername = "localhost";
$username = "root";
$password = "";
$database = "punto_de_venta";

$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$id = isset($_GET['id']) ? $_GET['id'] : '';

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

echo json_encode($producto);

$conn->close();
?>
