const express = require('express')
const socket = require('socket.io')

const app = express()
const port = 8080

var server = app.listen(port, function() {
	console.log(`Listening on port ${port}`)
})

var io = socket(server)

io.on('connection', function(socket) {
	console.log("Connection Established")

	socket.on('chat', function(data) {
		console.log(data)
	})
})