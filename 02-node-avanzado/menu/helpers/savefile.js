const fs = require('fs');

const saveDB = (tasks) => {
    let fileName = "database/tasks.json";
    fs.writeFileSync(fileName,JSON.stringify(tasks))
}

module.exports = {saveDB};
