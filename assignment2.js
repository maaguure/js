// Assignment 2

/* Q1: Create objects
 - Create object using object literal syntax. Object should have at least 2 properties.
 - Create another using the keyword “new”. Object should have at least 2 properties.
 - Use the “delete” keyword to remove a property.
 - Convert the object to Array.

 */
// Answer Q1: 

//- 
let obj1 = { name:"mohamed", city:"mogadisho", street:"wadnaha"};

//-
let obj2 = new Object();
obj2.name = "mohamed";
obj2.city ="mogadisho";
obj2.street="wadnaha";

//- 
delete obj2.street;
console.log(obj2['street']); 
//-
const conArray1 = Object.keys(obj2);
console.log(conArray1);
//or 
const conArray2 = Object.values(obj2);
console.log(conArray2);
// Or 
const conArray3 = Object.entries(obj2);
console.log(conArray3);



/* Q2: Create object constructor 
 - Create an object constructor named “Person”.
 - It should that take “firstName, lastName, yearBorn”.
 - It should have a method called “age” that returns “2021- the yearBorn”.
 - Create instance of the object.
 - Call the age method. */

// Answer Q2:
 let Person = function(firstName,lastName,yearBorn){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearBorn = yearBorn;
    this.age = function(){
        return "2021" - this.yearBorn;
    }
}

let mohamed = new Person("Mohamed","Ali",1981);
console.log(mohamed.age());



// Q3: Create a function expression and store it in a variable
// - It should take (a,b) and return their sum
// - Print the sum

// Answer Q3:
let sum = function(a,b){
    return a + b;
}

console.log(sum(1,4));

/* Q4: Create a self-invoking function that prints out something */

// answer Q4:
(() => {
    console.log("hello my code");
})();
// or
(function () {
    console.log("hello my code");
}) ();


/* Q5: Create an arrow function and store it in a variable
 - It should take (a,b)
 - Return a*b */

// Answer Q5:
let multi = (a,b) => a * b;
console.log(multi(3,5));


/* Q6: Declare a function that takes (a,b)
 - It should assign a default value to the variable “b” in the parameters.
 - Return a*b
 - Call the function with ONLY one argument. */

// Answer Q6:

function func(a,b=5){
    return a * b;
}
console.log(func(3));

/* Q7: Create a class called “Vehicle”
 - The constructor should take (type, year)
 - The class should have the following methods:
 - “move” -> it should print “Moving”
 - “stop” -> it should print “Stopping” */

// Answer Q7:
class Vehicle {
    constructor(type,year){
        this.type = type;
        this.year = year;
    }
    
       move = function(){
            return "Moving";
        }
        stop = function(){
            return "Stopping";
        }
    }

let test = new Vehicle();
console.log(test.move());

/* Q8: Create a class called “Plane” and inherits “Vehicle”
 - The constructor should take (type, year)
 - The “super” method should be called
 - The class should have the following methods:
  - “fly” -> it should print “Flying”
  - “land” -> it should print “Landing” */

// Answer Q8:
  class Plane extends Vehicle{
    constructor(type,year){
        super(type,year);            
    }
    fly(){
        return "Flying";
    }
    land(){
        return "Landing";
    }
}



/* Q9: Create an instance of the “Plane” class.
 - Call all the methods (move, stop, fly and land) */

// Answer Q9:
const show = new Plane();

console.log(show.move());
console.log(show.stop());
console.log(show.fly());
console.log(show.land());