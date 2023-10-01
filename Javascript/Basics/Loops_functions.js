let name = "souchik"
for (let index = 0; index < 10; index++){  
    if (name != "souchik")
        break;
    else
    console.log("my name is " + name);
}
let index=0
while (index<10){ 
    console.log("nigga! "+name);
    index++
}
let sum = function natural_num(a) { //assuming a variable to a function and using it to call 
    let s=0
    for (let i = a; i <= 5; i++){
        s+=i
    }
    console.log("sum of 5 natural numbers is= " + s);
    return s;//using return keyword
}
let s=sum(1)//storing the return of a func into a variable 
//passing a function within a function
function x(callback) {
    console.log("hello");
    callback()
}
function y() {
    console.log("bye");
}
x(y)//the arguments of the function x is a function itself the callback() needs to be called inside the function x()
let x=function add(t,c) {
    return t+c //writing anything after the return statement will be ignored
}
x(10,20)