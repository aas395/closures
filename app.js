var test = "test";

function myTest(test) {
	test = "test2";
}

test = myTest(test);

//what does this print out?
console.log(test);