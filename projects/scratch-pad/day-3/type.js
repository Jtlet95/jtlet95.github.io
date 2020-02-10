// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
     //i am using the Array.isArray method to test the type of data and return it 
    return Array.isArray(value);
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //because .objectis Object does not exist im making a conditional statement that compares the object value
    //to all types of data classified as an object in javascript using the bang operator to be sure it only returns true for object
    if(typeof value === "object" && value !== null && !(Array.isArray(value)) && !(value instanceof Date)){
        return true
    }else return false 
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //i am going to make a conditional that uses the prior function to test for an object and use the or operator with the array. isarray 
    //method and then use the bang operater to make null and date return a boolean false 
    if (isObject(value) || Array.isArray(value) &&  value !==null && !(value instanceof Date)){
        return true
    }else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //i am going to make a conditional that compares the types of data(value) and have it return a string of that type of data to the console 
    //for each type of data in javascript 
    
    if(typeof value === "string"){
        return "string";
    }else if(Array.isArray(value)){
        return "array";
        
    }else if(typeof value === "object" && value instanceof Date) {
     return "date";   
    }else if (typeof value === undefined){
        return "undefined";
    }else if(typeof value ==="number"){
        return "number";
    }else if(typeof value === "boolean"){
        return "boolean";
    }else if(value === null){
        return "null";
    }else if(typeof value === "function"){
        return "function";
    }

    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
