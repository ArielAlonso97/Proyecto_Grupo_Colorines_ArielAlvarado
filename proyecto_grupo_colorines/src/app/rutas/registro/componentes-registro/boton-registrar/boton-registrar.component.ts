import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-registrar',
  templateUrl: './boton-registrar.component.html',
  styleUrls: ['./boton-registrar.component.css']
})
export class BotonRegistrarComponent {
  constructor(private router: Router) { }
  register() {
    console.log('Registrando...');
    
  }
  irARutaDestino() {
    this.router.navigate(['../']); 
  }
}
