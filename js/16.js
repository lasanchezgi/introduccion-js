// DECLARACIÓN DE FUNCIÓN 
// Creación
function sumar () {
    console.log(10+10);
};
// Llamando la función
sumar();

//Expresión de la función 
const sumar2 = function() {
    console.log(3+3);
};
// Llamando la función
sumar2();

sumar3(); // En esta funciona
function sumar3 () {
    console.log(25+10);
};
// Se registran todas las funciones y luego se registran los llamados a las funciones 
// La primera etapa se le conoce como CREACIÓN, se registran las funciones y las variables 
// La segunda etapa se le conoce como EJECUCIÓN, se manda a llamar el codigo 
// Por lo tanto no importa mucho el orden 
 
sumar4(); // En esta NO funciona (marca error)
const sumar4 = function() {
    console.log(30+30);
};
// Efectivamente es una función, pero NO esta declarada con la sintaxis de function 
// Se le considera más como una variable, por decirlo asi... 
// Entonces en el primer llamado, no se registro la funcion, porque la toma como una vraiable
// Entonces en el segundo llamado marca el error
// Esta diferencia se debe al HOSTING del JavaScript, eso pasa porque JS se ejecuta en dos vueltas


//IIFE: Son funciones que ellas mismas se mandan a llamar 
// Se utilizan para protejer las variables, que no se mezclen con otro archivo
(function() {
    console.log('Esto es una función')
})(); 

// Esta leyendo una variable de otro archivo
console.log(cliente);
console.log(cuenta_bancaria); // Aparece error, porque la variable esta protegida dentro de la función IIFE en el archivo 16_.js