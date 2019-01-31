var i=1
var num1,num2,num
var a

var areats = function() 
{

	console.log('Enter 1 For Triangle Area OR Enter 2 For Square Area : ')
	let stdin = process.openStdin()
	stdin.addListener("data",(value) => 
	{
		if (i === 1)
		{
			num = value
			console.log('Enter Number1 :')
		}
		else if (i === 2)
		{
			num1 = value
			console.log('Enter Number2 :')
		}
		else 
		{
			num2 = value
			stdin.destroy()
			if(num == 1)
				{
					a = 0.5*num1*num2 
				}
			else if(num == 2)
				{
					a = num1*num2
				}
			
			console.log('Area is : ' + a )
		}	
	i++	
	} )
}

module.exports.areats = areats;