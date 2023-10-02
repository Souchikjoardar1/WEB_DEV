const user = {
    username: "souchik",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} welcome to the website`);
        console.log(this)//inside the scope pf the function this returns the object itself
    }
}
user.welcomeMessage()
//outside the scope of the function this in the node env returns an global empty object
console.log(this)
//in a browser this returns the window object 
function coffee() {
    console.log(this)//returns the window object
}
coffee()
// The window object in JavaScript browser runtime environment represents the browser window that contains the DOM document. It is the global object in the browser's JavaScript runtime environment and provides access to various properties and methods, such as the document object, which represents the DOM of the current page, and the alert() method, which displays a message box.
// arrow functions
// arrow functions are anonymous functions
// arrow functions do not have their own this keyword
const addtwonumbers = (num1, num2) => {
    return num1 + num2
}
console.log(addtwonumbers(3435, 5466))
/*Implicit return: Arrow functions automatically return the value of the expression without needing to use the return keyword.
No binding of this: Arrow functions do not bind their own this value, so they inherit the this value from the surrounding code. 
This can be useful in certain situations where you want to maintain the context of this.*/
const substractnum = (num1, num2) => Math.abs(num1 - num2)
console.log(substractnum(34, 67));
//when we are using {} we need to use the return keyword
//when we using () we do not need to use the return keyword
// in case of returning an object we need to wrap the object in {}
const username = (name, loc) => ({ name, loc });
console.log(username("souchik", "kolkata"));
//Immediately Invoked Function Expression (IIFE)
//IIFE is a function that runs as soon as it is defined
//IIFE is a function expression
//IIFE is not hoisted
//IIFE is used to avoid polluting the global scope
(function () {
    console.log("Immediately Invoked function expression");
})();
(function me(name) {
    console.log(`${name} is a nigga `);
})('souchik');