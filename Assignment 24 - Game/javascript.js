var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Score = 0;
var p2Score = 0;
var p1ScoreDisplay = document.getElementById("p1score");
var p2ScoreDisplay = document.getElementById("p2score");

var attempts = document.getElementById("attempts");
var isGameOver = false;

var resetButton = document.querySelector("#reset");

var input = document.querySelector("input");

input.addEventListener("change", function(){
	attempts.textContent = input.value;
	isGameOver = false;
})

p1Button.addEventListener("click", function(){
	if(!isGameOver)
	{
	p1Score++;
	p1ScoreDisplay.textContent = p1Score;
		if(p1Score == attempts.textContent)
			{
				p1ScoreDisplay.style.color ="green";
				isGameOver = true;
				console.log("Game is Over!");
			}
	}
});

p2Button.addEventListener("click", function(){
	if(!isGameOver)
	{
	p2Score++;
	p2ScoreDisplay.textContent = p2Score;
		if(p2Score == attempts.textContent)
			{
				p2ScoreDisplay.style.color = "green";
				isGameOver = true;
				console.log("Game is Over!");
			}
	}
});

resetButton.addEventListener("click",function(){
	p1Score = 0;
	p2Score = 0;
	p1ScoreDisplay.textContent = 0;
	p2ScoreDisplay.textContent = 0;
	p1ScoreDisplay.style.color = "black";
	p2ScoreDisplay.style.color = "black";
	isGameOver = false;
	attempts.textContent = 0;
});