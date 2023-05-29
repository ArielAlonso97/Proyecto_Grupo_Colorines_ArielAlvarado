import { Component } from '@angular/core';
import { DatabaseService } from '../../database.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nombreUsuario = '';
  contrasena = '';

  constructor(private databaseService: DatabaseService, private router: Router) { }
  irARutaDestino() {
    this.router.navigate(['../../tienda']);
    console.log("inicio")
  }

  login() {
    this.databaseService.login(this.nombreUsuario, this.contrasena).subscribe({
      next: response => {
        if (response) {
          // Inicio de sesión exitoso
          console.log('Inicio de sesión exitoso:', response);
          // Realizar acciones adicionales, como guardar el usuario en el almacenamiento local
          this.irARutaDestino()
        } else {
          // Credenciales inválidas
          console.log('Credenciales inválidas');
        }
      },
      error: error => {
        console.error('Error en el inicio de sesión:', error);
      }
    });
  }
}