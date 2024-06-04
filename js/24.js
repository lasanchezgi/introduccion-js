// FOR LOOP
for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i1 = 0; i1 < 10; i1++) {
    if (i1 % 2 === 0) {
        console.log(`El número ${i1} es par`);
    }
    else {
        console.log(`El número ${i1} es impar`);
    }
}

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

for (let i2 = 0; i2 <carrito.length; i2++) {
    console.log(carrito[i2].nombre);
}