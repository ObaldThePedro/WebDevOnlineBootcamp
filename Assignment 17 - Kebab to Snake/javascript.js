function kebabtosnake(str)
{
	var newstr = str.replace(/-/g, "_");
	alert(newstr);
	return newstr;
}

kebabtosnake("myname-isPedro");