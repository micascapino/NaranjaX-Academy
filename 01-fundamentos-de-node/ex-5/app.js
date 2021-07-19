var colors = require('colors');
var createFile = require('../ex-3/create.js');
var showFile = require('../ex-3/read.js');
var table= "";

const limit = 10;
const number = (process.argv[2]);

//we will replace the format of the file name according to the number choosen
const fileName = 'table-'+ number +'.txt';

createFile(fileName,table,limit,number).then(fileName => {
    console.log("File created successfully :) \n".magenta.bold);
    //shows this message when the file is created without errors.
}).catch(error => {
    console.log(error);
});

showFile(fileName).then(table => {
    console.log(`Table found in "${fileName}":`.inverse);
    console.log(table.rainbow);
     //reads the whole table from the file given. 
}).catch(error => {
    console.log(error);
});