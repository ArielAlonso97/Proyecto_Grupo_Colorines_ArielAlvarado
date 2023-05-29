import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Carrito } from 'src/app/models/carrito';
import { ProductoCarrito } from 'src/app/models/producto-carrito';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  productos: ProductoCarrito[] = [];
  @Input() resetFormSubject: Subject<boolean> = new Subject<boolean>();
  
  constructor(private router: Router) {
    
  }

  ngOnInit(){
    this.productos = Carrito.obtener();
    this.resetFormSubject.asObservable().subscribe(response => {
      console.log('se actualizó carrito');
       if(response){
        this.reloadComponent(true);
     }
    });
  }
  ngOnChanges(event:any){
    console.log('se actualizó carrito');
    console.log(event);
  }

  reloadComponent(self:boolean,urlToNavigateTo ?:string){
    //skipLocationChange:true means dont update the url to / when navigating
   console.log("Current route I am on:",this.router.url);
   const url=self ? this.router.url :urlToNavigateTo;
   this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
     this.router.navigate([`/${url}`]).then(()=>{
       console.log(`After navigation I am on:${this.router.url}`)
     })
   })
 }

 irARutaDestino() {
  this.router.navigate(['./tienda']); 
}
eliminarProducto(producto: ProductoCarrito) {
  Carrito.quitar(producto.id);
  this.productos = Carrito.obtener();
}

}
