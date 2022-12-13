let btnLogin = document.getElementById("login");
let btnSignUp = document.getElementById("signup");

let signIn = document.querySelector(".signin");
let signUp = document.querySelector(".signup");


const element = document.getElementById("loginbtn");
element.addEventListener("click", myFunction)

function myFunction() {
    let name = document.getElementById("UserName").value;
    alert(name);
}

btnLogin.onclick = function(){
    signIn.classList.add("active");
    signUp.classList.add("inActive");
}

btnSignUp.onclick = function(){
    signIn.classList.remove("active");
    signUp.classList.remove("inActive");
}


function getUrl() {
    let name = document.getElementById("UserName").value;
    let pass = document.getElementById("UserPassword").value;
    alert(name)
}



function registerUser() {
    let user = document.getElementById("username").value;
    let email = document.getElementById("userEmail").value;
    let password = document.getElementById("userPassword").value;

    var newUser = {
        userName : user,
        userEmail : email,
        userPass: password
    };

    db.model.users.push(newUser);
    db.update(); // store on file stytem.
    res.send("New user" + user + " has been added to the database");
}

function updateGrid() {
    var url = document.getElementById("url").value;
    var div = document.getElementById("dashes");
    var inside = div.innerHTML;

    var newDiv = inside + '<iframe src=\"https://www.youtube.com/embed/' + url +'\"> </iframe>'
    div.innerHTML = newDiv;

    var data = {
        "rajiv":url
    }

    json.innerHTML = JSON.stringify(data)
}



