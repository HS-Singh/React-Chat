const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');
const app = express();
const { addUser, getUser, allUsers } = require('./users');

const server = http.createServer(app);
const io = socketio(server);


app.use(cors());

io.on('connection', (socket) => {

	socket.on('join', ({user, room}) => {

		if(user!='' && room!='')
		{
		console.log('user connected '+user + room+' '+socket.id);

		console.log(addUser({id: socket.id, name:user, room}));
		socket.join(room);
	}

	});


	socket.on('send', (message) =>{
		console.log('sent');

		const user = getUser(socket.id);
		console.log(user , message);
		console.log(user.room);
		io.in(user.room).emit('mssg', {user, message });






	});









});

server.listen( 5000, ()=> console.log('Server has started on 127.0.0.1:5000'));