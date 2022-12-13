// Notification API

const boton = document.querySelector('#boton');


boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`) )
})

let acu = 0;

boton.addEventListener('click', () => {
    if(Notification.permission == 'granted' && acu < 10) {   //Si el usuario acepta las notificaciones
        new Notification('Deja ese BOTON!!', {  //new 
            icon: 'img/JS_logo.png', //icon esta registrado en NotificationAPI, es una forma de agregar una imagen/ logotipo
            body: 'Estas abusando...',      
        });
        acu++;  
    }
    if(acu >= 10) {
        console.log(`Boe... Ya van ${acu} veces... podrias ir dejando el botoncito`);
        acu++;
    }
})




// El codigo anterior no funcionaba al presionar el boton, cree un nuevo addEvent y le meti un if.
// No pude concatenar ambas instrucciones dentro del then