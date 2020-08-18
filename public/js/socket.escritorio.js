let socket = io();
let label = $('small');

let searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

//SOCKET.ON escuchar informacion
socket.on('connect', function() {
    console.log('Connectado al Servidor');
});
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el Servidor');
});

let escritorio = searchParams.get('escritorio');
console.log(escritorio);
$('h1').text(`Escritorio: ${escritorio}`);

$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio }, function(resp) {
        if (resp === 'No hay más tickets') {
            label.text(resp);
            alert(resp);
            return;
        }
        label.text(`Ticket: ${resp.numero}`);
    });
});