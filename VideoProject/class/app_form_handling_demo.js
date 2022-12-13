const express = require("express");

// Module to handle sessions in node.js
// Node: must install using: npm install express-session
const session = require('express-session');
const app = express();
// Specify what template engine to use.  PUG in our case
// PUG templates shoudl be stored in the subfolder called 'Views' in this exmaple.
app.set('views','../Views');
app.set('view engine','pug');

db_conn = __dirname + "\\data\\db_demo.json";

// define a schema (i.e. a JSON object) for the database.
// In this examle, we have a database model to store users, and books

db_schema = {
    users : []
}

// Require the database module and invoke the loadDatabase method.
// Note: Store the connection in a global variable db makes the `db` object
// accessible from all the modules of our application

global.db = require("../fsdb")(db_conn,db_schema);
// Register Middleware to process header information and form data.
app.use(express.json());
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// Specify GET route to handle showing the form.
app.get('/login', (req,res)=>{
    model_view = {
        action_url : '/login',
    }
    res.render('login.pug',);
})


app.get('/dash', (req,res)=>{
    res.render('dash.pug',);
})

// Specify the POST route to handle the form submission.
// Notice that the route pattern is the same as the GET request.
app.post('/login',(req,res)=>{

    // Because we register the middleware express.json() and express.urlencoded()
    // req.body now stores all variables provided in the form.
    // Notive: username and password are the names of the form fields.
    const {username, password} = req.body

    // Typically, here you would process the data, i.e. verify user credentials.
    // ....

    res.send(`Thank you for logging in ${username} your password is ${password}`);



});




// Register the 'session' middleware. The middleware will append
// the session to the req object of every route (i.e. req.session)
app.use(session({
    secret: 'SomeSecretCode##LoadFromEnviromentVariable',
    saveUninitialized:true,
    resave:false,
    cookie: { maxAge: 60000 }})
)


// REGISTERS NEW USER TO DATABASE
app.get('/add/:newuser/:newpass', (req,res) => {
    // another way, to get the URL params.
    // you can use req.params['bookid'] and req.params['booktitle'] instead
    const { newuser, newpass } = req.params;

    new_user = {
        newUser : newuser,
        newPass : newpass
    }

    console.log(JSON.stringify(db.model.users[0]))
    console.log(JSON.stringify(new_user));

    for (var i=0; i<db.model.users.length; i++) { //iterate through each object in an array
        if (JSON.stringify(db.model.users[i]) === JSON.stringify(new_user) ) {
            console.log("EQUALS");
        }
    }

    db.model.users.push(new_user)  // update in-memory dictonary
    db.update(); // store on file stytem.
    res.send("New user has been added to the database");
});

// User need to authenticate.
// Typically user credentials should be passed through a secure POST request
app.get('/login/:user/:passcode', (req,res) => {
    const { user, passcode} = req.params; // deconstruct dictionary

    checkUser = {
        newUser : user,
        newPass : passcode
    }

    for (var i=0; i<db.model.users.length; i++) { //iterate through each object in an array
        if (JSON.stringify(db.model.users[i]) === JSON.stringify(checkUser) ) {
            console.log("EQUALS");
            req.session.userID = user;
            req.session.isAuthenticated = true;
            res.send(`Hi ${req.session.userID}, I will remember you`);
        }
    }
});

// Logout
app.get('/logout', (req,res) => {
    req.session.destroy((err) => {
        if (err){
            console.log(err);
            res.send(err)
        } else {
            res.send("You are logged out!");
        }
    });
});

// Protected route - This is just one way to protect the route.
// A better way, is to use a middleware to restrict access.
app.get('/private', (req,res)=>{
    // Before showing the content, check is user is authenticated
    // and restrict access if not logged in.
    if (!req.session.isAuthenticated) {
        res.send("I do not know who you are? ");
        return;
    }
    // User is logged in, so show the private content.
    res.send(`Hi ${req.session.userID}, You can see the private content`);
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
