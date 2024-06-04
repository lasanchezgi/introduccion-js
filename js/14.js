// ARREGLOS - ARRAYS 
// Es como una lista de Python
const numeros = [10,20,30,40,50];
// Para verlo mejor
console.table(numeros);

// Otra manera de crear los arreglos
const meses = new Array('Septiembre', 'Octubre', 'Noviembre', 'Diciembre');
console.table(meses);

// Se pueden mezclar diferentes elementos en los arreglos
//const arreglos = ['Hola', 123, true, null, {nombre: 'Laura', apellido: 'Sánchez'}, [5,5,5]];
//console.table(arreglos);

// Para acceder los valores de un arreglo 
//console.log(numeros[4]);
//console.log(arreglos[5])

// Extensión de un arreglo 
//console.log(numeros.length);
//console.log(meses.length);
//console.log(arreglos.length);

// Para recorrer los arreglos
//numeros.forEach( function(i){
//    console.log(i);
//});

//meses.forEach( function(i){
//    console.log(i);
//}); 

// Para agregar nuevos datos
numeros[5] = 60; // Esta forma no es muy comun porque se debe saber con exactitud la longitud del arreglo 
// numero[0] = 80 modifica la posicion actual

// Para agregarlo al final, sin saber concretamente la longitud del arreglo
numeros.push(80);
numeros.push(100);
numeros.push(120,140,160); //Para agregar varios al final

// Para agregar al inicio del arreglo
numeros.unshift(-1,0,5);

// Para eleminar 
// Elimina el ultimo elemento
meses.pop();
// Elimina el primer elemento
meses.shift();
// Elimina varios
// Posicion, Cantidad de entradas que quieren eliminar a partir de allí
meses.splice(2, 1);

console.table(numeros);
console.table(meses);

// La nueva tendencia es no modificar los arreglos originales, sino crear nuevos arreglos con lo nuevos elementos
// REST OPERATOR O SPREAD OPERATOR 
const nuevo_arreglo = [...meses, 'junio']; // Esto es un equivalente del push
console.log(nuevo_arreglo);
const nuevo_arreglo1 = ['junio', ...meses]; // Esto es un equivalente del unshift
console.log(nuevo_arreglo);
