/* 
    Q1: Comment Your JavaScript code. 
*/

// Answer Q!:

// this is a single line comment 

/* 
    this is multi line 
    comment exmaple so we can write 
    multi-line in this erea ! 
*/

/* 
    Q2: Declare 3 JavaScript variables using all different keywords
     for declaring a variable, and store any values.
*/
// Answer Q2: 
var a = 10;
const b =3.14;
let c = "Mohamed";


/*
    Q3: Declare a function with:
- Name ‘func’.
- 2 parameters, x & y.
- check the argument types, return false if any of them is NOT number.
- return the sum of x and y.
- store the value return in a variable, and log to the terminal
*/

// Answer Q3:

function func(x,y){

    if (typeof(x) && typeof(y) === 'number'){
         let z= x + y;
         return z;
      
     }else{
         return false;
     }

}

console.log(func(1,'ali'));


/*
    Q4: Copy the following code and use both solutions ‘if else’ & ‘switch’ to solve the problem.
let today = new Date().getDay()
- print day name like ‘Monday’, based on the number is the variable ‘today’
Note:
> getDay() method returns the day of the week (from 0 to 6) for the specified 
date.
> Sunday is 0, Monday is 1, and so on
*/

// Answer Q4:
let today = new Date().getDay()

if (today === 1){
    console.log("the day is monday");
 }else{
    console.log("it is not monday")
 }

/*
    Q5: Using all ‘for loop’ and ‘while loop’ and ‘do while loop’, print from 0 to 10
*/

// Answer Q5:

// // for loop
for (let i=0; i<11; i++){
     console.log(i);
}

// // while 
let e =0;
while (e <11){
    console.log(e);
    e++;
 }
// // do .. while
let s=0;
do {
    console.log(s);
    s++;
}while (s<11);


/*
    Q6: Create array with at least 5 values
- Print all values using ‘for of loop’
*/

// Answer Q6:

let arr = ["mohamed","ahmed","ali","gure","abdullah"];

for (let x of arr){
    console.log(x);
}

for (let i in arr){
    console.log(arr[i]);
}


/*
    Q7: Create an object with at least 5 key/value pairs
- Using ‘for in loop’ print all keys next to values like (name: Ali)
*/

// Answer Q7:

let soop = {
    name : "Mohamed",
    age : 41,
    fculty : "cs",
    city: "mogadisho",
    year: 2021 
}
 for (let key in soop){
     console.log(`${key}: ${soop[key]}`);
 }


/*
    Q8: Create an array with at least 5 values
- Print the array length
- Use the following methods on the array:
 toString(), pop(), push(), join(), shift(), unshift(), reverse()
*/

// Answer Q8:

let soor = ["amir","mohamed","ahmed","ali","gure"];
console.log(soor.length);
let soor1 = soor.toString();
console.log(soor1);
let soor2 = soor.pop();
console.log(soor);
let soor3 = soor.push("abdulah");
console.log(soor);
let soor4 = soor.join('/');
console.log(soor4);
let soor5 = soor.shift();
console.log(soor);
let soor6 = soor.unshift("omar")
console.log(soor);
let soor7 = soor.reverse();
console.log(soor);

/*
    Q9: Create a ‘car’ object with ‘drive’ & ‘stop’ methods
- Call both methods
- drive should print ‘driving’
- stop should print ‘stoppin
*/

// Answer Q9:

let car ={
    drive: "Driving",
    stop : "Stopping"
  
};

console.log(car.drive);
console.log(car.stop);

/*
    Q10: Copy the following function
function throwError(){
throw Error('Kaboom')
}
- Using try/catch, call the function and print out the error in the ‘catch
*/

// Answer Q10:
try{
    throwError();
}
catch {
    function throwError(){
        throw Error('Kaboom')
    }
}

