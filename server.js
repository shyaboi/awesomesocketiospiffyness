const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// WARNING: app.listen(80) will NOT work here!

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    socket.on('message', (message) => {
        socket.broadcast.emit('message', message)
    })
})
console.log("running on port:" + server)
server.listen(80);