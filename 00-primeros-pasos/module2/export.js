let showFile = (fileName, table) => {
    const fs = require('fs');
    return new Promise((resolve, reject) =>{
        fs.readFile(fileName,(error,table) =>{
            if (error)
                reject(error);
            else
                resolve(table);
        });
    });
};

module.exports = showFile;
