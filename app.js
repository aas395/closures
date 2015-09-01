var test = "test";

function myTest(test) {
	var test = "test2";
	return test;
}

test = myTest(test);

//what does this print out?
console.log(test);