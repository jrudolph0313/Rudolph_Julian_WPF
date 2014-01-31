//Julian Rudolph
//Functions Personal
//1-30-14

//How does fractional reserve banking work

alert("Lets see a good example of how Fractional Reserve Banking works.");

var USD=prompt("Input a deposit amount in $USD.")
//check with console
//console.log(USD);

bankKeep(USD, .10)

function bankKeep(USD, Law){
	total=USD*Law
	console.log(total)
}