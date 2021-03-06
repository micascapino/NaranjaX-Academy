const { showMenu, pause, readInput, listTaskDelete, showListChecklist, confirm } = require("./helpers/inquirer");
const { saveDB, readDB } = require("./helpers/savefile");
const { Tasks } = require("./models/tasks");

const dataDB = readDB();

const main = async () => {
    let opt = "";
    const tasks = new Tasks();

    if (dataDB) { tasks.addTasksFromArray(dataDB); }

    do {
        console.clear();

        // the user selects an option here
        opt = await showMenu();
        switch (opt) {
        case "1": // add tasks
            const desc = await readInput("Description:");
            tasks.newTask(desc);
            break;
        case "2": // show tasks
            tasks.fullList();
            break;
        case "3": // Show completed tasks
            tasks.listPendientCompleted(true);
            break;
        case "4": // Show pending tasks
            tasks.listPendientCompleted(false);
            break;
        case "5": // Complete task(s)
            const ids = await showListChecklist(tasks.listArray);
            tasks.toggleCompleted(ids);
            break;
        case "6": // delete task
            const id = await listTaskDelete(tasks.listArray);
            console.log({ id });
            if (id !== 0) {
                const ok = await confirm("Are you sure?");
                if (ok) {
                    tasks.deleteTask(id);
                    console.log("Task deleted!".red);
                }
            }
            break;
        }
        saveDB(tasks.listArray);
        await pause();
    } while (opt !== "0");
};

main();
