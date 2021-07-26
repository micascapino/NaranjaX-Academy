const { showMenu, pause } = require("../helpers/messages");
var colors = require('colors');

console.clear();
const main = async() => {
    let op= "";
    do{
        op = await showMenu();
        await pause();

    }   while (op !== 0)
}

main();
