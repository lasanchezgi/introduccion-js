const producto = {
    nombre_producto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

//Forma anterios
const precio_producto = producto['precio'];
const nombre_producto = producto['nombre_producto'];

console.log(precio_producto);
console.log(nombre_producto);

// Otra manera, más actual, DESTRUCTING 
// Extrae el valor y asigna la variable
const {disponible} = producto;
// const {nombre_producto, precio, disponible} = producto; (Para sacar variables de un mismo objeto a la vez)
console.log(disponible);