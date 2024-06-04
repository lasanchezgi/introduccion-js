// Async / Await
function descargar_nuevos_clientes() {
    return new Promise (resolve => {
        console.log('Descargando clientes... Espere.')
        setTimeout( function (){
            resolve('Los clientes fueron descargados')
        }, 5000)

    });
}

function descargar_ultimos_pedidos() {
    return new Promise (resolve => {
        console.log('Descargando pedidos... Espere.')
        setTimeout( function (){
            resolve('Los pedidos fueron descargados')
        }, 3000)

    });
}

//setTimeout( function (){
    //console.log('Set timeout...')
//}, 3000) //3 Segundos

//setInterval(function(){
    //console.log('Another set timeout...')
//}, 5000) // 5 segundos

async function app() {
    try {
        //const clientes = await descargar_nuevos_clientes();
        //const pedidos = await descargar_ultimos_pedidos();
        //console.log(clientes);
        //console.log(pedidos)
    const resultado = await Promise.all([descargar_nuevos_clientes(), descargar_ultimos_pedidos()]);
    console.log(resultado[0]);
    console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}
app();
//console.log('Este código NO se bloquea');