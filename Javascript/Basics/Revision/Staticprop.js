class User{
    constructor(username) {
        this.username=username
    }
    logMe() {
        console.log(`username is ${this.username}`);
    }
    // this function can only be accessed inside this class can't be inherited
    /*
    The static keyword defines a static method for the class.
    Static methods are called on the class itself, not on instances of the class.
    In this code, createId is a static method of the User class.
    this refers to the instance of the class.
    When logMe is called on an instance, this.username accesses the username 
    property of that instance.
    */
    // static createId() {
    //     console.log(`the unique id for ${this.username} is:`, Math.floor(Math.random()*1000))
    // }
    createId() {
        console.log(`the unique id for ${this.username} is:`, Math.floor(Math.random()*1000))
    }
}
const chikowski = new User("chai")
chikowski.createId()
/*
    Instance Method createId: Logs a unique ID for the user instance.
    Creating User Instance: chikowski is an instance of User with username "chai",
    and createId logs its unique ID.
    Class Teacher: Inherits from User, adds an email property, and initializes both 
    username and email in its constructor.
*/
class Teacher extends User{
    constructor(username,email) {
        super(username)
        this.email=email
    }
    /*
    This method logs a unique ID for the user.
    this.username refers to the username property of the instance.
    Math.floor(Math.random() * 1000) generates a random number between 0 and 999.
    const chikowski = new User("chai"); creates a new instance of the User class
    with the username "chai".
    chikowski.createId(); calls the createId method on the chikowski instance, logging 
    the unique ID for "chai".
    class Teacher extends User defines a new class Teacher that inherits from the User class.
    The constructor method of Teacher takes two parameters: username and email.
    super(username); calls the constructor of the User class, initializing the username property.
    this.email = email; initializes the email property for the Teacher instance.
    */
}
const iphone = new Teacher("phone", "i@phone.com")
iphone.logMe()