// OBJETOS 
const nombre_producto = 'Monitor 20 pulgadas';
const precio = 300;
const disponible = true;

// Objeto --> Diccionario
const producto = {
    nombre_producto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

//Sintaxis de punto
console.log(producto.precio);
// Otra sintaxis 
console.log(producto['disponible']);

// Agregando nuevas propiedades
producto.imagen = 'imagen.jpg';

// Elmininando propiedades
delete producto.disponible;

console.log(producto);