import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-regresar',
  templateUrl: './boton-regresar.component.html',
  styleUrls: ['./boton-regresar.component.css']
})
export class BotonRegresarComponent {
  constructor(private router: Router) { }
  regresando(){
    console.log("regresando...")
  }
  
}
