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
//if/else for hours assigned to a var
var hoursOpen;
	if (day="Mon", "Tues", "Wed", "Sun"){
		hoursOpen=13;
	} else{
		hoursOpen=15;
	}
//check with console
console.log(hoursOpen);