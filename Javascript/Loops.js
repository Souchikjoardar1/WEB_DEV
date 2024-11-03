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
for (let [key, value] of Object.entries(obj)) { // destructuring of the object
    // break the iteration when value of the key age becomes = 23
    if (value == (this.age= 23)) break;
    console.log(`[ '${key}' , '${value}' ]`);
}
console.log(`the values of ${obj.age} and ${obj.name} are unaltered since the object was frozen `);
// deep copy and shallow copy in js  objects
let o1 = {
    1: "a",
    2: "b",
    3: "c"
}
let o2 = {
    4: "d",
    5: "e",
    6: "f"
}
console.log(...Object.entries(o1), ...Object.entries(o2));
// eg of shallow copy
let o3 = { ...o1, ...o2 }
/* In JavaScript, you need to use bracket notation([]) 
to access object properties when the property names 
are not valid identifiers or are dynamically determined*/
o3[2] = "souchik" 
console.log(o3)
console.log(o1[2]);
/*Valid identifiers must start with a letter, 
underscore (_), or dollar sign ($) and can contain 
alphanumeric characters, underscores, and dollar signs.
Numeric property names, even though they are valid keys
in an object, do not meet these criteria and thus 
cannot be accessed using dot notation. */
// eg of deep copy
let o4 = o1 = o2 = o3
console.log(o4);
o4[1] = "svibsdjvn"
console.log(o4);
console.log(o1[1]);
console.log(o1);
