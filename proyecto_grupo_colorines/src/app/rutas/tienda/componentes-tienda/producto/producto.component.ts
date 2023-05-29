import { Component, Input, EventEmitter, Output  } from '@angular/core';
import { Carrito } from 'src/app/models/carrito';
import { Producto } from 'src/app/models/producto';
import { ProductoCarrito } from 'src/app/models/producto-carrito';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Output() updateEvent = new EventEmitter<string>();
  @Input() producto: Producto = new Producto();
  cantidad: number = 0;

  aumentarCantidad = () => {
    console.log("Aumentando cantidad")
    this.cantidad++
  };
  restarCantidad = () =>{
    console.log("restando cantidad")
    if(this.cantidad > 0){
      this.cantidad --
    }
    else{
      console.error("No haz agregado nada")
    }
    
  }
  agregarCarrito = (data:Producto) => {
    let producto = data as ProductoCarrito;
    producto.cantidad = this.cantidad;
    Carrito.agregar(producto);
    this.cantidad = 0;
    this.updateEvent.emit();
  }
}





