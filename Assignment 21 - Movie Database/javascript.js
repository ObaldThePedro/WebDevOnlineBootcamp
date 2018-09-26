var films=[
	{
		title:"American Gangster",
		rating:5,
		hasWatched:true
	},
	{
		title:"Inception",
		rating:5,
		hasWatched:true
	},
	{
		title:"Sicario 2",
		rating:5,
		hasWatched:false
	}
]

films.forEach(function(movie)
			   {
	var result = "You have ";
	if(movie.hasWatched)
		{
			result = result + "watched ";
		}
	else{
			result = result + "not seen ";
		}
	result += "\"" + movie.title + "\" - " + movie.rating;
	console.log(result);
})