var colors = [random_color(), random_color(), random_color(), random_color(), random_color(), random_color()]

function displaysquares()
{
	
}

var squares = document.getElementsByClassName("square");
var pickedColor = colors[Math.floor(Math.random() * 6)];
var header_rgb = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.getElementById("reset");
var stripe = document.getElementById("stripe");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");
var h1 = document.querySelector("h1");
var selection = document.getElementsByClassName("selected");

var button_hover = document.querySelector("button:hover");
var easy = false;
var hard = false;


header_rgb.textContent = pickedColor;


easyButton.addEventListener("click", function(){
	stripe.style.backgroundColor = "white";
	this.classList.add("selected");
	hardButton.classList.remove("selected");
	for(var i = 0; i<= colors.length / 3;i++)
	{
		colors[i] = random_color();
		squares[i].style.backgroundColor = colors[i];
	}
	pickedColor = colors[Math.floor(Math.random() * 3)];
	squares[3].style.display = "none";
	squares[4].style.display = "none";
	squares[5].style.display = "none";
	header_rgb.textContent = pickedColor;
	easy = true;
	hard = false;
})

hardButton.addEventListener("click", function(){
	stripe.style.backgroundColor = "white";
	this.classList.add("selected");
	easyButton.classList.remove("selected");
	for(var i = 0; i < colors.length;i++)
	{
		colors[i] = random_color();
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
	pickedColor = colors[Math.floor(Math.random() * 6)];
	header_rgb.textContent = pickedColor;
	easy = false;
	hard = true;
})

resetButton.addEventListener("click", function(){
	stripe.style.backgroundColor = "white";
	messageDisplay.textContent = null;
	h1.style.backgroundColor = "#fd693c";
	
	if(hard)
		{
	for(var i = 0; i < colors.length ; i++)
		{
			colors[i] = random_color();
			squares[i].style.backgroundColor = colors[i];
		}
		pickedColor = colors[Math.floor(Math.random() * 6)];
		header_rgb.textContent = pickedColor;
		resetButton.textContent = "New colors";
		}
	else if(easy)
		{
	for(var i = 0; i<= colors.length / 3;i++)
		{
			colors[i] = random_color();
			squares[i].style.backgroundColor = colors[i];
		}
	pickedColor = colors[Math.floor(Math.random() * 3)];
	header_rgb.textContent = pickedColor;
	resetButton.textContent = "New colors";
	}
	
})

for(var i=0; i < squares.length; i++){
	
	hardButton.classList.add("selected");
	hard = true;
	squares[i].style.backgroundColor = colors[i];
	
		
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		
		if(clickedColor === pickedColor)
			{
				messageDisplay.textContent = "Correct";
				for(var j=0; j< squares.length;j++)
					{
						squares[j].style.backgroundColor = pickedColor;
					}
				h1.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play again?";
			}
		else
			{
				this.style.backgroundColor = "#3e3e3e";
				messageDisplay.textContent = "Try again!";
			}
})
}


function getRandomInt(min, max)
{
	return Math.floor(Math.random() * (max - min) + min);
}

function random_color() {
	var r = getRandomInt(0,256);
	var g = getRandomInt(0,256);
	var b = getRandomInt(0,256);
	
	var rgb_set = "rgb(" + r + ", " + g + ", " + b + ")";
	return rgb_set;
}

