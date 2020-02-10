// FUNCTIONS 
//functions are a block of code designed to compleate specific tasks a function needs 
//to be invoked or called for a function to take an action, 
//A JavaScript function is defined with the function keyword must have a name and 
// parenthesis for an argument a parameter is what sets the variables to
//what an argument will be able to do within the program

// EX: function name(parameter1, parameter2) {
// code to execute
//  }
//   once a function hits a return statment it will stop 
// var x = myFunction(4, 3);   //  return value will end up in x

// EX:
//function myFunction(a, b) {
//  return a * b;             // Function returns the product of a and b
// }

// functions are useful because they can be reused 

// SCOPES

// when variables are decarled javascript reads from the top down they move to the top of their scope 
// there are global scopes, function scopes, if/else scopes and loop scopes 
//children of parent scopes can access their parents scopes but not vice versa

//CLOSURES

// a closure is a function within a function
//you can use the parameters of the outer function in the inner function, 
//but not the other way around variable can belong to either the local or global or block scopes a 
// global variable can be made private using a closure and be accessed from the inside
// of the function 
// Ex:
// // Initiate counter
// var counter = 0;

// // Function to increment counter
// function add() {
//   var counter = 0;
//   counter += 1;
// }

// // Call add() 3 times
// add();
// add();
// add();

// //The counter should now be 3. But it is 0