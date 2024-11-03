x();
function x() {
    let name = "inside function x"
    function y() {
        console.log(name);
        let website = "true"
        console.log(this);
    }
    y();
}
let a = () => {
    let name = ["i", "n", "s", "i", "d", "e", "a"]
    let b = () => {
        console.log(name);
        let access = true;
        console.log(this);
        name.forEach(e => {
            console.log(e);
        });
    }
    b()
}
a()
let add = (a, b) => (a + b) //implicit return parenthesis is neccessary 
let obj = () => ({ name: "souchik" })//while returning objects from arrow functions parenthesis is imp
console.log(obj())
console.log(add(40, 60));
let arr = [12, 45, 67, 34, 67]
arr.forEach(e => {
    console.log(e);

});
for (const e in arr) {
    console.log(e);
}
for (const e of arr) {
    console.log(e);
}
/*for-in loop:

Iterates over the enumerable properties of an object.
When used with an array, it iterates over the array indices (keys).
for-of loop:

Iterates over the values of an iterable object.
When used with an array, it iterates over the array elements (values).
forEach method:

Executes a provided function once for each array element.
Iterates over the array elements (values). */
/*Summary
for-in: Iterates over indices (keys) of the array.
for-of: Iterates over values (elements) of the array.
forEach: Iterates over values (elements) of the array.
Use for-of or forEach when you need to work 
with the elements of an array directly. 
Use for-in when you need to work with the
 indices or properties of an object. */
((...a) => {
    let sum = a.reduce((acc, val) => acc + val, 0)
    console.log("sum using acc val reduce method" + sum);
})(20, 56, 63);
let greet = "hello world!"
for (const e of greet) {
    console.log(`${e}`);

}
//  greet.forEach(e => {
//     console.log(`${e}`);

//  });
/*The error "not a function" typically occurs when you try to call
 a method on a variable that does not support that method. 
 In this case, it seems like greet is not an array or 
 does not have the forEach method.
 Steps to Diagnose and Fix
 Check the Type of greet: Ensure that greet is an array.
 Initialize greet Properly: If greet is not an array, initialize it as one. */
let m = new Map()
m.set('a', 1);
m.set('b', 2);
m.set('c', 3)
m.set('c', 3)//elements don't repeat themselves in maps
console.log(m);
console.log("using for-of");
for (const [key, value] of m) { //destructuring of a map
    console.log(`{${key}=>${value}}`);

}
console.log("using for-each");
/* The forEach method logs only the values because 
you’re using only one parameter in the callback, 
which by default corresponds to the value of each entry.*/
m.forEach((e, key) => {
    console.log(e, key);
});
let nums = [34, 56, 23, 78, 23]
// for-each loops accept item index and array as an argument in the call-back func
nums.forEach((item, index, array) => {
    console.log(`the item ${item} the index ${index} and the array [${array}]`);

});