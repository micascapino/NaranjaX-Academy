let createFile = (fileName, table, limit,number) => {
    const fs = require('fs');

    for (let i = 1; i < limit+1; i++)
        table+=(`${number} x ${i} = ${i*number} \n`);
    
    return new Promise((resolve, reject) =>{
        fs.writeFile(fileName,table,error =>{
            if (error)
                reject(error);
            else
                resolve(table);
        });
    });
}

module.exports = createFile;


