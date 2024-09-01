// a symbol is not a constructor so don't use the new keyword
const sym = Symbol();
let obj = {
    "name": "souchik",
    "age": 23,
    "pin": 144,
    x: (a, b) => (a + b),
    [sym]:"secret-value" //use square braces for symbols inside an obj
}
console.log("exploring the datatypes of the elements inside the obj "+typeof(obj.name)+" "+typeof(obj.age)+" "+typeof(obj.pin)+" "+typeof(obj.x));
console.log("passing args into a function inside an obj "+obj.x(20,10));

console.log("for-in loop");
for (let i in obj) {//for-in loop: Iterates over the enumerable properties (keys) of an object.
        console.log(i);
        
}

console.log("for-of loop");
for (let i of Object.entries(obj)) {
    // for-of loop: Iterates over the values of an iterable object(such as arrays, strings, maps, etc.).
        console.log(i);
        
}

console.log("do-while loop ");
let i = 0
    do {
        console.log(i);
        i++
        
} while (i <= 10);
    
console.log("for-each loop");
// a normal object is non iterable iterable objects are strings arrays to make normal objects iterable we'll use the Object.entries(obj_name) function
Object.entries(obj).forEach(e => {
    console.log(e);
    
});
// declaring and accessing a symbol as key of an object 
console.log("accessing the secret value from the symbol defined inside the obj: "+obj[sym]);
// to access a symbol within an object use obj-name[symbol-name]
console.log("the data type of the secret value stored in symbol: "+ typeof obj[sym]);
// Object.freeze() method 
Object.freeze(obj)
obj.name = "babu" //no effect
obj.age = 10//no effect
// prove that values of keys are unaltered 
for (let [key, value] of Object.entries(obj)) {
    // break the iteration when value of the key age becomes = 23
    if (value == (obj.age= 23)) break;
    console.log(`[ '${key}' , '${value}' ]`);
}
console.log(`the values of ${obj.age} and ${obj.name} are unaltered since the object was frozen `);

