let socket = io();
let label = $('#lblNuevoTicket');

//SOCKET.ON escuchar informacion
socket.on('connect', function() {
    console.log('Connectado al Servidor');
});
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el Servidor');
});
socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(resp) {
        label.text(resp);
    });
});