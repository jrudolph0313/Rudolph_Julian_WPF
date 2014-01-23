//Julian Rudolph
//Conditionals Assignment Industry
//1-23-14

//How much money is being made at a bar on a given day, beer only
//ask user what the weekly average of beer sold in USD
var weekAverage=prompt("How much does your bar sell on an average week in $USD?");
//Check with console
//console.log(weekAverage);
//lets find out the day
var day=prompt("What day is it? Mon, Tues, Wed, Thrus, Fri, Sat, Sun");
//check with console
//console.log(day);
//assign hours open to an array
var hoursOpen=[13, 15];
//check with console
//console.log(hoursOpen[1]);
//assign percentages of sales accounted for days in array
var percentDay=[.05, .1, .35]
//check with console
//console.log(percentDay[2]);
//lets do math
var totalForDay;
 
 if (day=="Mon", "Tues", "Wed", "Thurs"){
	//console.log(day);
	totalForDay=weekAverage * percentDay[0];
} else if(day=="Sat", "Sun"){
	totalForDay=weekAverage * percentDay[2]
} else {
	totalForDay=weekAverage * percentDay[1]
}

//check with console
console.log(totalForDay);


















