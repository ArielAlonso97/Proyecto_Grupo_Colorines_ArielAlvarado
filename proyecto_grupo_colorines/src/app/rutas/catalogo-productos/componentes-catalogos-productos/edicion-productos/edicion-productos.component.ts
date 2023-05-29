import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RegistroProducto } from 'src/app/models/registro-producto';

@Component({
  selector: 'app-edicion-productos',
  templateUrl: './edicion-productos.component.html',
  styleUrls: ['./edicion-productos.component.css']
})
export class EdicionProductosComponent implements OnInit, OnDestroy {
  producto: RegistroProducto = new RegistroProducto();
  subscription: Subscription;
  id: number;

  constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router) {}

  cancelar() {
  this.router.navigate(['/Catalogo-productos']); // Ruta relativa sin la URL completa
}


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    const url = 'http://localhost/punto_de_venta/config/consultaProductoPorId.php?id=' + this.id;
    this.subscription = this.http.get<RegistroProducto>(url).subscribe({
      next: (response) => {
        this.producto = response;
        console.log(this.producto);
        
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

  modificarProducto() {
    const datosRegistro = new FormData();
    datosRegistro.append('id', this.producto.id.toString());
    datosRegistro.append('nombre', this.producto.nombre);
    datosRegistro.append('descripcion', this.producto.descripcion);
    datosRegistro.append('imagen', this.producto.imagenBase64 || '');
    datosRegistro.append('precio', this.producto.precio.toString());
    datosRegistro.append('existencia', this.producto.existencia.toString());

    const url = 'http://localhost/punto_de_venta/config/actualizarProducto.php';
    this.http.post(url, datosRegistro).subscribe({
      next: () => {
        console.log('Producto editado exitosamente');
        this.producto = new RegistroProducto(); // Limpiar los campos del formulario
      },
      error: (error) => {
        console.log('Error al editar el producto:', error);
      }
    });
  }
  
  
  
  getBase64(event: any, id: number) {
    console.log(event);
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.producto.imagenBase64 = reader.result != null ? reader.result.toString() : '';
      console.log(reader.result);
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }
}