'use strict';
const  express = require('express');
const  debug = require('debug')('main-index');
const  path = require('path');
const  app = express();
const  fs = require('fs');
const  compress = require('compress');
const  json = require('json');

//const  methodOverride = require('methodOverride');
//const  urlencoded = require('urlencoded');
//const server = require('http').createServer(app);
const  http = require('http');

const  httpServer = http.createServer(app);

//const io = require('socket.io')(server);
const io = require('socket.io')(httpServer);


const PORT = 10086;


var  tweet_stream_staus = false;
//var  socket_staus = false ;


httpServer.listen(PORT, function() {
    console.log('HTTP Server is running on:  ', PORT);
});

app.use(express.static(__dirname + '/project'));


var stream;
let  settimeout_id;

function io_socket(socket) {
   
	socket.on('tweets_request',function () {
        
	});
}

io.on('connection', io_socket);

io.on('disconnect',function(){
    stream.stop();
    tweet_stream_staus = false;
    console.log("stream stop !");
	console.log('socket disconnect ;');
});

// START SERVER
//server.listen(80);
//console.log('listening on port', app.get('port'));
