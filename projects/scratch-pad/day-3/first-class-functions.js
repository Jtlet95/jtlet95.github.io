// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //

//so i made a function named testAgaints and it returned a comparrision of data 
//i made my argument a hypothethical nonexistant number
//i compared it to the pre programmed base 
     return function testAgaints(input){
        return input > base;
             
         
     };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //Doing the same as above but with a dffrent peramiter and argument within the code body 
    //but with the code body comparing the input less than 
return function testWith(input){
    return input < base;
};
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE // 
    //below i am creating a funtion to help decifer what the first charecter 
    //of a pre programed string would be 
    //trying to figure out the first using a conditional and methods using or statements to catch either case 
    return function(string){
        if(startsWith === string[0].toLowerCase() || startsWith === string[0].toUpperCase()){
            return true;
        } 
        return false;
        
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //doing the same as above problem above but i will be using the .length - 1 in bracketnotation and the methods linking.the toUpperCase and toLowercase methods to save time
    //finding the end charter of the string
    return function endswith(string){
        if(endsWith === string[string.length-1].toLowerCase() || endsWith === string[string.length-1].toUpperCase()){
            return true;
            
        }else return false;
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // create storage array
    // loop through array of strings
    //pass each string through the modify function(inside of the loop)
    //modifyied function is going to spit out each string
    // store modified strings in an array
      var storageArry = [];
      
      for(var i = 0; i <= strings.length-1; i++ ){
          storageArry.push(modify(strings[i]));
          
      }  return storageArry;
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //create a test array
    //creating a forward loop to pass through the array of strings
    //then create a conditional to find wheteor or not the inforamation holds a boolean value for the test
    //if statement is true we are pushing the index to the array
    //now i am going to use the .length to compare the length of arrayT to strings
    //then create a conditional that will test the length
   var arrayT = [];
    for(var i = 0; i <= strings.length-1; i++){
        if(test(strings[i]) === true){
            arrayT.push(i);
        }
      
      }
    
    
    if(strings.length > arrayT.length){
          return false;
      }else{
          return true
      }
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}