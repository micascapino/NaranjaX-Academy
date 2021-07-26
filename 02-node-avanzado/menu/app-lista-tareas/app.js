const { showMenu } = require("../helpers/messages");
const { pause } = require("../helpers/messages");

console.clear();

const main = async() => {
    await showMenu();
    await pause();
}


main();
