const { showMenu, pause, readInput } = require("./helpers/inquirer");
const { saveDB,readDB } = require("./helpers/savefile");
const { Tasks } = require("./models/tasks");

const main = async() => {
    let opt = '';
    var tasks=new Tasks();

    do{
        opt = await showMenu(); 
        switch(opt){
            case '1':
                const desc = await readInput("Description:");
                tasks.newTask(desc);
                break;
            case '2':
                const data= readDB();
                console.log(data);
                break;
            //not implemented yet
            case '3':
                break;  
            case '4':
                break;  
            case '5':
                break; 
            case '6':
                break; 
        
        }
        saveDB(tasks.listArray);
        await pause();

    }while (opt !== '0');
}

main();
