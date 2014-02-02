//Julian Rudolph
//Functions assignment industry
//2-1-14

//estimating blood alcohol content
//the code is all mine, the formula i found online.  I am not going to get into the specifics, just basics.

var bodyWater=prompt("Today we are going to estimate your blood alcohol content.  Are you male or female?")
	if(bodyWater=="male"){
		bodyWater=.58;
	}else if(bodyWater=="female"){
		bodyWater=.49;
	}else{
		alert("You must be either male or female, robots do not count...Sorry!")
	}

	//check with console
	//console.log(bodyWater);

	var drinks=prompt("How many drinks have you had?")
	//check with console
	//console.log(drinks);
	var weight=prompt("How much do you weight in pounds?")
	//check with console
	console.log(weight);