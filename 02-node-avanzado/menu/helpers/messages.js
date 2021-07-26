var colors = require('colors');

function showMenu(){
    console.log("======================".green);
    console.log("   Select an option".green);
    console.log("======================".green);
    console.log("What would you want to do?" + " (Use arrow keys) ".grey);
    console.log("1.".green + " New task");
    console.log("2.".green + " Show tasks");
    console.log("3.".green + " Show completed tasks");
    console.log("4.".green + " Show pending tasks");
    console.log("5.".green + " Complete task(s)");
    console.log("6.".green + " Delete task");
    console.log("0.".green + " Exit");

}

module.exports = {showMenu}