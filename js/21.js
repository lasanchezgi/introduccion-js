// ARROW FUNCTIONS
//Expresión de la función 
const sumar = function(num1, num2) {
    console.log(num1 + num2);
};
sumar(5,10);

// se elimina la expresion 'function' y se pone '=>'
const sumar2 = (num1, num2) => {
    console.log(num1 + num2);
};
sumar2(5,100);
// En las arrow functions no son necesarios los {}
const sumar3 = (num1,num2) => console.log(num1 + num2);
sumar3(200+300);

// Estructa basica de un arrow funcion
const aprendiendo = (tecnologia) => console.log(`Aprendiendo  ${tecnologia}`)
aprendiendo('JavaScript')

//EJEMPLO
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

// Condicional
meses.forEach(mes => {
    if(mes == 'Enero'){
        console.log('Enero si existe');
    }
});

// Para comprobar si un elemento existe en un objeto/diccionario
const resultado1 = carrito.some(producto => producto['nombre'] === 'Celular PRO');
console.log(resultado1);

// REDUCE
// nombre_array.nombre_funcion
// A function se le da el total y el producto actual
const resultado2 = carrito.reduce((total, producto) => total + producto['precio'],0); // Ese cero se refiere al valor inicial 
console.log(resultado2);

// FILTER
const resultado3 = carrito.filter(producto => producto['precio'] > 400);
console.log(resultado3);

const resultado4 = carrito.filter(producto => producto['precio'] < 400);
console.log(resultado4);

const resultado5 = carrito.filter(producto => producto['nombre'] == 'Celular');
console.log(resultado5);

const resultado6 = carrito.filter(producto => producto['nombre'] !== 'Celular');
console.log(resultado6);