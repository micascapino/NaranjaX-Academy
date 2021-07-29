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

    constructor(tasks){
        this._list={};
    }

    newTask(desc){
        const task = new Task(desc);
        this._list[task.id]=task;
    }
}

module.exports = {Tasks};