/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. let declaration  (declares a block scope)
     //There are two other keywords we can use to declare variables besides var the first is "let"
    //EXAMPLE
    let exampleVar = 2;
    console.log(exampleVar); // prints => 2
    /* when declaring a variable with "let" it is very important to consider what you are using your variable for,
    as variables declared with the keyword "let" are limited to a block scope*/
    
// 5. // const declaration (declares a block scope)//
   //the third way of variable declaration is using the const keyword,
   //a constant can't be changed and it cant be redeclared later on
  // EXAMPLE
  const exampleConst = 24;
  console.log(exampleConst); // prints => 24
  
  /*when using const its imprtant to remember The keyword "const" it doesnt mean a constant value, 
  it means a constant reference to a value.*/

// 6. // Hoisting 

// when variables are decarled javascript reads from the top down they move to the top of their scope 
// there are global scopes, function scopes, if/else scopes and loop scopes 
//one of the most importing aspects about scopes and hoisting is that 
//child scopes can access their parental scopes but not vice versa 
//below is a diagram from class 


            // ——————————————————————----------
            // |	Global (global)            |
            // | 	----------------------------
            // |	|	Function (local)       
            // |	|       -------------------|
            // |	|       |	if (block)		
            // |	|       |------------------|
            // |	|       |	else (block)
            // |	|       -------------------|
            // |	|--------------------------|
            // |	|  Loop (block)	           |
            // |   |--------------------------|
            // |------------------------------|
    
    
    