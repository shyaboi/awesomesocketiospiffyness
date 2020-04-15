const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const http = require('http').createServer()
const io = require('socket.io')(http);


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }


io.on('connection', (socket) => {
    socket.on('message', (message) => {
        socket.broadcast.emit('message', message)
    })
})

http.listen(port)
console.log("running on port:" + port)


