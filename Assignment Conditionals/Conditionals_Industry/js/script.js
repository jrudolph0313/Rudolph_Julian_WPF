//Julian Rudolph
//Conditionals Assignment Industry
//1-23-14

//How much money is being made at a bar on a given day, beer only
//ask user what the weekly average of beer sold in USD
var weekAverage=prompt("How much does your bar sell on an average week in $USD?");
	if(weekAverage==""){
		alert("The amount your bar sells on an average week must be entered!")
		prompt("How much does your bar sell on an average week in $USD?")
	}
//Check with console
//console.log(weekAverage);
//lets find out the day
var day=prompt("What day is it? 1-Mon, 2-Tues, 3-Wed, 4-Thrus, 5-Fri, 6-Sat, 7-Sun. Please use numbers, not name of day!");
	if(day==""){
		alert("The day is required! Please use the number system I have set up!")
		prompt("What day is it? 1-Mon, 2-Tues, 3-Wed, 4-Thrus, 5-Fri, 6-Sat, 7-Sun. Please use numbers, not name of day!")
	}
//check with console
//console.log(day);


//assign hours open to an array
var hoursOpen=[13, 15];
//check with console
//console.log(hoursOpen[1]);


//lets do math

var priceOnDay;
if(day<5){
	priceOnDay=weekAverage*0.05;
}else if(day==5){
	priceOnDay=weekAverage*0.1;
}else{
	priceOnDay=weekAverage*0.35;
}
//checked math with console
console.log(priceOnDay);

//Plugging in choice of days



var perHour;

if(day<=5){
	perHour=priceOnDay/13;
}else{
	perHour=priceOnDay/15;
}


//check output with console
//console.log(perHour);















