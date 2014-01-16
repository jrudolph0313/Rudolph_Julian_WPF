//Expressions Persoal
//Julian Rudolph
// 1-16-14

//Calculate the number of gallons of paint to cover a wall (depending on number of coats)
//prompts and var
var height= prompt ("Hello, lets calculate the number of gallons of paint you will need to paint a wall. /n Please enter the hight of your wall");
var length= prompt ("What is the length of your wall?");
// Number of coats
var coats= prompt ("How many coats will you be paint your wall?");
//getting sqft from height * width
var sqft=height*length;
//assign var gal=350
var gal=350;
//console.log(sqft)
//sqft times number of coats to get total sqft 
var totalSqft=sqft * coats;
//console.log(totalSqft)
//1 gallon of paint should cover around 350 sqft.  totalSqft / gal = number of gallons
var galNeed=totalSqft / gal;
//print result in console
console.log(galNeed);
//add alert for galNeed
alert ("Your wall is "+(sqft)+"sqft.  One gallon of paint should cover "+(gal)+"sqft.  If you want to paint your wall "+(coats)+" "+"coats, you will need"+" "+(galNeed)+" "+"gallons of paint!")