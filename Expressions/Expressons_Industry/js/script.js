//Julian Rudolph
//Expressions Industry
//1-16-14
//Find the profit of a given number of kegs

//assigning variables
//ounces of mug input
var mugOz= prompt("How many ounces is your mug?");
//input number of kegs
var numKeg=prompt("How many kegs are available?");
//check to make sure input works
//console.log(numKeg);
//assign how many ounces in a keg
var ozKeg=7040
//Find number of mugs in one keg using inputs
var numCups=ozKeg / mugOz;
//check function
//console.log(numCups);
//find price of mug then how much is made from a keg
var priceKeg=prompt("How much does one keg cost your store?");
var mugPrice=prompt("How much does one mug cost?");
//find how much can be made from number of kegs
var totalCups=numCups * mugPrice


