/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
//we are making an object litteral 
animal.species = "dog";
//here we are using dot notation to add a species key and string value of dog
animal["name"] = "spot"
//here we aring using bracket notation to add a key name  with the value of dog
animal.noises = [];
//making an array litteral
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//we are creating a noises variale contating an array litteral
var noises = [];
//using bracket notation we are adding noises the animal might break
noises[0] = "bark";
//using the array method .push to add whine to the end of the array
noises.push("whine");
//using the array method .unshift to add tweet the beggining of the array
noises.unshift("tweet");
//below we are going to use bracket notation to add tweet to the end 
noises[3] = "cry";
//here we are console logging diffrenet aspects of our arrays
console.log(noises.length);
console.log(noises.length-1);
console.log(noises)
//LOOKING GOOD
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//adding the noises property from animal object to our anmal object
animal["noises"] = noises
//using any method we are adding another noise using bracket notation
noises[4] = "squeak";

console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//creating a array named animals
var animals = [];
//pushing our animals data into our animal data 
animals.push(animal);
console.log(animals);
//assigning a variable named duck with the pre data from the instructions 
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };

animals.push(duck);

//reapting steps above
var fish = {species: 'fish', name: 'Jolanda', noises: ['glub', 'swim', 'swish', 'gloosh'] };
animals.push(fish);
console.log(fish);
//reapating steps above 
var cat = {species: 'cat', name: 'Bunion', noises: ['meow', 'hiss', 'squeal', 'purr'] }
animals.push(cat);
console.log(cat);
console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// we chose an array because we need to make a list of our friends
var friends = [];

//making a function called get random to pullrandom indexs to our friend array
function getRandom(animals){
  return Math.floor(Math.random() * animals.length);
     
};      
// here we used dot notation to add a friends array to our duck var 
       duck.friends = [];
       console.log(friends);



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
