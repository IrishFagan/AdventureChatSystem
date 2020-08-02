var socket = io.connect('ws://localhost:8080')

var sendChat = document.getElementById("message-send")
var message = document.getElementById("message-box")

sendChat.addEventListener('click', function() {
	alert("sending chat: " + message.value)
	socket.emit('chat', message.value)
})

socket.on('chat', function(data) {
	console.log(data)
})