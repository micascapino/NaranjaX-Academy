const hirePlayer = new Promise( (resolve, reject) => {
    //random posibilities
    const hire = Math.random() >= 0.5;

    if(hire){
        resolve('The player joins our team.')
    }
    else{
        reject('Oh no! The player and the team didnt reach an agreement yet.')
    }
})

hirePlayer
       .then( mensaje => readMe(mensaje))
       .catch( error => console.log(error))

function readMe(argument) {
    console.log("Hurray! "+ argument);
}