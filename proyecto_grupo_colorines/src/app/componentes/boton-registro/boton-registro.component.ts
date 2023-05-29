import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-registro',
  templateUrl: './boton-registro.component.html',
  styleUrls: ['./boton-registro.component.css']
})
export class BotonRegistroComponent {
  constructor(private router: Router) { }
  register() {
    console.log('Registrando...');
    
  }
  irARutaDestino() {
    this.router.navigate(['../../registro']); 
  }
}
