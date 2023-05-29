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
$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
$descripcion = isset($_POST['descripcion']) ? $_POST['descripcion'] : '';
$imagen = isset($_POST['imagen']) ? $_POST['imagen'] : '';
$precio = isset($_POST['precio']) ? $_POST['precio'] : '';
$existencia = isset($_POST['existencia']) ? $_POST['existencia'] : '';

// Actualiza los datos en la tabla existencia
if ($imagen != '' && $imagen != null){
    $sql = "UPDATE Productos SET Nombre = '$nombre', Descripcion = '$descripcion', Imagen = '$imagen', Precio = $precio, Existencia = $existencia WHERE Id = $id";
}else{
    $sql = "UPDATE Productos SET Nombre = '$nombre', Descripcion = '$descripcion', Precio = $precio, Existencia = $existencia WHERE Id = $id";
}
if ($conn->query($sql) === false) {
    die(json_encode(array("error" => "Error al actualizar en la tabla Productos: " . $conn->error)));
}

$conn->close();

// Envía una respuesta exitosa al cliente
http_response_code(200);
echo json_encode(array("success" => true));
?>
