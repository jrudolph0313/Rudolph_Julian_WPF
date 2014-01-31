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

console.log(total);
