import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  
}
export class Productos {
  nombre: string;
  precio: number;
  descripcion: string;
  cantidad: number;
  imagen: string;

  constructor(nombre: string, precio: number, descripcion: string, cantidad: number, imagen: string) {
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.imagen = imagen;
  }
}




