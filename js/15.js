// ARRAY METHODS
const meses = new Array('Septiembre', 'Octubre', 'Noviembre', 'Diciembre', 'Enero');

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

// forEach
meses.forEach(function(i){
    console.log(i);
});

// Condicional
meses.forEach(function(i){
    if(i == 'Enero'){
        console.log('Enero si existe');
    }
});

// Otra forma de comprobar si un elemento existe en un arreglo/lista
const resultado = meses.includes('Septiembre');
console.log(resultado); //Funciona bien en arreglos planos

// Para comprobar si un elemento existe en un objeto/diccionario
const resultado1 = carrito.some(function(producto){
    return producto['nombre'] === 'Celular PRO'
});
console.log(resultado1);

// REDUCE
// nombre_array.nombre_funcion
// A function se le da el total y el producto actual
const resultado2 = carrito.reduce(function(total, producto){
    return total + producto['precio']
},0); // Ese cero se refiere al valor inicial 
console.log(resultado2);

// FILTER
const resultado3 = carrito.filter(function(producto){
    return producto['precio'] > 400
});
console.log(resultado3);

const resultado4 = carrito.filter(function(producto){
    return producto['precio'] < 400
});
console.log(resultado4);

const resultado5 = carrito.filter(function(producto){
    return producto['nombre'] == 'Celular' //Solo a los celulares
});
console.log(resultado5);

const resultado6 = carrito.filter(function(producto){
    return producto['nombre'] !== 'Celular' //Todos los que NO son celulares
});
console.log(resultado6);