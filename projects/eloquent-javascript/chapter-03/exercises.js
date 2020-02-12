////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//making the parameters two numbers and going to try to make a function that
//finds the lowest of the two
function min(num1 , num2) {
   // i am going to use a conditional statment to find thelowest of two numbers 
   //and what to return to the console
    if(num1 < num2){
      return num1
    }else if (num2 < num1){
      return num2 
    }else if (num1 === num2){  //here is for when two numbers are the same 
      return 0;
    }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// below we will have a function that can tell you if a number is even or odd and will
//be testing a negative number as well 
function isEven(number) {
    //below we are making a conditional statement to test wether recursion will hit 0 for even
    //and 1 for odd
    if (number < 0) {
        return isEven(-number);
    } else if (number === 1) {
        return false;
    } else if  (number === 0) {
        return true;
    } else {
        return isEven(number - 2); //we are having it subtract 2 less over and over return a true value for neagative, even and odd
        // values fo rnumbers 
    }
}


////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// like counting B"s i am going to modify my code to test a boolean value against the charecter 
//instead of just "B"
function countChars(str, char) {
 let count = 0
 
 for(let i = 0; i < str.length; i++){
   if (str.charAt(i) === char){count++} //using th charAt() method to start at the begging of the charecter and test if it is equal to 
 }return count //return the finished count 
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//i am making countBs parameter take an argument of a string 
function countBs(str) {
  let count = 0;
  //i need to use a for loop to loop through each charecter of my string 
  for(let i = 0; i < str.length; i++){
    var x = str.charAt(i);
    if (x === "B"){count++}
      
    } return count; // return the finsihed count 
  }


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
