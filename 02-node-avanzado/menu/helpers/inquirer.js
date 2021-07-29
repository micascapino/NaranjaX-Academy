var inquirer = require('inquirer');
require('colors');

const showMenu = async() => {        
    console.log('======================='.green);
    console.log('   Select an option'.green);
    console.log('=======================\n'.green);
    const question = [
        {
            type: "list",
            name: "option",
            message: "Select an option".bold,
            choices: [
                {value: "1", name:"1.".cyan + " New task"},
                {value: "2", name:"2.".cyan + " Show tasks"},
                {value: "3", name:"3.".cyan + " Show completed tasks"},
                {value: "4", name:"4.".cyan + " Show pending tasks"},
                {value: "5", name:"5.".cyan + " Complete task(s)"},
                {value: "6", name:"6.".cyan + " Delete task"},
                {value: "0", name:"7.".cyan + " Exit"},
            ]
        }
    ];    
    const {option} = await inquirer.prompt(question);;
    return option;
}

const pause = async() =>{
    
    const question = [
        {
            type: "input",
            name: "enter",
            message: "Press " + "ENTER ".green + "to continue"
        }
    ];
    await inquirer.prompt(question);
};

const readInput = async(message) => {
    const question = [
        {
            type: "input",
            name: "desc",
            message,
            validate ( value ){
                if (value.length === 0){
                    return ("Please write a valid description.");
                }
                return true;
            }
        }
    ];
    const {desc} = await inquirer.prompt(question);
    return desc;
}

module.exports = {showMenu, pause, readInput};