const argv = require('yargs')
        .option('n', {
            alias: 'number',
            type: 'number',
            demandOption:true,
            describe:'Defines the number value'
        })
        .option('l', {
            alias: 'list',
            type: 'boolean',
            demandOption:false,
            defaul:false,
            describe:'List table'
        })
        .check( (argv,options) => {
            let value = argv.n;
            if (isNaN (value))
                throw Error('The value must be a number.');
            else if((value < 1) && (value > 20))
                throw Error('The number must be between 1 and 20.');
            else return true;
        })
    .argv;

module.exports = {argv}