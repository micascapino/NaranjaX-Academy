const { stat } = require("fs");
const {Task} = require("./task");

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

    newTask(desc){
        const task = new Task(desc);
        this._list[task.id]=task;
    }
}

module.exports = {Tasks};