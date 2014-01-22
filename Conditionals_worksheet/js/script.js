//Conditionals Worksheet
//Julian Rudolph
//1-22-14

/*


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
//declare new var
var results;
//find results
results=(whatUnitInput=="f") ? "The temperature is"+" "+(tempInC)+" "+"degrees Celsius." : "The temperature is"+" "+(tempInF)+" "+"degrees Fahrenheit.";
//print results to console
console.log(results);



//Check the login
//users username and pass must match what is stored or there will be a login fail
//ask user for uname and upass
var uName=prompt("What is your username?");
var uPass=prompt("What is your user Password?");
var trueName="julian";
var truePass="julian";
//check with console
//console.log(uName+uPass);
//new var with uName=uPass
var enteredNamePass=uName+uPass;
//check with console
//console.log(enteredNamePass);
//check results of trueName+truePass
//console.log(trueName+truePass);
//make var from trueNmae+truePass
var stored=(trueName+truePass);
//make new var, security 
var login;
login=(enteredNamePass == stored) ? "Welcome, your username and password match our records. You may enter!" : "Sorry, your username and/or password do not match our records.";
console.log(login);


*/

//Tire Pressure 1
//user inputs tire pressure for each tire, depending on results print proper results
//front tires must be the same, back tires must be the same, front doesn't have t match back
//start inputs
var tireFront1=prompt("What is PSI of first front tire?");
var tireFront2=prompt("What is PSI of Second front tire?");
var tireBack1=prompt("What is PSI of first back tire?");
var tireBack2=prompt("What is PSI of second back tire?");
//turn input into array
var myTires=new Array(tireFront1, tireFront2, tireBack1, tireBack2);
//check by console.log showing results from index numbers
//console.log(myTires[0], myTires[1], myTires[2], myTires[3]);
//declare var and assign it to expression using array index numbers
var onSpec;
onSpec=(myTires[0]==myTires[1] && myTires[2]==myTires[3]) ? "The Tires pass Spec!" : "Get your tires checked!";
//print to console
console.log(onSpec);














