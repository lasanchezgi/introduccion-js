function sumar (num1, num2) {
    return num1 + num2;
}
const resultado = sumar(2,3);
console.log(resultado);

// Ejemplo de carrito de compra
// Se define la variable total = 0
let total = 0;
// Se define la función que agrega los precios de los articulos y los suma
function agregar_carrito(precio){
    return total += precio; //+= Es como se hace los incrementos
}
// Se define la función del impuesto sobre el precio final de los articulos
function calcular_impuesto(total){
    return 1.15*total; // El impuesto es del 15%
}
// Se agregan los precios de los diferentes articulos comprados
total = agregar_carrito(200);
total = agregar_carrito(400);
total = agregar_carrito(600);
// Se muestra en pantalla
console.log(total);
// Se define la variable que asume el valor del precio total de los articulos, más el impuesto
const total_a_pagar = calcular_impuesto(total);
// Se muestra en pantalla
console.log(total_a_pagar);
console.log(`El total a pagar con impuestos es de: $${total_a_pagar}`);