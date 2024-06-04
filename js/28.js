// CLASES
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatear_producto() {
        return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }
    obtener_precio(){
        console.log(this.precio);
    }
};


const producto1 = new Producto('Monitor curvo de 49"', 800); 
const producto2 = new Producto('Laptop', 500);


// HERENCIA
class Libro extends Producto{
    constructor(nombre, precio, isbn) {
        super(nombre,precio);
        this.isbn = isbn
    }
    formatear_producto() {
        return `${super.formatear_producto()} y su ISBN es ${this.isbn}`;
    }
    obtener_precio() {
        super.obtener_precio();
        console.log('y si hay en existencia')
    }
}

const libro = new Libro('JavaScrip La Revolución', 120, '2648416231255511')


console.log(producto1);
console.log(producto2);
console.log(producto1.formatear_producto());
console.log(libro.formatear_producto());
console.log(libro.obtener_precio());