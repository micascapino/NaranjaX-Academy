let showFile = (fileName) => {
    const fs = require('fs');
    return new Promise((resolve, reject) =>{
        fs.readFile(fileName,(error,table) =>{
            if (error)
                reject(error);
            else
                resolve(table.toString());
                //"toString" is needed because readFile returns a buffer.
        });
    });
};

module.exports = showFile;
