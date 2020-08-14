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
var user_pass = [] ;
function signup()
{
    //Storing Data
    var userpass = [(document.getElementById("username").value),
    (document.getElementById("pass").value)];
    localStorage.setItem(user_pass.push(userpass),userpass);
    document.getElementById("signup_msg").innerHTML = "Your are Sussesfully Sign UP";
}

function login()
{
    var x = document.getElementById("user").value;
    var y = document.getElementById("password").value;
    a=[];
    a.push(x);
    a.push(y);
    console.log(typeof(a[0]));
    for (i=0;(i<user_pass.length);i++)
    {
        if(a[0] == user_pass[i][0] && a[1] == user_pass[i][1]  )
        {
            document.getElementById("loginsu").innerHTML = "Your are Successfully Login";
            break;

        }
        else{
            document.getElementById("loginsu").innerHTML = "Enter the correct username and password";
        }

    }
    
    
}
