const express = require('express')
const socket = require('socket.io')

const app = express()
const port = 8080

var server = app.listen(port, function() {
	console.log(`Listening on port ${port}`)
})

var io = socket(server)

io.on('connection', function(socket) {
	console.log('Connection Established')

	socket.on('chat', function(data) {
		console.log(data[0] + ": " + data[1])
		sendToAll(data)
	})

	socket.on('disconnect', function() {
		console.log('Client Has Disconnected')
	})
})

function sendToAll(data) {
	io.emit('chat', data[0] + ": " + data[1])
}