import { Component,Input  } from '@angular/core';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input() imageProducto: string = "";
  @Input() nombre_producto: string = "";
  @Input() descripcion: string = "";
  @Input() precio: number = 0;
  @Input() existencia: number = 0;
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
  agregarCarrito = () => {
    console.log("agregando a carrito...")
  }
  resetearCantidad = () =>{
    this.cantidad = 0;
  }
  

  
  
  
  
}





