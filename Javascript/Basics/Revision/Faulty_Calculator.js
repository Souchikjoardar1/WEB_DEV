let random = Math.random();
let a = prompt("enter the first number")
let b = prompt("enter the second number")
let c = prompt("enter the operator to be performed")
// create an object specifying the type of errors to commit under certain probablistic conditions
let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}
if (random < 0.1) {
   c=obj[c]
      console.log(eval(`${a}${c}${b}`));
    }
    else {
        console.log(eval(`${a}${c}${b}`));
    }   