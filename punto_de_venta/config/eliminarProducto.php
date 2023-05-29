<?php
// Obtener el ID del producto a eliminar enviado por GET
$id = $_GET['id'];

// Conectar a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "punto_de_venta";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error al conectar con la base de datos: " . $conn->connect_error);
}

// Preparar y ejecutar la consulta SQL para eliminar el producto
$sql = "UPDATE Productos SET Activo = 0 WHERE Id = $id";

if ($conn->query($sql) === TRUE) {
    echo "Producto eliminado exitosamente";
} else {
    echo "Error al eliminar el producto: " . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>