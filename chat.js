var socket = io.connect('ws://localhost:8080');

var sendChat = document.getElementById("message-send");
var message = document.getElementById("message-box");

function sendMessage() {
	alert("sending chat: " + message.value);
	socket.emit('chat', message.value);
}

sendChat.addEventListener('click', function () {
	sendMessage();
})

$("#chat-form").submit(function (evt) {
	evt.preventDefault();
	sendMessage();
})

socket.on('chat', function(data) {
	$("#chat-window").append('<p>'+data+'</p>');
	console.log(data);
})