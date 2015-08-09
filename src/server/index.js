var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 8000;
var html = require("./html");

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

// Routing
app.use('/build', express.static('build'));

app.get("*", function(req, res) {
    res.send(html);
});
