/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//here we built a function that take animals and name as its paramaters 
// that will check if the animals names are on file in our code 
function search(animals, name){
   let newArray = [null]; 
   //here we created an array holding a null value so if the search can not find particular data 
   //it will display null
    for(let i = 0; i < animals.length; i++){
//creating a loop to cycle though animals array from beggining to end 


if(animals[i].name === name){
    //return the object 
    newArray = [animals[i]];
    }
   
}return newArray[0];
}
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//here we are building a function  that takes the paramaters animals , name and replacement
//and we made a loop that went over the animals 

function replace(animals, name, replacement){
    for(var i = 0;i < animals.length; i++){
        if(animals[i].name === name){
            animals[i] = replacement;  //over here if the animals index name equals the name we want to replace 
        }                              // then we make that index equal to the replacement object 
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//here we creating a function that runs through animals and name parameters 
function remove(animals, name){  
    for(let i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            animals.splice(i, 1);    // if the index of animals is eequal to the name we had it made removable 
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// we made a function with a nested loop and a nested conditional to make a place to create a pet animal account
// but using tertiary operators we were able to make a statment that would make sure the domain wasnt already taken
function add(animals, animal){
    for(let i = 0; i < animals.length; i++){
        if(animal.name.length > 0 && animal.species.length > 0 && animal.name === animals[i].name ){
            return;
        }    // we have to push animal into animals using the push method
    }animals.push(animal);
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
