class User{
    constructor(username) {
        this.username=username
    }
    logMe() {
        console.log(`username is ${this.username}`);
    }
    // this function can only be accessed inside this class can't be inherited 
    static createId() {
        console.log(`the unique id for ${this.username} is:`, Math.floor(Math.random()*1000))
    }
}
const chikowski = new User("chai")
chikowski.createId()
class Teacher extends User{
    constructor(username,email) {
        super(username)
        this.email=email
    }
}
const iphone = new Teacher("phone", "i@phone.com")
iphone.logMe()