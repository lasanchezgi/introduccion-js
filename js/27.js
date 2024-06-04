// PROGRAMACIÓN ORIENTADA A OBJETOS {POO}
// Object literal 
const producto = {
    nombre: 'Tablet',
    precio: 500
}
// Object constructor, es más dinámico
// Clase: Permite almacenar la forma que va tener un objeto en especifico
function Producto (nombre, precio) {  //Parametros
    this.nombre = nombre;
    this.precio = precio;
}

function Cliente (nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

//EL PROTOTYPE--> Permite crear funciones que SOLO se utilizan en un objeto en especifico
Producto.prototype.formatear_producto = function(){
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`
}

Cliente.prototype.formatear_cliente = function(){
    return `El cliente ${this.nombre}  ${this.apellido}`
}

const producto2 = new Producto('Monitor curvo de 49"', 800); //Argumentos
const producto3 = new Producto('Laptop', 500);
const cliente = new Cliente('Laura', 'Sánchez')
console.log(producto2);
console.log(producto3);
console.log(cliente);


function formatear_producto(producto){
    return `El producto ${producto[nombre]} tiene un precio de: $ ${producto[precio]}}`
}
console.log(formatear_producto(producto2.formatear_producto()));
console.log(formatear_producto(producto3.formatear_producto()));
console.log(formatear_cliente(cliente.formatear_cliente()));



