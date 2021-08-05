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

const listTaskDelete = async(tasks = []) => {
    //shows the list of tasks we can delete.
    const choices = tasks.map((task) =>{
        return {value: task.id, name: task.desc}
    });

    choices.unshift({value: 0, name: "Cancel".yellow});

    const question = [
        {
            type:"list",
            name:"id",
            message:"Delete".red,
            choices
        }
    ]

    const {id} = await inquirer.prompt(question);
    return id;
}

const showListChecklist = async(tasks = []) => {
    //shows the list of tasks we can select
    const choices = tasks.map((task) =>{
        return {value: task.id, name: task.desc, checked: (task.completedAt)? true : false }
    });

    choices.unshift({value: 0, name: "Cancel".yellow});

    const question = [
        {
            type:"checkbox",
            name:"ids",
            message:"Selections".red,
            choices
        }
    ]

    const {ids} = await inquirer.prompt(question);
    return ids;
}

const confirm = async(message) => {
    const question = [
        {
            type: "confirm",
            name: "ok",
            message,
        }
    ];
    const {ok} = await inquirer.prompt(question);
    return ok;

}

module.exports = {showMenu, pause, readInput, listTaskDelete, showListChecklist, confirm};