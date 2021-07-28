const { showMenu, pause } = require("./helpers/inquirer");
const {Task} = require("./models/task");
const {Tasks} = require("./models/tasks");
require('colors');

const main = async() => {
    let opt = '';
    do{
        opt = await showMenu();
        const task = new Task("Buy food");
        console.log(task);

        const tasks=new Tasks();
        tasks.list[task.id]=task;
        console.log(tasks);
        
        await pause();

    }while (opt !== '0');
}

main();
