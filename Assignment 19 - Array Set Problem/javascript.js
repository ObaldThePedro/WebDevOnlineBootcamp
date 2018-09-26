var numbers = [1,2,3,4];


function printReverse(array)
{
	var lastElementIndex = array[array.length -1];
	array.forEach(function(element)
				 {
		console.log(lastElementIndex);
		lastElement--;
	})
}
	

printReverse(numbers);