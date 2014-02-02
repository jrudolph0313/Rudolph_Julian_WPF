//Julian Rudolph
//Functions assignment industry
//2-1-14

//estimating blood alcohol content
//the code is all mine, the formula i found online.  I am not going to get into the specifics, just basics.

var bodyWater=prompt("Hello, lets estimate your blood alcohol content!  Are you a male or female?")
	if("male"){
		bodyWater=.58
	}else{
		bodyWater=.49
	}
//check with console
console.log(bodyWater);