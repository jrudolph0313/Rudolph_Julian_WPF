//Expressions Wacky
//Julian Rudolph
//1-16-14
//How any ozs of alcohol have you had?
//asking user for inputs, servig size in oz.
var sizeBeer=prompt ("How many ounces of beer is in one serving?");
//percent alcohol in beer
var percentAlcohol=prompt("What percent of alcohol is your beer?");
//how many beers have you had?
var numberBeer=prompt("How many beers have you had?");
//how many ounces of beer have been consumed?
var totalOz=numberBeer * sizeBeer;
//checking math
//console.log(totalOz);
//find how many ounces of alcohol is consumed in given number of beer depending on percentage
var totalConsumed=(percentAlcohol / 100) * numberBeer;
//checking math
//console.log(totalConsumed);
//putting it all together
console.log("Your beer is"+" "+(percentAlcohol)+"% alcohol.  You have had"+" "+(numberBeer)+" beer(s). This means you have consumed"+" "+(totalConsumed)+"oz. of alcohol.");
//Add alert, just for fun.
alert("Your beer is"+" "+(percentAlcohol)+"% alcohol.  You have had"+" "+(numberBeer)+" beer(s). This means you have consumed"+" "+(totalConsumed)+"oz. of alcohol.");