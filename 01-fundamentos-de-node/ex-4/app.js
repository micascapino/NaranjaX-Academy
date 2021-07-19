const fs = require('fs');

var createFile = require('../ex-3/create.js');

//we will use the table to concatenate the results
var table= "";

//we write "node app {number}" at the console.
const limit = 10;
const number = (process.argv[2]);


//we will replace the format of the file name according to the number choosen
const fileName = `table-${number}.txt`;
createFile(fileName,table,limit,number).then(fileName => {
    console.log("File created successfully :) \n");
    //shows this message when the file is created without errors.
}).catch(error => {
    console.log(error);
});

