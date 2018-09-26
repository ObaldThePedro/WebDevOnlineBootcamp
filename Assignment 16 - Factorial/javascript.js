function factorial(num)
{
	var result = 1;
	for(var i = 1;i<= num;i++)
		{
			result = result * i;
		}
	alert(result);
	return result;
}

factorial(3);