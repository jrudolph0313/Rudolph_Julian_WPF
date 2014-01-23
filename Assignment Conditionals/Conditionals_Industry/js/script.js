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
//assign number of hours bar is open based on day: sun-wed=13 hours, thrus-sat=15 hours
var hours=[13, 15];
//check witn console
//console.log(hours[0], hours[1])
//decide how many hours depending on which day is selected
if (day="Mon", "Tues", "Wed", "Sun"){
	hours=hours[0];
}else{
	hours=hours[1];
}
//check with console
console.log(hours);