// Assignment Three
/* 
Q1: Create function:
- It should take three arguments (a, b, callback).
- It should wait 1000 milliseconds before returning the sum.
- It should call the callback with the sum of a & b.
- Call the function with arguments, and log out the output.
 */

// Answer Q1
function sumFunc(a,b , callback){
    setTimeout (() =>{
        let sum=  a + b  
        callback(sum)
    }, 1000);
   
     
}
sumFunc(3,4, (result)=>{
    console.log(result)

});

/*
Q2: Create a new promise object:
- Create a variable called “isAvailable” and store a Boolean value.
- Resolve with “Success” if it’s true.
- Or reject with “Fail” if it’s false.
- Handle the promise with “then” & “catch”, and log out the returned value.
*/

// Answer Q2
let isAvailable= true;
let soPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        if (isAvailable) {
            resolve("Success");
        } else {
            reject("Fail");
        }
    },  1000);
});

soPromise
.then(
    value => console.log(value)
); 
soPromise.catch(
    err => console.log(err)
);


/*
Q3: Use async/await:
- Handle the promise in “Question 2” with async/await & try/catch, instead of “then & catch”
*/

// Answer Q3
async function soAsync (){
    let soPromise = await new  Promise((resolve, reject) =>{
        setTimeout(() => {
            if (isAvailable) {
                resolve("Success");
            } else {
                reject("Fail");
            }
        },  1000);
    });

    let result = soPromise;
    console.log (result);
}

try {
    soAsync();
    
} catch (err) {
    console.error(err);
    
}



