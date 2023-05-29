import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Subscription } from 'rxjs';
import { RegistroProducto } from 'src/app/models/registro-producto';

@Component({
  selector: 'app-edicion-productos',
  templateUrl: './edicion-productos.component.html',
  styleUrls: ['./edicion-productos.component.css']
})
export class EdicionProductosComponent implements OnInit {
  productos: Producto[] = [];
  subscription: Subscription;
  nuevoProducto: RegistroProducto = new RegistroProducto();

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
  
  obtenerProductos() {
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

  modificarProducto() {
    console.log(this.nuevoProducto);

    const datosRegistro = new FormData();
    
    datosRegistro.append('id', this.nuevoProducto.id.toString());
    datosRegistro.append('nombre', this.nuevoProducto.nombre);
    datosRegistro.append('descripcion', this.nuevoProducto.descripcion);
    datosRegistro.append('imagen', this.nuevoProducto.imagenBase64);
    datosRegistro.append('precio', this.nuevoProducto.precio.toString());
    datosRegistro.append('existencia', this.nuevoProducto.existencia.toString());

    const url = 'http://localhost/punto_de_venta/config/crearProducto.php';
    this.http.post(url, datosRegistro).subscribe({
      next: () => {
        console.log('Producto creado exitosamente');
        this.obtenerProductos(); // Actualizar la lista de productos
        this.nuevoProducto = new RegistroProducto(); // Limpiar los campos del formulario
      },
      error: (error) => {
        console.log('Error al crear el producto:', error);
      }
    });
  }
  
  getBase64(event: any) {    
    console.log(event);
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      me.nuevoProducto.imagenBase64 = reader.result != null ? reader.result.toString() : '';
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
}
