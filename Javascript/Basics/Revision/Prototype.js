/* 
    Property Shadowing
    Property shadowing occurs when an object has a property
    or method that has the same name as a property or method
    in its prototype chain. The object's own property or method
    "shadows" the one in the prototype chain, meaning it takes precedence.
*/
const myDate = new Date(1995, 11, 17);

console.log(myDate.getTime()); // 819129600000

myDate.getTime = function () {
    console.log("something else!");
};

myDate.getTime(); // 'something else!'
/*
    Calling a Method from the Prototype: Here, myDate.getTime() calls the getTime method 
    from Date.prototype, which returns the number of milliseconds since January 1, 1970.
    Shadowing the Prototype Method:
    This line assigns a new function to myDate.getTime. 
    Now, myDate has its own getTime method, which shadows the getTime 
    method from Date.prototype.
    Calling the Shadowed Method:
    When myDate.getTime() is called now, it executes the new function
    defined in step 3, which logs "something else!" to the console.
    Prototypes allow objects to inherit properties and methods.
    Property shadowing occurs when an object defines a property or method that has
    the same name as one in its prototype chain, causing the object's property or 
    method to take precedence.
    Prototypes allow objects to inherit properties and methods.
    Property shadowing occurs when an object defines a property or method that has
    the same name as one in its prototype chain, causing the object's property or 
    method to take precedence.
*/
function multiplyby5(num) {
    return num*5
}
multiplyby5.power = 2
console.log(multiplyby5(5))
console.log(multiplyby5.power);
/*
Default Behavior: The prototype property of a function is an empty object by default.
Purpose: The prototype property is used to define properties and methods that should
be shared by all instances created by the function when used as a constructor.
*/
console.log(multiplyby5.prototype);
function createUser(username, score) {
    this.username = username
    this.score=score
}
createUser.prototype.increment = function () {
    this.score++
}
createUser.prototype.printMe = function () {
    console.log(`Score is: ${this.score}`);
    
}
const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)
chai.printMe()
chai.increment()

let myName = "chikowski    "
String.prototype.trueLength = function () {
    return this.trim().length
}
console.log(`length of my name is ${myName.trueLength()}`);

let myHeroes = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function () {
        console.log(`spider power is ${this.spiderman}`);
    }
}
/*
Regular Objects: Regular objects (i.e., objects created using object
literals or Object.create) do not have a .prototype property because 
they are not intended to be used as blueprints for creating multiple instances.
Prototype Chain: Every JavaScript object has an internal property called [[Prototype]],
which can be accessed using __proto__. This property points to the prototype object
from which the object inherits methods and properties.
Adding Methods: By using object.__proto__.methodName = function() { ... },
you can add methods to the prototype of a regular object. This makes the method 
available to the object and any other objects that inherit from the same prototype.
*/
heroPower.getSpiderPower()
heroPower.__proto__.getThorPower = function () {
    /* This adds the getThorPower method to the prototype of the heroPower object.
     The method returns the value of the thor property.*/
    return `thor power is ${heroPower.thor}`
}
heroPower.getThorPower()
/*
Purpose of .prototype: The .prototype property is used to define methods
and properties that should be shared among all instances created by the constructor
function. This helps in memory efficiency and ensures that all instances
have access to the same methods.
.prototype Property: Available only to constructor functions for defining shared 
methods and properties.
__proto__ Property: Used to access and modify the prototype of regular objects.
Adding Methods: Methods can be added to the prototype of regular objects using
 __proto__, making them available to the object and its prototype chain.
*/