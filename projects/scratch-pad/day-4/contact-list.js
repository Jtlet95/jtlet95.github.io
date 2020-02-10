// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 *///below i

// YOUR CODE GOES BELOW HERE //
   //below i made a object litteral that returns the id, nameFirst, nameLast 
function makeContact(id, nameFirst, nameLast) {
    let obja = {
        id: id, 
        nameFirst: nameFirst, 
        nameLast: nameLast,
        
    };
        return obja;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        }, addContact: function (contact){
        return contacts.push(contact);
        
            //below i am going to make a loop and return the contacts 
        },  findContact: function (fullName){
            for(var i = 0; i < contacts.length; i++) {
            if(fullName === contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]) {
            return contacts[i];
            }
            }
        
            //i am doing a forward loop and using the. splice method to remove the contact 
        }, removeContact: function (contact){
            for(var i = 0; i < contacts.length; i++){
            if (contacts[i] === contact){
                return contacts.splice(i,1);
            }
        }
        //using a for loop again i then used a . join method to complete the assignment
        //after the data has been pushed into the nameArray
        //applying the line break to the argument
        //allowed the test to complete
            
        }, printAllContactNames: function(){
            var nameArray = [];
            for(let i = 0;i <= contacts.length- 1; i++){
                nameArray.push(contacts[i].nameFirst + " " + contacts[i].nameLast);
            } return nameArray.join("\n");
            
        }
    };
    
    
}
    
     
    
    






    





// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
