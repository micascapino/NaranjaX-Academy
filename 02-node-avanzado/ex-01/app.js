//initialice an empty array.
var array = [];

//complete array with [0,1,2,3,4]
for (let i=0; i<5;i++){
    addNumber(i,showArray);
}  

function addNumber(number,callback) {
    if (isNaN(number))
        throw new Error("Must add a number.");
    else{
        array.push(number);
        callback();
    }

}

function showArray(number,callback) {
    if (array.length === 0)
        throw new Error("This array is empty");
    else
        console.log(array);
}
