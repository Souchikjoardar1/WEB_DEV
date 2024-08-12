function isleapyear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("the year " + year + " is a leap year");
    } else {
        console.log("the year " + year + " is not a leap year");
    }
}
isleapyear(1968)
function greet(name) {
    console.log(`hello ${name}!`);
}
greet("chikowski")
/* The function `multiply(a, b = 1)` is a JavaScript function that takes two parameters: `a` and `b`. The `b` parameter has a default value of `1`. 

Here's how it works:

1. When you call`multiply(5)`, the function receives one argument `5` which is assigned to the parameter`a`.Since no second argument is provided, the default value `1` is used for `b`.The function then multiplies`a` and`b`(i.e., `5 * 1`) and logs the result `5` to the console.

2. When you call`multiply(5, 2)`, the function receives two arguments `5` and `2` which are assigned to `a` and `b` respectively.In this case, because a second argument is provided, the default value for `b` is ignored.The function then multiplies `a` and`b`(i.e., `5 * 2`) and logs the result `10` to the console.

Default parameters in JavaScript functions are used when no argument is provided for that parameter, or when the argument is`undefined`.They help to make functions more flexible and prevent errors that could occur from missing arguments.*/
// function with default parametre
function multiply(a, b = 1) { 
    console.log(a * b);
}
multiply(5); // Output: 5
multiply(5, 2); // Output: 10
// functions taking unlimited arguments
function a(...numbers) {
    console.log(numbers);
}
a(10, 78, 89, 23, 45, 45)
// arrow functions
/* this keyword can't be used they don't have their own this context they inherit from their parent scope (window)*/
/*we can remove the parenthesis if there's only one args param */
let mult = (a,b)=>{ //this is an anonymous function
    return this.a*this.b
}
// this won't work here 
console.log(mult(10, 20));
// arrow function in a single line
let printnum = (...n) => console.log(n);
printnum(20, 78, 56, 23)
// since this is an arrow function arguments object is unavailable
// The arguments object is an array-like object that allows you to access the arguments passed to a traditional function. However, in arrow functions, arguments is not defined.
// let nums = () => console.log(arguments);
// nums(45, 56, 32, 88, 56)
function n(a,b) {
    console.log(arguments);
}
n(45,56)