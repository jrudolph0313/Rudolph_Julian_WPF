//Julian Rudolph
//Functions Personal
//1-30-14

//How does fractional reserve banking work

alert("Lets see a good example of how Fractional Reserve Banking works.");

var USD=prompt("Input a deposit amount in $USD.")
//check with console
//console.log(USD);

bankKeep(USD, .10)//in fractional reserve banking, the banks only have to keep 10% of any deposit.

function bankKeep(USD, Law){
	total=USD*Law
	//console.log(total)
	return total;
}

//console.log(total);
//how much can a bank loan out based on the amount user entered

bankLoan(USD, total)

function bankLoan(USD, total){
	bankLoan=USD-total
	return bankLoan;
}
//checking results
//console.log(total);
//console.log(bankLoan);

console.log("If you deposited $"+USD+" "+"in your bank they have to keep only 10% of that.  This means that your bank is allowed to loan $"+bankLoan+" "+"to anyone they want. What happens when that customer deposits that amount into their own account?  Lets find out!")

//var peopleDeposit=bankLoan*.9;
//console.log(peopleDeposit);

while (USD>=1){
	USD=USD*.9
	console.log(USD)
}












