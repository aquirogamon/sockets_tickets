let socket = io();
let lblTicket1 = $('#lblTicket1');
let lblTicket2 = $('#lblTicket2');
let lblTicket3 = $('#lblTicket3');
let lblTicket4 = $('#lblTicket4');

let lblEscritorio1 = $('#lblEscritorio1');
let lblEscritorio2 = $('#lblEscritorio2');
let lblEscritorio3 = $('#lblEscritorio3');
let lblEscritorio4 = $('#lblEscritorio4');

let lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
let lblEscritorios = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4];


//SOCKET.ON escuchar informacion
socket.on('connect', function() {
    console.log('Connectado al Servidor');
});
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el Servidor');
});

socket.on('estadoActual', function(data) {
    actualizaHTML(data.ultimosCuatro);
});

socket.on('ultimosCuatro', function(data) {
    let audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizaHTML(data.ultimosCuatro);
})

function actualizaHTML(ultimosCuatro) {
    for (var i = 0; i <= ultimosCuatro.length - 1; i++) {
        lblTickets[i].text(`Ticket: ${ultimosCuatro[i].numero}`);
        lblEscritorios[i].text(`Escritorio: ${ultimosCuatro[i].escritorio}`);
    }
}