import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { Subject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Carrito } from 'src/app/models/carrito';
import { ProductoCarrito } from 'src/app/models/producto-carrito';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  productos: Producto[] = [];
  subscription: Subscription;
  productosCarrito: ProductoCarrito[] = [];
  resetFormSubject: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router, private http: HttpClient){ }

  ngOnInit() {
    this.productosCarrito = Carrito.obtener();
    const url = 'http://localhost/punto_de_venta/config/consultaProductosActivos.php';

    this.subscription = this.http.get<Producto[]>(url).subscribe({
      next: (response) => {
        this.productos = response;
      },
      error: (error) => {
        console.log('Error al obtener los productos:', error);
      }
    });
  }

  irARutaDestino() {
    this.router.navigate(['../../']); 
  }
  irARutaDestino_catalogo_usuarios() {
    this.router.navigate(['../../Catalogo-usuarios']); 
  }
  irARutaDestino_catalogo_productos() {
    this.router.navigate(['../../Catalogo-productos']); 
  }
  irARutaDestino_carrito() {
    this.router.navigate(['./carrito']); 
  }


  actualizarCarrito(){
    console.log('se actualizó carrito');
    this.productosCarrito = Carrito.obtener();
    this.resetChildForm();
  }

  resetChildForm(){
     this.resetFormSubject.next(true);
  }
}
