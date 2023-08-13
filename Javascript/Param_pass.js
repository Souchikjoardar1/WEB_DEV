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
a("souchik",22,"kolkata")//arguments is an array like data structure 