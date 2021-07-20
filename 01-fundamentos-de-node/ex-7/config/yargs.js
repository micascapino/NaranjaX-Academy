const argv = require('yargs')
        .option('n', {
            alias: 'number',
            type: 'number',
            demandOption:true,
            describe:"Defines the number value"
        })
        .option('l', {
            alias: 'list',
            type: 'boolean',
            demandOption:false,
            defaul:false,
            describe:"List table"
        })
        .check( (argv,options) => {
            if (isNaN (argv.n))
                throw new Error("The value must be a number.");
            if(argv.n < 1 && argv.n > 20)
                throw new Error("The number must be between 1 and 20.");
            return true;
        })
    .argv;

module.exports = argv;