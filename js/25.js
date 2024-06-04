const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Televisor 20 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},

];

// FOREACH --> Se utiliza para arreglos (listas). Se ejecuta según la extensión del arreglo. Es un metodo.
// Solo para mostar el resultado en la consola  
const arreglo1 = carrito.forEach(producto => console.log(producto.nombre)); //INDEFINIDO 

// MAP --> Para crear un nuevo arreglo
const arreglo2 = carrito.map(producto => console.log(producto.nombre));
const arreglo3 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);
console.log(arreglo3);