var socket = io.connect('ws://localhost:8080');

var sendChat = document.getElementById("message-send");
var message = document.getElementById("message-box");

var username, role = "";

function sendMessage() {
	if(message.value != "") {
		socket.emit('chat', [username, role, message.value]);
	}
}

$("#character-form").submit(function (evt) {
	evt.preventDefault();
	username = $("#username-box").val();
	role = $("#role-box").val();

	$("#username-box").val("");
	$("#role-box").val("");
});

$("#chat-form").submit(function (evt) {
	evt.preventDefault();
	sendMessage();
});

socket.on('chat', function(data) {
	$("#chat-window").append('<p class="message">'+data+'</p>');
	$("#message-box").val("");
	$("#chat-window").scrollTop($("#chat-window")[0].scrollHeight);
	console.log(data);
});