const {Task} = require("./task");

class Tasks{
    list = {};

    constructor(tasks){
        this.list={};
    }

    newTask(desc){
        const task = new Task(desc);
        this.list[task.id]=task;
    }
}

module.exports = {Tasks};