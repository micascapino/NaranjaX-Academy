const { showMenu, pause } = require("../helpers/messages");
var colors = require('colors');

const main = async() => {
    let op= "";
    do{
        console.clear();
        op = await showMenu();
        await pause();

    }   while (op !== '0');
}

main();
