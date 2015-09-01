var test = "test";

function myTest(test) {
	//creates a variable in this scope called "test"
	test = "test2";
}

myTest(test);

//what does this print out?
console.log(test);