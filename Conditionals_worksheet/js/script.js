//Conditionals Worksheet
//Julian Rudolph
//1-22-14

// Stuff your face 1
//competitor must weigh more than 250 lbs to compete
//assign compWeight to the input of a prompt from user
var compWeight=prompt("Please input the competitors weight in pounds.");
//check output 
//comment out, it works
//console.log(compWeight);
//print output based on user input
//assign var as output of condition
var compCan;
compCan=(compWeight>=250) ? "The competitor qualifies for the heavyweight Division." : "The competitor needs to gain some weight!";
//print result to console
console.log(compCan);

//Celsius to Fahrenheit converter
//ask user what unit "f" or "c", ask user temp to convert, convert and disply results in different units
var whatUnitInput=prompt("What unit of measure are you going to use? f or c?");
//check result
//console.log(whatUnitInput);
//find what temp is from user
var temp=prompt("What temp do you want to convert?");
//check if it works
//console.log(temp);
//based on what unit the user inputs, assign formula to use for "f" or/else "c"
if(whatUnitInput=="f"){
//assign a var to input temp and formula
	var tempInC= (((temp-32)*5)/9);
//check math with console
	//console.log(tempInC);	
}else{
	//if user puts "c" (not f), a different formula will be used
	//assign var tempInF to formula
	var tempInF=(((temp*9)/5)+32);
	//check math and funcitons
	//console.log(tempInF);
}























