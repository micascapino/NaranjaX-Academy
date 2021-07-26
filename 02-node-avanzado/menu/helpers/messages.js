var colors = require('colors');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const showMenu = () =>{
    return new Promise((resolve,reject) => {
        console.log("======================".green);
        console.log("   Select an option".green);
        console.log("======================".green);
        console.log("What would you want to do?");
        console.log("1.".green + " New task");
        console.log("2.".green + " Show tasks");
        console.log("3.".green + " Show completed tasks");
        console.log("4.".green + " Show pending tasks");
        console.log("5.".green + " Complete task(s)");
        console.log("6.".green + " Delete task");
        console.log("0.".green + " Exit");

        rl.question("Select an option: ", (op) =>{
            if (op >= 1 || op <=6)
                resolve(op);
            else
                reject("The option must be betweet 1 and 6.");
            rl.close();
        })
    })
}

const pause = () =>{
    return new Promise((resolve,reject) =>{
        rl.question("Press " + "ENTER ".green + "to continue.",(input) =>{
            rl.close();
            resolve();
        })
    })
    
}

module.exports = {showMenu, pause}