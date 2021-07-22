//initialice an empty array.
var array = [];

//complete array with [0,1,2,3,4]
for (let i=0; i<5;i++){
    completeArray(i,add);
}  

function completeArray(number,callback) {
    callback(number);
}

function add(number) {
    array.push(number);
}