const { argv } = require('../config/yargs');
var createFile = require('../ex-3/create.js');
var showFile = require('../ex-3/read.js');

//we will use the table to concatenate the results
var table= "";

//we write "node app --number={value here}" at the console.
const limit = 10;
const number = argv.n;

//we will replace the format of the file name according to the number choosen
const fileName = `table-${number}.txt`;

createFile(fileName,table,limit,number)
    .then(fileName => {
        //shows this message when the file is created without errors.
        console.log("File created successfully :) \n");
        })
    .catch(error => {console.log(error);}
    );

if(argv.l){
    showFile(fileName).then(table => {
    console.log(`Table found in "${fileName}":`.inverse);
    console.log(table.rainbow);
     //reads the whole table from the file given. 
    }).catch(error => {
        console.log(error);
    });
}