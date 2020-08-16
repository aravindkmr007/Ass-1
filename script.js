function color1()
{
    var x= Math.round(Math.random()*100);
    var y= Math.round(Math.random()*100);
    var z= Math.round(Math.random()*100);
    var display = document.getElementById("background");
    display.style.backgroundColor = "rgb(" + x + ","+ y + ","+z+")";    
}
function colorchange()
{
    var color =  document.getElementById("table");
    if (color.style.display == "none" || color.style.display == "" )
    {
        color.style.display = "block";
    }
    else
    {
        color.style.display = "none";  
    }   
}

function color()
{
    var x= document.getElementById("red").value;
    var y= document.getElementById("green").value;
    var z= document.getElementById("blue").value;
    var o = document.getElementById("Opacity").value; 
    var display = document.getElementById("background");
    display.style.backgroundColor = "rgba(" + x + ","+ y + ","+z+","+ o +")";    
}
function changeBackground(){
    var file = document.getElementById("image").files[0];
    var imagefile = file.type;
    var match= ["image/jpeg","image/png","image/jpg"];
          if(!((imagefile==match[0]) || (imagefile==match[1]) || (imagefile==match[2])))
          {
                alert("Invalid File Extension");
          }
          else{
                var reader = new FileReader();
                reader.onload = imageIsLoaded;
                reader.readAsDataURL(document.getElementById("image").files[0]);
          }
    function imageIsLoaded(e) {
          $('body').css({ 'background-image': "url(" + e.target.result + ")" ,
                            'background-size' : 'cover' });
   
          }     
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
            window.location = "welcome.html";

            break;

        }
        else if (a[0] == user_pass[i][0] || a[1] == user_pass[i][1]  )
        {
            document.getElementById("loginsu").innerHTML = "Enter the correct username and password";
            break;
        }
        else (a[0] != user_pass[i][0] || a[1] != user_pass[i][1]  )
        {
            document.getElementById("loginsu").innerHTML = "You want to Signup";
        }

    } 
}
