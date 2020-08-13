function color1()
{
    var x= Math.round(Math.random()*100);
    var y= Math.round(Math.random()*100);
    var z= Math.round(Math.random()*100);
    var display = document.getElementById("background");
    display.style.backgroundColor = "rgb(" + x + ","+ y + ","+z+")";    
}

function color()
{
    var x= document.getElementById("red").value;
    var y= document.getElementById("green").value;
    var z= document.getElementById("blue").value;
    var display = document.getElementById("background");
    display.style.backgroundColor = "rgb(" + x + ","+ y + ","+z+")";    
}
//login form

function SignIn()
{
    var z = document.getElementById("SignIn");
    var y = document.getElementById("Signup");
    z.style.display = "grid";
    y.style.display = "none";

}
function SignUp()
{
    var y = document.getElementById("Signup");
    var z = document.getElementById("SignIn");
    z.style.display = "none";
    y.style.display = "grid";   
}
function signup()
{
    //Storing Data
    var username = {username: document.getElementById("username").value};
    var password = { password : document.getElementById("pass").value};
    var user = JSON.stringify(username.username);
    var pass = JSON.stringify(password.password);
    localStorage.setItem("username",user);
    localStorage.setItem("password",pass);
    console.log(user + " " + pass);
}
function login()
{
    var x = document.getElementById("user").value;
    var y = document.getElementById("password").value;
    var username = JSON.parse(localStorage.getItem("username"));
    var password = JSON.parse(localStorage.getItem("password"));
    if(x == username && y == password )
    {
        document.getElementById("loginsu").innerHTML = "Your are Successfully Login";

    }
    else{
        document.getElementById("loginsu").innerHTML = "Enter the correct username and password";
    }
}
