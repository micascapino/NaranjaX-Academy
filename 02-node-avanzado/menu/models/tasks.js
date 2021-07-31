const {Task} = require("./task");
require('colors');
class Tasks{
    _list = {};

    get listArray(){
        const list = [];
        Object.keys(this._list).forEach ( key =>{
            const task = this._list[key];
            list.push(task);
        });
        return list;
    }

    constructor(){
        this._list={};
    }

    //methods
    addTasksFromArray(tasks = []){
        tasks.forEach(task => {
            this._list[task.id] = task;
        });
    }

    fullList(){
        console.log("To do list:".cyan.bold);
        this.listArray.forEach((task,i) =>{
           //change the status color
            const status = task.completedAt ? "Completed".green : "Pending".red;
            const number = i+1;
            console.log(`${number} ${task.desc} :: ${status}`);
        })
    }

    listPendientCompleted(completed){
        //counter to enumerate every task listed.
        var number = 1;
        this.listArray.forEach( task => {
            const status = task.completedAt ? "Completed".green : "Pending".red;
            //case true (opt 3)
            if (completed){
                //completed
                if (task.completedAt){
                    console.log(`${number}. ${task.desc}`);
                    number+=1;
                }
                
            }
            //case false (opt 4)
            else{
                //!completed -> pending
                if (!task.completedAt){
                    console.log(`${number}. ${task.desc}`);
                    number+=1;
                }
            }
            }
        );
    }

    newTask(desc){
        const task = new Task(desc);
        this._list[task.id]=task;
    }

    deleteTask(id = ''){
        if (this._list[id]) //if id exists in my list
            delete this._list[id];
    }
}

module.exports = {Tasks};