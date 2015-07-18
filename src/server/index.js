let express = require('express');
let app = express();
let server = require('http').createServer(app);
let port = process.env.PORT || 8000;
let home = require("./home");

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

// Routing
app.use('/build', express.static('build'));

app.get("*", function(req, res, next) {
    res.send(home);
});
