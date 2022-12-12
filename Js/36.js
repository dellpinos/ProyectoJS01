// Notification API

const boton = document.querySelector ('#boton');

boton.addEventListener('click', function() {
    Notification.requestPermission()
    .then(resultado => console.log('El resultado es: ', resultado))
}); 

if(Notification.permission == 'granted') {   //Si el usuario acepta las notificaciones
    new Notification('Esta es una notificacion', {  //new 
        icon: 'img/JS_logo.png', //icon esta registrado en NotificationAPI, es una forma de agregar una imagen/ logotipo
        body: 'Este es un texto de ejemplo que no es importante'      
    })
}