// Para que sea muy exigente y solo acepte buenas practicas dentro del script (Corre JS en modo estricto)
'use strict'

// OBJETO
const producto = {
    nombre_producto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

// Para evitar que el objeto se modfique (ni agregar, ni eliminar, ni cambiar valores de los objetos)
Object.freeze(producto);

// Agregando un elemento al objeto 
//producto['imagen'] = 'imagen.jpg';

// Para conocer si un objeto esta freeze
console.log(Object.isFrozen(producto));

// Para evitar que el objeto se modfique (ni agregar, ni eliminar, permite modificar las variables existentes)
Object.seal(producto);
producto['marca'] = 'Sony';
console.log(Object.isSealed(producto));

console.log(producto)
