const fs = require('fs');

//feel free to edit the numbers here below
const limit = 10;
const number = 5;

//we will use the table to concatenate the results
var table = "";

for (let i = 1; i < limit+1; i++){
    table+=(`${number} x ${i} = ${i*number} \n`);
}

//we will replace the format of the file name according to the number choosen
const fileName = 'table-'+ number +'.txt';
//the writefile method has a callback to catch errors
fs.writeFile(fileName,table,error =>{
    if (error)
        console.log(error)
    else
        console.log("File created successfully :)");
        //shows this message when the file is created without errors.
});