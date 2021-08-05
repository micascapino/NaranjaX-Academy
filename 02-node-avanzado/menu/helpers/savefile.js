const fs = require("fs");
const filePath = "database/tasks.json";

const saveDB = (tasks) => {
    fs.writeFileSync(filePath, JSON.stringify(tasks));
};

const readDB = () => {
    if (fs.existsSync(filePath)) {
        const list = fs.readFileSync(filePath, { encoding: "utf-8" });
        const data = JSON.parse(list);
        return data;
    } else { return ("File not found.".red); }
};

module.exports = { saveDB, readDB };