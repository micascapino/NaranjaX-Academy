//this function checks the variables are numbers and then adds them.
var plus = ( x, y ) => {
    if (typeof x === "number" && typeof y === "number")
        return x + y; 
    else
        return("WARNING! the values must be numbers.");
}

//this function checks the variables are numbers and then subtract them.
var subtract = ( x, y ) => {
    if (typeof x === "number" && typeof y === "number")
        return x - y; 
    else
        return("WARNING! the values must be numbers.");
}

//this function checks the variables are numbers and then multiply them.
var multiply = ( x, y ) => {
    if (typeof x === "number" && typeof y === "number")
        return x * y;
    else
        return("WARNING! the values must be numbers.");
}

//this function divides two numbers unless the divider equals to zero.
var divide = ( x, y ) =>
{
if (typeof x === "number" && typeof y === "number"){
    if (y != 0)
        return x / y
    else
        return("WARNING! You cannot divide for zero.");
}
else{
    return("WARNING! The values must be numbers.");
}
}; 

var x = 3;
var y = 0;

console.log({x, y});
console.log("Addition: " + plus(x,y));
console.log("Subtraction: " + subtract(x,y));
console.log("Multiplication: " + multiply(x,y));
console.log("Division: " + divide(x,y));