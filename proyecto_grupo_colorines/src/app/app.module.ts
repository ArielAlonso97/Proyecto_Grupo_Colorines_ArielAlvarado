import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BotonIniciarComponent } from './componentes/boton-iniciar/boton-iniciar.component';
import { BotonRegistroComponent } from './componentes/boton-registro/boton-registro.component';
import { FormaUsuarioComponent } from './componentes/forma-usuario/forma-usuario.component';
import { RegistroComponent } from './rutas/registro/registro.component';
import { LoginComponent } from './rutas/login/login.component';
import { TiendaComponent } from './rutas/tienda/tienda.component';
import { CatalogoUsuariosComponent } from './rutas/catalogo-usuarios/catalogo-usuarios.component';
import { RouterModule, Routes } from '@angular/router';
import { BotonRegresarComponent } from './rutas/registro/componentes-registro/boton-regresar/boton-regresar.component';
import { BotonRegistrarComponent } from './rutas/registro/componentes-registro/boton-registrar/boton-registrar.component';
import { FormularioComponent } from './rutas/registro/componentes-registro/formulario/formulario.component';
import { ProductoComponent } from './rutas/tienda/componentes-tienda/producto/producto.component';
import { ProductosComponent } from './rutas/tienda/catalogos-productos/productos/productos.component';
import { CarritoComponent } from './rutas/tienda/componentes-tienda/carrito/carrito/carrito.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroup, FormControl } from '@angular/forms';
import { CatalogoProductosComponent } from './rutas/catalogo-productos/catalogo-productos.component';
import { CreacionProductosComponent } from './rutas/catalogo-productos/componentes-catalogos-productos/creacion-productos/creacion-productos.component';
import { EdicionProductosComponent } from './rutas/catalogo-productos/componentes-catalogos-productos/edicion-productos/edicion-productos.component';








const appRoutes : Routes = [
  {path:'',component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'tienda', component:TiendaComponent},
  {path:'Catalogo-productos', component:CatalogoProductosComponent},
  {path:'Catalogo-usuarios', component:CatalogoUsuariosComponent},
  { path: 'edicion-producto/:id', component: EdicionProductosComponent},
  { path:'carrito',component:CarritoComponent}


];
@NgModule({
  declarations: [
    AppComponent,
    BotonIniciarComponent,
    BotonRegistroComponent,
    FormaUsuarioComponent,
    RegistroComponent,
    LoginComponent,
    TiendaComponent,
    CatalogoUsuariosComponent,
    BotonRegresarComponent,
    BotonRegistrarComponent,
    FormularioComponent,
    ProductoComponent,
    ProductosComponent,
    CarritoComponent,
    CatalogoProductosComponent,
    CreacionProductosComponent,
    EdicionProductosComponent,
    
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
