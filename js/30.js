// PROMISE
const usuario_autenticado = new Promise ((resolve, reject) => {
    const auth = true;
    if(auth){
        resolve('Usuario autenticado'); //Se cumple el promise
    } else {
        reject('NO se pudo iniciar sesión'); //NO se cumple el promise
    }
});

usuario_autenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

// Tipos de valores en PROMISES
// Pending: NO se ha cumplido, pero tampoco se ha rechazado
// Fulfilled: Se cumplio
// Rejected: Se rechazo, o no se pudo cumplir
