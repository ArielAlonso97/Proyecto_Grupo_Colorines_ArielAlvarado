import { Component, } from '@angular/core';
import { Router } from '@angular/router';
import { Productos } from './catalogos-productos/productos/productos.component';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  productos_tienda = {
    producto1: new Productos('Audífonos', 800, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum quam at ex luctus, maximus tincidunt eros placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', 4, '../../../../assets/imagenes/producto_1.jpg'),
    producto2: new Productos('Otro producto', 1000, 'Descripción del otro producto', 2, '../../../../assets/imagenes/producto_2.jpg')
  };


  constructor(private router: Router) { }
  irARutaDestino() {
    this.router.navigate(['../../']); 
  }
  irARutaDestino_catalogo() {
    this.router.navigate(['../../Catalogo-usuarios']); 
  }
  


}
