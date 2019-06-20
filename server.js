const PORT = process.env.PORT || 8800;
const IP = process.env.IP || '0.0.0.0';
const express = require('express');
const app = express();
const socket = require('socket.io')
const server = app.listen(PORT, IP, () => {
  console.log('Server started!')
})
const io = socket(server)
io.sockets.on('connection', newConnection)

function newConnection(socket) {
	console.log('Connection : ' + socket.id)
	socket.on('textareaChanged', changeTextarea)
	function changeTextarea(data) {
		socket.broadcast.emit('textareaChanged', data)
		console.log(data)
	}
} 

app.get("/", function (req,res) {
	res.sendFile('index.html', {root: __dirname + '/views'})
})
app.get("*", function (req, res) {
  res.send("404 URL NOT FOUND");
}); 