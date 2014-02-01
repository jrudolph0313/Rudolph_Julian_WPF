//Julian Rudolph
//Functions Personal
//2-1-14

//How does fractional reserve banking work

alert("Lets see a good example of how Fractional Reserve Banking works.");

var USD=prompt("Input a deposit amount in $USD. (HINT) It is suggested that the user doesn't put a large amount or the 'while' loop will print too much to the console")
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

//starting while loop
while (USD>=1){
	USD=USD*.9
	console.log(USD)
}

alert("The numbers in the console are the amounts, in $USD, that can be loaned out just from your initial deposit amount. Assuming that each person deposits the money that was loaned to them into their own account. Now you understand the Mystery of Banking!")











