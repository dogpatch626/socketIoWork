
const express = require('express');
const app = express(); 
const http = require('http'); 
const server = http.createServer(app); 
const {Server} = require('socket.io'); 
const io = new Server(server); 


app.get('/', (req, res)=>{
    res.sendFile('D:/softwareGuild/socketIoAssign/static/index.html'); 
});

io.on('connection', (socket)=>{
    console.log('a user connected')
    // socket.on('disconnect', ()=>{
    //     console.log('disconnect'); 
    // })
})
// io.on('connection', (socket)=>{
//     socket.on('chat message', (msg)=>{
//         console.log('message ' +msg); 
//     })
// })

io.on('connection', function(socket) {
    socket.on('send-nickname', function(nickname) {
        var users = []
        socket.nickname = nickname;
        users.push(socket.nickname);
        console.log(users);
        //io.emit('send-nickname', nickname)
    });
})
io.on('connection', (socket)=>{
    socket.on('chat message', (msg)=>{
        io.emit('chat message', msg)
      //console.log(msg)
        
    })
})
server.listen(3000, ()=>{
    console.log('listening at 3000')
})

