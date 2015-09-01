var test = "test";

function myTest(arg1) {
	//references the global variable "test"
	test = arg1;
	var test2 = 'test3';
}

myTest('test2');

//what does this print out?
console.log(window.test);