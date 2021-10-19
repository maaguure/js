//Assignment Five
/*Q1: Create a custom Error object called “NotEqual”.
- Create a function called “equalValues” that takes (a, b).
- Check if a & b are equal.
- If they’re equal return true.
- If they’re not equal throw the “NotEqual” error with the message “Values are not equal”.
- Use try/catch to handle the error, when calling the function. */

// Answer Q1
const notEqual = new Error ("Values are not equal");

const  equalValues = (a,b) => {
    if (a == b){
        return "the two numbers a and b are equal"
    } else {
        throw notEqual ;
    }    
}

try {
    console.log ("result is " + equalValues(4,5) ) ;
} catch (err) {
    console.error(err);
}





/*Q2: Print the following global variables.
- The variable that holds the absolute path to the currently executing file.
- The variable that holds the absolute path to the directory that the currently executing file is in. */
// Answer Q2 

const currentPathName = __filename
const currentDirctoryName = __dirname
console.log("current path of Executing file is " + currentPathName);
console.log("current directory of Executing file is " + currentDirctoryName);


/*Q3: Using the appropriate methods in the module “path”, log out the following:
- The basename of the executing file (app.js).
- The extension name of the executing file (app.js). */
// Answer Q3

const path = require('path')
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.basename(__dirname));



/*Q4: Reading and Writing Files:
- Read the code of your executing file.
- Write the output in string format to file called “output.txt”. */

//Answer Q4 

'use strict';
const { readFileSync } = require('fs');
const data = readFileSync(__filename);
// console.log(contents);
const { join } = require('path');
const { writeFileSync } = require('fs');
const out = join(__dirname, 'output.txt');
writeFileSync(out, data.toString());
console.log("success ")



/*Q5: Log out the following:
- The process id.
- The process uptime.
- The Operating System platform.
- The OS free memory.
- The OS total memory */

'use strict';
const process = require('process');
const os = require('os');
console.log('Process ID', process.pid);
console.log('Process UpTime', process.uptime());
console.log('The Operating System platform', os.platform());
console.log('The OS free memory Is',os.freemem());
console.log('The OS total memory ia',os.totalmem());

