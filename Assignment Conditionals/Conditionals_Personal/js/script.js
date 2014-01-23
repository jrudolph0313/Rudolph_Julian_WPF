//Julian Rudolph
//Assignment Conditionals_Personal
//1-23-14
//How much could a person have made investing in Litecoin
//input old price of Litecoin, input how much is USD would have been invested, divide to get number of 
//Litecoin that would have been recieved, multiply that by the current price.  If user made money one 
//result will appear.  If user lost money a different result will appear.
//assign vars to prompts
var amountInvested=prompt("How much would you have invested in LTC had you not believed the negitive media propaganda?");
var check1;
check1=(amountInvested==null || amountInvested=="") ? "The amount you would have invested is required!" : check1=true;
console.log(check1);
//make sure it works
//console.log(amountInvested);
var pricePerOld=prompt("How much was one LTC worth in $usd when you should have invested?");
var amountLtc=amountInvested / pricePerOld;
var valueOld=pricePerOld * amountLtc;
//Check math
//console.log(amountLtc);
//how much is one ltc now from btc-e.com
var currentPricePer=prompt("What is the current price in $usd of one LTC?");
var currentTotalAmount=currentPricePer*amountLtc;
var profit=currentTotalAmount - valueOld;
//check math
console.log(currentTotalAmount);
//if value has gone up disply one string, if value has gone down print a different string.
var result;
result=(valueOld<currentTotalAmount) ? "Congrats, you have made $"+(profit)+" "+"profit!" : "Sorry, you have lost $" +(profit)+" "+"!";
console.log(result);