console.log('conetado a js/socket.js');

var socket = io();
//ON: Escuchar 
socket.on('connect', function() {
    console.log('conectado al servidor');
})

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el server');
})

//emit: manda informacion 
socket.emit('enviarMensaje', {
    usuario: 'The boy',
    mensaje: 'HOLA WENDY'
}, function(res) {
    console.log('Server dice: ', res);
})

//recibo del server 
socket.on('enviarMensaje', function(mensaje) {
    console.log('server: ', mensaje);
})