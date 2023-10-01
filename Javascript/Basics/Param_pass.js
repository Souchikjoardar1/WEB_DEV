const name = "Souchik"
function greet(name) {
    console.log(`Hello ${name}!`);
}
greet(name)
// function with default parameter
function greeting(n = `Guest`) {
    console.log(`Hello ${n}!`);    
}
greeting("bruh ")
greeting()//the default param will be executed since no argument is passed
let num = [1, 2, 3, 4]
function printarrayelements(n) {
    console.log("the array elements are :");//printing arrays without loops
    console.log(n);
}
printarrayelements(num)
//passing parameters without order in consideration pass as objects
function person({name,city}) {
    console.log(`you're ${name} from ${city}  `);
}
person({ city: "kolkata", name: "Souchik" })
// `` is used to print the variable actual value in the console log by using ${}
// unlimited arguments old syntax
function a() {
    console.log(arguments.callee);//displays  the name of the fucntion which is calling this function
    console.log("the number of params in this function is " + arguments.length);
    console.log(arguments);//displays any number of arguments
    // convert the arguments into an array to apply all array functions
    const array = Array.from(arguments)
    console.log("arguments converted into an array "+array);
}
a("souchik", 22, "kolkata")//arguments is an array like data structure 
function b(...number) {
    console.log(number);
}
b(1, 2, 3) //this will be convert any number of arguments passed into the function into an array 
b("souchik", "joardar", "chikowski")
// returning the sum of any number of arguments using Array.reduce()accumulator and reduce parameters
function anysum(...numbers) {
    let sum = numbers.reduce(function (acc, curr) {
        return acc+curr
    }, 0);
    return sum
}
console.log("the sum of the numbers are: "+anysum(1, 2, 334, 45, 33));