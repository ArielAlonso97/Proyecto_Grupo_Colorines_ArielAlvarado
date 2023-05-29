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
$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
$apellido = isset($_POST['apellido']) ? $_POST['apellido'] : '';
$nombreUsuario = isset($_POST['nombreUsuario']) ? $_POST['nombreUsuario'] : '';
$correoElectronico = isset($_POST['correoElectronico']) ? $_POST['correoElectronico'] : '';
$contrasena = isset($_POST['contrasena']) ? $_POST['contrasena'] : '';

// Validación de datos (puedes agregar más validaciones según tus necesidades)

// Verifica si el nombre de usuario ya existe en la base de datos
$sql = "SELECT * FROM Usuarios WHERE Nombre = '$nombreUsuario'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // El nombre de usuario ya existe
    die(json_encode(array("error" => "UsuarioExiste")));
}

// Verifica si el correo electrónico ya está registrado en la base de datos
$sql = "SELECT * FROM Personas WHERE Correo = '$correoElectronico'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // El correo electrónico ya está registrado
    die(json_encode(array("error" => "CorreoExiste")));
}

// Inserta los datos en la tabla Personas
$sql = "INSERT INTO Personas (Nombre, Apellido, Correo, Activo) VALUES ('$nombre', '$apellido', '$correoElectronico', 1)";
if ($conn->query($sql) === false) {
    die(json_encode(array("error" => "Error al insertar en la tabla Personas: " . $conn->error)));
}

// Obtiene el ID de la persona recién insertada
$idPersona = $conn->insert_id;

// Inserta los datos en la tabla Usuarios
// $contrasenaHash = password_hash($contrasena, PASSWORD_DEFAULT); // Hashea la contraseña
$sql = "INSERT INTO Usuarios (IdPersona, IdRol, Nombre, Contrasena, Activo) VALUES ($idPersona, 2, '$nombreUsuario', '$contrasena', 1)";
if ($conn->query($sql) === false) {
    die(json_encode(array("error" => "Error al insertar en la tabla Usuarios: " . $conn->error)));
}

$conn->close();

// Envía una respuesta exitosa al cliente
http_response_code(200);
echo json_encode(array("success" => true));
?>
