async function obtener_empleados () {
    const archivo = 'IntroduccionJS/js/empleados.json';
    //fetch(archivo)
        //.then(resultado => {
            //return resultado.json();
        //})
        //.then (datos => {
            //console.log(datos.empleados);
            //const {empleados} = datos;
            //console.log(empleados);
            //empleados.forEach(empleado => {
                //console.log(empleado);
                //console.log(empleado.id);
                //console.log(empleado.nombre);
                //console.log(empleado.puesto);

                //document.querySelector('.contenido').textContent += empleado.nombre;
            //});
        //})
        const resultado = await fetch(archivo);
        const datos = await resultado.json();
        console.log(datos);
}
obtener_empleados();