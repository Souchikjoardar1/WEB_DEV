console.log("upskill JS")
// javascript treats infinity as infinty only
// BigInt: 45n
// undefined memory space has been assigned but no value exists
// all primitive types in JS are treated as Objects object {key:value}
var name = 'souchik'
let Name = "souchik123"
console.log(Name);
console.log(name);
if (name === 'souchik')
    console.log("his name is " + name);
else
    console.log("his name is " + Name);
let divident = 10
let divisor = 0
let result = (divident / divisor)
if (result != Infinity)
    console.log(result);
else
    console.log("divisor as to be >0");
console.log(typeof (result)); //infinity is a number
// ternary 
let userlogin = false
userlogin ?console.log("welcome to the site"):console.log("please login ");