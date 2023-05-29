import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo-usuarios',
  templateUrl: './catalogo-usuarios.component.html',
  styleUrls: ['./catalogo-usuarios.component.css']
})
export class CatalogoUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    const url = 'http://localhost/punto_de_venta/config/consulta.php'; 

    this.http.get<Usuario[]>(url).subscribe((response) => {
      this.usuarios = response;
    });
  }


  irARutaDestino() {
    this.router.navigate(["/tienda"]); 
  }
}

