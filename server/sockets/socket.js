const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a la app, Disfruten '
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    client.on('enviarMensaje', (mensaje) => {

        console.log(mensaje);

        client.broadcast.emit('enviarMensaje', mensaje);
        /*  if (mensaje.usuario) {
             callback({
                 resp: 'todo bien'
             });
         } else {
             callback({
                 resp: 'todo bien malllll!!!!!!!'
             });
         } */
    })
})