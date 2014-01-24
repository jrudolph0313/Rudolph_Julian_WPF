//Julian Rudolph
//conditionals wacky
//1-23-14

//Is it a good idea to ride a friend down a hill?
//assuming the fried agrees with the idea
//depending on users friends size in relation to the users, angle of slope, and what kind of cover
//is over the hill (snow, ice, dry)

//alert user to what we are going to decide
alert("Today we are going to determine if it is a good idea to ride a friend down a hill.");
//ask user if their friend
var sizeFriend=prompt("Would you consider your friend to be larger than yourself? yes or no?");
//lets add if else
	if(sizeFriend!="yes"){
		console.log("No, this already isn't a very wise idea. Find a new friend!");
	}else{
		sizeFriend=sizeFriend;
	}
//check with console
//console.log(sizeFriend);
var slope=prompt("what degree is the slope of the hill?")
	if(slope<45){
		console.log("Nope, less than 45 is not safe. Find a new hill!")
	}
//check
//console.log(slope);
//snow/ice covered vs dry
var condSlope=prompt("Is the slope covered is snow, ice, or dry?");
	if(condSlope!="dry"){
		console.log("Yeah buddy!, If you have gotten this far without an alert showing up it means that a" +" "+(condSlope)+" "+"covered hill seems like a good idea! Go for it!");
		}else{
			console.log("Nope, a "+(condSlope)+" "+"hill is never a safe place!")
		}
//check
//console.log(condSlope);



