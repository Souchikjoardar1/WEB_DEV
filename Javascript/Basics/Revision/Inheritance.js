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
}
const user = new Teacher("chai", "chikowski123@gmail.com", "13254")
user.logMe()