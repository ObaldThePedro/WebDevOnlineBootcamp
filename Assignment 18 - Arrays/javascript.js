var todos = [];	
window.setTimeout(function() 
{
	todos;

// put all of your JS code from the lecture here

console.log("Connected");
	

	
var input = prompt("What would you like to do?");	


while(input !== "quit")
{	
	if(input === "list")
	{
		listToDos();
	}
	
	else if(input === "new")
	{
		newTask();
	}
	else if(input === "delete"){
		deleteTask();
	}
	input = prompt("What would you like to do?");
}
},500);

function listToDos()
{
	if(todos.length < 1)
		{
			console.log(todos);
		}
	else{
todos.forEach(function(tasks,index){
	console.log(index + ":" + tasks);
});
	}
}

function newTask()
{
	var add = prompt("What are your tasks?");
		todos.push(add);
}

function deleteTask()
{
	var index = prompt("What index would you like to delete?");
		todos.splice(index,1);
}