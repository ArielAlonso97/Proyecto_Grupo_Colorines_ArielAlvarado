import { ProductoCarrito } from "./producto-carrito";

export abstract class Carrito {
    static clave: string = "carritoProductos";
    static productos: ProductoCarrito[] = [];

    static agregar(producto: ProductoCarrito) {
        if (!this.existe(producto.id)) {
            this.productos.push(producto);
            this.guardar();
        }
    }

    static quitar(id: number) {
        const indice = this.productos.findIndex(p => p.id === id);
        if (indice != -1) {
            this.productos.splice(indice, 1);
            this.guardar();
        }
    }

    static guardar() {
        localStorage.setItem(this.clave, JSON.stringify(this.productos));
    }

    static obtener() : ProductoCarrito[] {
        const productosCodificados = localStorage.getItem(this.clave);
        if (productosCodificados != '' && productosCodificados != null)
            return JSON.parse(productosCodificados) || [];
        
        return [];
    }

    static existe(id: number) {
        return this.productos.find(producto => producto.id === id);
    }

    static obtenerConteo() {
        return this.productos.length;
    }
}
