const { showMenu, pause } = require("./helpers/inquirer")
require('colors');

const main = async() => {
    let opt = '';
    do{
        opt = await showMenu();
        console.log({opt});
        await pause();

    }while (opt !== '0');
}

main();
