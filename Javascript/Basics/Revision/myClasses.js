// introduced in ES6
class User{
    constructor(username,email,password) {
        this.username = username
        this.email = email
        this.password=password
    }
    /*
    Instance Methods: Methods defined inside the class are automatically
    instance methods. You do not need to use the function keyword because
    the class syntax inherently understands that these are methods.
    */
    encryptPassword() {
        return `${this.password}abc`
    }
    changeUsername(){
    return `${this.username.toUpperCase()}`
    }
}
const chai = new User("chai", "chai123@gmail.com", "123")
console.log(chai.encryptPassword())
console.log(chai.changeUsername())


// behind the scences 
User.prototype.encryptPassword= function() {
    return `${this.password}abc`
}
User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}