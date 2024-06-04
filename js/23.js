// SWITCH
const metodo_pago = 'Targeta';
switch(metodo_pago){
    case 'Targeta':
        console.log('Pagaste con targeta');
        break;
    case 'Cheque':
        console.log('Primero se revisaran los fondos');
        break;
    case 'Efectivo':
        console.log('Pagaste con efectivo');
        break;
    default:
        console.log('Aun no has pagado. Pobre.')
        break;
}