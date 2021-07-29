var inquirer = require('inquirer');
require('colors');

const showMenu = async() => {        
    console.clear();
    console.log('=======================');
    console.log('   Select an option');
    console.log('=======================\n');
    const question = [
        {
            type: "list",
            name: "option",
            message: "Select an option",
            choices: [
                {value: "1", name:"1. New task"},
                {value: "2", name:"2. Show tasks"},
                {value: "3", name:"3. Show completed tasks"},
                {value: "4", name:"4. Show pending tasks"},
                {value: "5", name:"5. Complete task(s)"},
                {value: "6", name:"6. Delete task"},
                {value: "0", name:"7. Exit"},
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
            message: "Press ENTER to continue"
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