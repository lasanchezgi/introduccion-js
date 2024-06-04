// OBJETO 1
const producto = {
    nombre_producto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

// OBJETO 2
const medidas = {
    peso: '1 kg',
    medida: '1m'
}

const nuevo_producto = {...producto, ...medidas}

console.log(producto);
console.log(medidas);
console.log(nuevo_producto);