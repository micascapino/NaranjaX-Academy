const { showMenu, pause, readInput } = require("./helpers/inquirer");
const { saveDB,readDB } = require("./helpers/savefile");
const { Tasks } = require("./models/tasks");

const dataDB = readDB();

const main = async() => {
    let opt = '';
    var tasks=new Tasks();

    if (dataDB)
        tasks.addTasksFromArray(dataDB);
    
    do{
        console.clear();
        
        //the user selects an option here
        opt = await showMenu(); 
        switch(opt){
            case '1': //add tasks
                const desc = await readInput("Description:");
                tasks.newTask(desc);
                break;
            case '2': //show tasks
                tasks.fullList();
                break;
            case '3': //Show completed tasks 
                tasks.listPendientCompleted(true);
                break;  
            case '4': //Show pending tasks 
                tasks.listPendientCompleted(false);
                break;  
                
            //not implemented yet
            case '5': //Complete task(s) 
                break; 
            case '6': //delete task
                break; 
        
        }
        saveDB(tasks.listArray);
        await pause();

    }while (opt !== '0');
}

main();
