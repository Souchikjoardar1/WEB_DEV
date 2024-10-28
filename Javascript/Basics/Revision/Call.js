function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log('called !');
    
}
function createUser(username, email, password) {
    // 'this' refers to the new instance created by 'new createUser'
    /*
    the call method is used to transfer the this context
    from createUser to SetUsername, ensuring that both functions operate
    on the same object instance.
    */
    SetUsername.call(this, username)// Pass the current 'this' context to SetUsername
    /* the method is called but as soon as it's called the function along with it's
    execution context is popped out of the stack
    we need to hold the execution context along with the reference */
    this.email = email
    this.password=password
}
const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
/*
Lexical Scoping:
Arrow functions capture the this value from the surrounding lexical context at
the time they are defined, not when they are called.
No Own this:
Arrow functions do not have their own this context. They do not get their own 
this value when called, unlike regular functions.
Usage in Methods:
When used inside methods, arrow functions can be useful to avoid issues with
this binding, especially in callbacks or nested functions.
Arrow functions do not have their own this context. 
Instead, they inherit this from the enclosing lexical context 
(the context in which the arrow function was defined). This means that
the value of this inside an arrow function is the same as the value of this in 
the surrounding code.
*/