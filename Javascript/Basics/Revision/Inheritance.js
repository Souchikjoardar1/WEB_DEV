class User{
    constructor(username) {
        this.username=username
    }
    logMe() {
        console.log(`Username is: ${this.username}`);
        console.log(`Password is: ${this.password}`);
        console.log(`Email is: ${this.email}`);
        
    }
}
class Teacher extends User{
    constructor(username, email, password) {
        super(username)
        this.password = password
        this.email=email
    }
    addCourse() {
        console.log(`a course was added to ${this.username}`);
    }
}
const chai = new Teacher("chai", "chikowski123@gmail.com", "13254")
chai.logMe()
chai.addCourse()
const masalaChai = new User("masalaChai")
masalaChai.logMe()
console.log(Teacher instanceof User);
