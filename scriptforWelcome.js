//for the welcome page of user
//logout
function logout(){
    window.location = "index.html";
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
    var x= document.getElementById("reds").value;
    var y= document.getElementById("greens").value;
    var z= document.getElementById("blues").value;
    var o = document.getElementById("Opacitys").value; 
    var display = document.getElementById("body");
    display.style.backgroundColor = "rgba(" + x + ","+ y + ","+z+","+ o +")";    
}
//Analog Clock
var element = document.getElementById("clock-canvas");
var graphic = element.getContext("2d");
var radius = element.height / 2;
graphic.translate(radius, radius);
radius = radius * 0.90;
setInterval(startClock, 1000);
function startClock() {
    drawFace(graphic, radius);
    drawNumbers(graphic, radius);
    drawTime(graphic, radius);
}

   
function drawFace(graphic, radius) {
graphic.beginPath();
graphic.arc(0, 0, radius, 0, 2*Math.PI);
graphic.fillStyle = document.getElementById("body").style.backgroundColor;
graphic.fill();
graphic.stroke();
graphic.beginPath();
graphic.arc(0, 0, radius*0.1, 0, 2*Math.PI);
graphic.fillStyle = 'white';
graphic.fill();

}

function drawNumbers(graphic, radius) {
var angle;
var number;
graphic.font = radius*0.15 + "px arial";
graphic.color = "white";
graphic.textBaseline="middle";
graphic.textAlign="center";
for(number = 1; number < 13; number++)
{
    angle = number * Math.PI / 6;
    graphic.rotate(angle);
    graphic.translate(0, -radius*0.85);
    graphic.rotate(-angle);
    graphic.fillText(number.toString(), 0, 0);
    graphic.rotate(angle);
    graphic.translate(0, radius*0.85);
    graphic.rotate(-angle);
}
}

function drawTime(graphic, radius){
    var currentTime = new Date();
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();

    hour=hour%12;
    hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand(graphic, hour, radius*0.5, radius*0.07);

    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(graphic, minute, radius*0.8, radius*0.07);

    second=(second*Math.PI/30);
    drawHand(graphic, second, radius*0.9, radius*0.02);
}
function drawHand(graphic, position, length, width) {
    graphic.beginPath();
    graphic.lineWidth = width;
    graphic.lineCap = "round";
    graphic.moveTo(0,0);
    graphic.rotate(position);
    graphic.lineTo(0, -length);
    graphic.stroke();
    graphic.rotate(-position);
}
var colour = document.getElementById("body").style.backgroundColor;
//Digital Cock

function digital_clock()
{
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    var day = currentTime.getDay();
    days = ["Sun" , "Mon" , "Tue" , "Wed" ,"Thur" , "Fri" , "Sat" ]
    if (h>12)
    {
        h =h-12;
    }
    h = (h<10)? ("0"+ h):h;
    m = (m<10)? ("0"+ m):m;
    s = (s<10)? ("0"+ s):s;
    
    document.getElementById("hour").innerHTML = h;
    document.getElementById("minute").innerHTML = m;
    document.getElementById("Second").innerHTML = s;
    document.getElementById("Day").innerHTML = days[day];
    var back=document.getElementById("Digi_Clock").getElementsByClassName("card-body"); 
    for(var i=0 ; i< back.length;i++)
    {
    back[i].style.backgroundColor=document.getElementById("body").style.backgroundColor ;
    }
    setTimeout(digital_clock,1000);
}
digital_clock();
function text_Center()
{
    var text = document.getElementById("text");
    text.style.textAlign = "center";
}
function text_justify()
{
    var text = document.getElementById("text");
    text.style.textAlign = "justify";
}
function text_left()
{
    var text = document.getElementById("text");
    text.style.textAlign = "left";
}
function text_right()
{
    var text = document.getElementById("text");
    text.style.textAlign = "right";
}
function bold()
{
    var text = document.getElementById("text");
    text.style.fontWeight = "bold";
}
function text_height()
{
    var text = document.getElementById("text");
    size = text.style.fontSize;
    size = "3px";
    text.style.fontSize = size++ ;
}
//reminder
const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
const add = document.querySelector('.add');

if(window.localStorage.getItem("todos") == undefined){
     var todos = [];
     window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);


class item{
	constructor(name){
		this.createItem(name);
	}
    createItem(name){
    	var itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	var input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
        input.classList.add('item_input');

        var Done = document.createElement('button');
    	Done.classList.add('edit','btn','btn-success');
    	Done.innerHTML = "DONE";
    	Done.addEventListener('click', () => this.Done(input));

    	var edit = document.createElement('button');
    	edit.classList.add('edit','btn','btn-warning');
    	edit.innerHTML = "EDIT";
    	edit.addEventListener('click', () => this.edit(input, name));

    	var remove = document.createElement('button');
    	remove.classList.add('remove','btn','btn-danger');
    	remove.innerHTML = "REMOVE";
    	remove.addEventListener('click', () => this.remove(itemBox, name));

    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(Done);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

    }
    Done (input) {
        input.disabled = true;
    }

    edit(input, name){
        if(input.disabled == true){
           input.disabled = !input.disabled;
        }
    	else{
            input.disabled = !input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof] = input.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})

function check(){
	if(inputValue.value != ""){
		new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
		inputValue.value = "";
	}
}


for (var v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}


 


