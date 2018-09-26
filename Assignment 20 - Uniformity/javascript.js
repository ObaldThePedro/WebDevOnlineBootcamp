/*
function isUniform(arr)
{
	var first = arr[0];
	for(var i = 1;i < arr.length; i++)
		{
			if(first != arr[i])
			{
				return false;
			}
		}
	return true;
}

*/

/*
function sumArray(array)
{
	var sum = 0;
	for(var i=0;i < array.length;i++)
		{
			sum = sum + array[i];
		}
	console.log(sum);
}

sumArray([1,2,3])
*/

function max(array)
{
	var max = array[0];
	for(var i= 0;i< array.length;i++)
		{
			if(array[i] > max)
				{
					max = array[i];
				}
		}
	console.log(max);
}

max([1,2,3]);