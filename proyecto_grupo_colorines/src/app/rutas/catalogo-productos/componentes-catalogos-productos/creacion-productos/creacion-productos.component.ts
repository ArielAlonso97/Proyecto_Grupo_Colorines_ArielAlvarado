import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RegistroProducto } from 'src/app/models/registro-producto';


@Component({
  selector: 'app-creacion-productos',
  templateUrl: './creacion-productos.component.html',
  styleUrls: ['./creacion-productos.component.css']
})
export class CreacionProductosComponent implements OnInit {
  productos: Producto[] = [];
  nuevoProducto: RegistroProducto = new RegistroProducto(); // Nuevo producto a crear
  private productosSubscription: Subscription | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerProductos();
  }

  ngOnDestroy() {
    if (this.productosSubscription) {
      this.productosSubscription.unsubscribe();
    }
  }

  obtenerProductos() {
    const url = 'http://localhost/punto_de_venta/config/consultaProductos.php';
    this.productosSubscription = this.http.get<Producto[]>(url).subscribe({
      next: (response) => {
        this.productos = response;
      },
      error: (error) => {
        console.log('Error al obtener los productos:', error);
      }
    });
  }
  
  crearProducto() {
    console.log(this.nuevoProducto);

    const datosRegistro = new FormData();
    
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

  eliminarProducto(id: number) {
    const url = 'http://localhost/punto_de_venta/config/eliminarProducto.php';
    this.http.delete(`${url}?id=${id}`).subscribe({
      next: () => {
        console.log('Producto eliminado exitosamente');
        this.obtenerProductos(); // Actualizar la lista de productos
      },
      error: (error) => {
        console.log('Error al eliminar el producto:', error);
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