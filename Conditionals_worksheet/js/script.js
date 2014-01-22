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
