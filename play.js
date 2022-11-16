var express = require('express');
var route_s = require('./square_routes');

var app = express();

app.use('/api', route_s);
app.use('/resource', express.static('./css'));

app.listen(3000, function() {
    console.log("The server is listening on port 3000!")
})