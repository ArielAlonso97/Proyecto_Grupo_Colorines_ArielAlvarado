CREATE DATABASE PuntoVenta;
USE PuntoVenta;

CREATE TABLE Roles(
	Id INT AUTO_INCREMENT NOT NULL,
	Nombre VARCHAR(25) NOT NULL,
    Descripcion VARCHAR(100) NULL,
    Nivel INT NOT NULL,
	PRIMARY KEY(Id),
    UNIQUE (Nivel)
);

CREATE TABLE Personas(
	Id INT AUTO_INCREMENT NOT NULL,
	Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(50) NOT NULL,
    Correo VARCHAR(50) NOT NULL,
    Activo BIT NOT NULL,
	PRIMARY KEY(Id)
);

CREATE TABLE Usuarios(
	Id INT AUTO_INCREMENT NOT NULL,
    IdPersona INT NOT NULL,
    IdRol INT NOT NULL,
	Nombre VARCHAR(15) NOT NULL,
    Contrasena VARCHAR(20) NOT NULL,
    Activo BIT NOT NULL,
	PRIMARY KEY(Id),
    CONSTRAINT FK_PersonaUsuario FOREIGN KEY (IdPersona) REFERENCES Personas(Id),
    CONSTRAINT FK_RolUsuario FOREIGN KEY (IdRol) REFERENCES Roles(Id),
    UNIQUE (Nombre)
);

CREATE TABLE Productos(
	Id INT AUTO_INCREMENT NOT NULL,
	Nombre VARCHAR(50) NOT NULL,
    Descripcion VARCHAR(250) NULL,
    Imagen LONGTEXT NOT NULL,
    Precio DECIMAL(10,2) NOT NULL,
    Existencia INT NOT NULL,
    Activo BIT NOT NULL,
	PRIMARY KEY(Id)
);

SET @IdRolAdmin = 0,
	@IdPersonaAdmin = 0;

INSERT INTO Roles (Nombre, Descripcion, Nivel) VALUES('Administrador', 'Permite gestionar los catálogos del sistema', 1);
SET @IdRolAdmin = LAST_INSERT_ID();
SELECT @IdRolAdmin;

INSERT INTO Roles (Nombre, Descripcion, Nivel) VALUES('Cliente', 'Permite visualizar los productos del sistema', 2);

INSERT INTO Personas (Nombre, Apellido, Correo, Activo) VALUES('Admin', 'Admin', 'admin@admin.com', 1);
SET @IdPersonaAdmin = LAST_INSERT_ID();
SELECT @IdPersonaAdmin;

INSERT INTO Usuarios (IdPersona, IdRol, Nombre, Contrasena, Activo) VALUES(@IdPersonaAdmin, @IdRolAdmin, 'Admin', 'Admin123.', 1);