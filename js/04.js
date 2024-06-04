// TIPOS DE VARAIBLES 
// String | Cadenas de texto
const producto = 'Monitor de 20 pulgadas'; // Es el más común es esta forma
const producto1 = 'Monitor de 20"';
const producto2 = String('Monitor de 30 pulgadas'); // No es tan comun
const producto3 = new String('Monitor de 50 pulgadas'); // No es tan comun
const producto4 = 'Monitor HD'

console.log(producto)
console.log(producto1.length) // Es una propiedad para contar la extensión del texto 
console.log(producto2)
console.log(producto3)
console.log(producto4)

// Para comprobar si una palabra existe en una cadena de texto 
const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo'
console.log(tweet.indexOf('JavaScript')) // Nos indica la posición en la que se encuentra (#'s >= 0)
console.log(tweet.indexOf('Python')) //-1 Nos indica que no fue encontrada en la cadena de texto 

// Otra manera de comprobar si un palabra existe en una cadena de texto 
console.log(tweet.includes('JavaScript')) // Nos indica que esta con True
console.log(tweet.includes('Python')) // Nos indica que NO esta con False 