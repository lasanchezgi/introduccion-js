// document: Se refiere a todo el html en nuestro sitio web
const boton = document.querySelector('#boton');
// Evento 
boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log('El resultado es: ', resultado))
});

if (Notification.permission == 'granted') {
    new Notification('Esta es una notificación', {
        icon: 'img/ccj.png',
        body: 'Codigo con Juan, los mejores tutoriales'
    })
}