// 1. NUMBERS //
 1, 2,3,4,5,6,7,8,9,10;
// numbers in javascript are represented as intigers that can be used to, 
//number othertypes of data, 
//numbers are used in zero based indexing, to keep track of elements in an array
//numbers can be assigned to variables and used in mathmatic equations 
// and even loops to control incremantations/decramantation 
// Ex: var x = 1; , 2 + 2; a + b =
//Ex: For(i = 0; i< 10; i++){
    
//  }

// 2. STRING "", ''//
let x  = "Hello?! i am a STRING";
// strings in javascript are a sequence of text data in between qoutes 
// as a way to make sentance structure through our console, 
// strings can be made of numbers, letters or symbols
// "string, 1234, $$$" strings are zero based index as well! 
// 

// 3. BOOLEAN (if STATEMENTS)
// true, false,  let iCanDoThis = true 
Boolean; // Boolean data is a data type that can have one of two values either
// true or false , Boolean data is useful for when using conditonal statements 
//to help decide the correct code block to execute and to control the data flow 
// Example: if(condition){
//  "Execute this code block"  
// }else {
//    "execute this code block instead"
//   }


// 4. ARRAY [];
 let array = ["an", "Array", "of", "sunshine"];
// arrays are list like data containors,  their contents are reffered to as 
// elements and are accesable through bracket notation the elements begin at 0 
//it can hold anydata type  and what really makes arrays powerful it can hold 
//more than one type of data item at a time 

// 5. OBJECTS {};
// objectList ={
// key:value
// key:Value
// key:value 
// }; 
// objects are also data conatinors but unlike arrays they can contain other
// data types like other arrays, loops, even nested objects but what really 
// defines them is their list like key value pairs and how we can use dot (). 
//notation and [] to access different values within the object 

// 6. FUNCTIONS 
function myFunction(a, b) {
return p1 + p2;   // dis function returns sum of p1 and p2
 };
// a function is a code block that is designed to complete an assigned task 
//you need to have a return with a function 
// and the function must be invoked, called or returned and invoked


// 7. UNDEFINED -undefined (property of global objecct)
//ex: var x
//undefined is a value type saying that when a variable doesnt have any data
//attached to it , it will return undefined a variable that is not initilized 
// will return undefined  undefined is also a primitive data type


//8. Null- "Null" (property of global object)
//in javascript when you see this data it means what you are  
// testing has no value you can assign a variable with this 
// data type and you will almost always never get this prompt by accident
//it can be used for unknown data types

// 9.NaN (property of global object)
   //prints on console NaN 
//NaN is a data value that means Not a Number and it is pretty rare to use 
//in programing it can be used to fix errors with parrsing number fails

//10. Infinity and negative -infinity (property of global object)
// ex var i = Infinity
//infity is a value that represent a never ending number 
//- infinity is a value tht represents a negative never ending number

// 11. PRIMITIVE/ NON PRIMITIVE 
//  primitive data is data that is already programmed into the global console 
// and used by programmers to create variables 
//boolean, char, byte, short, int, long, float, and double. 
//these are all called primitive data and are all immutable
// non primitive data is data created in javascript by programmers like objects 
// arrays and are mutable which means that once created they cannot be modified. 
// and are capped at 8bits 

//12. PRIMITIVE COPY BY VALUE/COMPLEX COPY BY REFERENCE 
//Javascript is an object oriented language so while programming we can see that 
//most things in our code are objects like functions for example, in javascripts
//the only things that are not objects are our primitive data types, the 
//the main difference between primitive and complexs data types are that 
//primitive data types are copied by their value and complex data types are 
//pased by their reference 