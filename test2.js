var express = require('express');

//creates an instance of the express server
var app = express();

app.get('/', function(req,res) {
        res.send("<h1> Hello to CUS 1172!!!! </h1>")
    }
);

app.get('/login', function(req,res) {
    res.send("<h1> Please login </h1>");
});

app.get('/mydata', function(req,res) {
    let mydata = {
        name: "Rajiv",
        last_name: "Khan"
    }
    res.json(mydata);

});

app.get('/dashboard/:userID', function(req,res) {
    let current_user = req.params["userID"]

    if(current_user === "001"){
        res.send("Hello 001 user")
    }
    else {
        res.send("Hello Guest User");
    }
});

app.get('/dashboard/:userID/:color',(req,res) => {
    let current_user = req.params["userID"];
    let color = req.params["color"];

    if(current_user === "001"){
        res.send(`<h1 style="color:${color}"> Hello User </h1>`)
    }
    else {
        res.send("Hello Guest User");
    }
})

app.listen(3000, function() {
    console.log("The server is listening on port 3000!");
});