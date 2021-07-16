const fs = require('fs');
var showFile = require('./read.js');
var createFile = require('../module2/create.js');

//we will use the table to concatenate the results
var table= "";
//feel free to edit the numbers here below
const limit = 10;
const number = 10;
//we will replace the format of the file name according to the number choosen
const fileName = 'table-'+ number +'.txt';

createFile(fileName,table,limit,number).then(fileName => {
    console.log("File created successfully :) \n");
    //shows this message when the file is created without errors.
}).catch(error => {
    console.log(error);
});

showFile(fileName).then(table => {
    console.log(`Table found in "${fileName}":`);
    console.log(table);
     //reads thw whole table from the file given. 
}).catch(error => {
    console.log(error);
});
