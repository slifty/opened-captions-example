var express = require('express'),
  OpenedCaptions = require('./opened-captions');

// Make the server
var app = express();

// Serve static content from "public" directory
app.use(express.static('public'));

// All set, start listening!
var port = 3000;
app.listen(port);

var io = require('socket.io')(app);
var oc = new OpenedCaptions({
  io: io
});
