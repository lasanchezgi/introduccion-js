//THIS --> Hace referencia al objeto al cual se esta mandando a llamar
const reservacion = {
    nombre: 'Laura',
    apellido: 'Sánchez',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}