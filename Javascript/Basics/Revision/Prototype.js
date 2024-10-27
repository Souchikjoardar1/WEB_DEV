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
