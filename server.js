var express = require('express'),
  OpenedCaptions = require('opened-captions');

// Make the server
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// Serve static content from "public" directory
app.use(express.static(__dirname + '/public'));

server.listen(80);

var oc = new OpenedCaptions({
  io: io
});

oc.addStream('network', {
  host: 'localhost',
  port: 9500,
  description: "CSPAN"
});
