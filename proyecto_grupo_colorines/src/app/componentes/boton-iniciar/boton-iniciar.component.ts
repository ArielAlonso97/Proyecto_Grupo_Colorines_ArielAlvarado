import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../../database.service';

@Component({
  selector: 'app-boton-iniciar',
  templateUrl: './boton-iniciar.component.html',
  styleUrls: ['./boton-iniciar.component.css']
})
export class BotonIniciarComponent {
  constructor(private router: Router) { }

  login() {
    console.log('Iniciando sesión...');
  }

  
  

  
}

 