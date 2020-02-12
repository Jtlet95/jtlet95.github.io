
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
  //creating a forward loop to print the tower in number increiments 
  for (var tower = "#"; tower.length <= number; tower = tower + "#"){
//console.logging to visuallay build tower in the console
console.log(tower);
}
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  //first i am going to make a forward loop with a conditional statement to decide which interger 
  //will display what console.logged statment should appear to clear the test 
  for(var i = start; i <= end; i++ ){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz");
        //console.logging if its divisible by 3 and 5 
    }else if(i % 5 === 0){
        console.log("buzz");
    //console.logging  buzz if its divisiable by 5 
    }else if(i % 3 === 0){
        console.log("fizz");
        
        
    }else {console.log(i);}
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
  //making a tag called hashtags to represent my board where i will be putting my data
  var hashtags = "";
// in the first loop we add newlines in new rows
for (var i = 0; i < number; i++) { 
    // the nested loop creates a line its either going to  add a space or hastag
    //to the string that's being populated (a chessboard)
  for (var a = 0; a < number; a++) { 
    
    if ((i + a) % 2 == 0) 
    //we must add the spaces seperately because they are finicky 
      hashtags += " ";
    else                 
      hashtags  += "#";
  }
 
  hashtags += "\n";   
  // i need make a new line after the loop finishes so that the loops can re-add in inverse  
}
console.log(hashtags);


}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
