import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegistroUsuario } from 'src/app/models/registro-usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  model: RegistroUsuario = new RegistroUsuario();

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  registrarUsuario() {
    console.log('Valores del formulario:');    
    console.log(this.model);
  
    const url = 'http://localhost/punto_de_venta/config/registro.php';
  
    if (this.model.contrasena !== this.model.contrasenaConfirmacion) {
      this.snackBar.open('Las contraseñas no coinciden', 'Cerrar', {
        duration: 3000,
      });
      return;
    }
  
    if (!this.model.nombreUsuario) {
      this.snackBar.open('El nombre de usuario no puede estar vacío', 'Cerrar', {
        duration: 3000,
      });
      return;
    }
  
    const datosRegistro = new FormData();
    datosRegistro.append('nombre', this.model.nombre);
    datosRegistro.append('apellido', this.model.apellido);
    datosRegistro.append('nombreUsuario', this.model.nombreUsuario);
    datosRegistro.append('correoElectronico', this.model.correoElectronico);
    datosRegistro.append('contrasena', this.model.contrasena);
  
    this.http.post(url, datosRegistro).subscribe({
      next: () => {
        this.snackBar.open('Usuario registrado exitosamente', 'Cerrar', {
          duration: 3000,
        });
      },
      error: (error) => {
        let mensaje = 'Error al registrar usuario';
        if (error.error === 'UsuarioExiste') {
          mensaje = 'El usuario ya está registrado';
        } else if (error.error === 'CorreoExiste') {
          mensaje = 'El correo electrónico ya está registrado';
        }
        this.snackBar.open(mensaje, 'Cerrar', {
          duration: 3000,
        });
        console.error(mensaje, error);
      },
    });
  }
  
  
  
}
