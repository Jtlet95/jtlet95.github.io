// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
     // YOUR CODE BELOW HERE //
     //i am going to use a forward loop to print the array elements and its values to the console 
     //i used the .length method for it incremoent and reconize the last element of the array
     //console logged the array with bracket notation 
  for(var i = 0; i < array.length ;i++){
    console.log(array[i])
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //i am making a forward loop to deincrement the array starting at the end and beging at 0 (indexed)
  //after i console.logged so the array would show in reverse on the console
  for(var i = array.length-1; i >= 0;i--){
    console.log(array[i])
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // using the .keys method to return the keys into an array
  
  return Object.keys(object);
  
  //excepted output is an array of keys 
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //using a for in loop to loop over because its an object
  //print each key to the console using console.log
  //
  for(var keys in object){
    console.log(keys);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
    //i am using the .values method to return and array conating the objects values 
  return Object.values(object);
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //here i am using a for in loop to loop over the object
  //i accessed the values in the object usign bracket notation 
  
  for(var key in object){
    console.log(object[key]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
   //i need to find the length of an objects key/value pairs and return a number
   //use object.keysto get an array of keys 
   //i am going to use the .length to find out the length of the object
   //output should be a number
   return Object.keys(object).length;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
 // i am making an array to hold my reversed data 
  var reversedArr = [];
  //i want to use a for in loop anad use the .push method to put the data in the array
  for(var key in object){
    reversedArr.push(object[key]);
  }
    // now that i have my array filled with data i want to usr a for loop to decrement and reverse the data output
    for(var i = reversedArr.length-1;i >= 0; i--){
      console.log(reversedArr[i]);
    }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
