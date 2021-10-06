const express = require('express');
const path = require('path');


//para los socket se necesita crear un sevidor aparte  01
const socketIO = require('socket.io');
const http = require('https');
const app = express();
let server = http.createServer(app); //colocamos la configuracion de espress en el servidor http 02

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//io = comunicacion con el backend: mantienes del comunicacion 04 
module.exports.io = socketIO(server);
require('./sockets/socket');

//se cambia el app por el server 03
server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
});