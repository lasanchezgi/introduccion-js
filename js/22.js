// ESTRUCTURAS DE CONTROL
const puntaje = 1000;
if (puntaje==1000){
    console.log(`El puntaje es ${puntaje}`);
} else {
    console.log(`El puntaje NO es ${puntaje}`);
}

const puntaje1 = 10000;
if (puntaje1==100){
    console.log(`El puntaje es ${puntaje1}`);
} else {
    console.log(`El puntaje NO es ${puntaje1}`);
}

const puntaje2 = 15000;
if (puntaje2 !==100){
    console.log(`El puntaje es ${puntaje2}`);
} else {
    console.log(`El puntaje NO es ${puntaje2}`);
}

const efectivo = 1000;
const carrito = 800;
if (efectivo > carrito) {
    console.log('El usuario puede pagar');
} else {
    console.log('Fondos insuficientes. Pobre.');
}

const rol = 'ADMINISTRADOR'
if (rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistem');
} else{
    console.log('NO tiene acceso');
}

const rol1 = 'EDITOR'
if (rol1 === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
} else if (rol1 === 'EDITOR') {
    console.log('Acceso a la mitad del sistema');
}else{
    console.log('NO tiene acceso');
}


