var express = require('express'),
  OpenedCaptions = require('opened-captions');

// Make the server
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// Serve static content from "public" directory
app.use(express.static(__dirname + '/public'));

server.listen(8080);

var oc = new OpenedCaptions({
  io: io
});

oc.addStream('server', {
  host: 'http://openedcaptions.com',
  port: 80,
  description: "CSPAN"
});