import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})
export class CatalogoProductosComponent implements OnInit {
  productos: Producto[] = [];
  subscription: Subscription;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const url = 'http://localhost/punto_de_venta/config/consultaProductos.php';

    this.subscription = this.http.get<Producto[]>(url).subscribe({
      next: (response) => {
        this.productos = response;
      },
      error: (error) => {
        console.log('Error al obtener los productos:', error);
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  editar(id: number){
    window.location.href = 'editar-producto/' + id;
  }

  cambiarEstado(id: number){
    const datosRegistro = new FormData();
    
    datosRegistro.append('id', id.toString());

    const url = 'http://localhost/punto_de_venta/config/activarInactivarProducto.php';
    this.http.post(url, datosRegistro).subscribe({
      next: () => {
        console.log('Producto modificado exitosamente');
        window.location.reload();
      },
      error: (error) => {
        console.log('Error al crear el producto:', error);
      }
    });
  }

}
