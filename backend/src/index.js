const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require('./Controller/usersController');

const router = require('./router.js');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

io.on('connection', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    console.log(user);

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit('message', {
      user: 'Swiftfox Team',
      text: `Hello ${user.name}, welcome to the chat!`,
    });
    socket.broadcast.to(user.room).emit('message', {
      user: 'Swiftfox Team',
      text: `${user.name} has joined!`,
    });

    io.to(user.room).emit('roomData', {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', {
        user: 'Swiftfox Team',
        text: `${user.name} has left.`,
      });
      io.to(user.room).emit('roomData', {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

server.listen(3334);
