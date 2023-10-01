const tinderuser = new Object();//singleton object
tinderuser.id = "1233abc";
tinderuser.name = "souchik";
tinderuser.isloggedin = false;
const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "souchik",
            lastname:"joardar"
        }
    }
}
console.log(regularuser.fullname?.userfullname.firstname);
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { obj1, obj2 };//wrong way to combine objects
console.log(obj3);
//we need to combine the objects obj1 and obj2
// const obj4 = Object.assign(obj1, obj2);
// console.log(obj4);
// the correct way to combine to objects is to use the spread operator
const obj4 = { ...obj1, ...obj2 }
console.log(obj4);
// ... is the spread operator
// while interracting with databases the data is returned in the form of an array of objects
const users = [
    {
        id: 1,
        email:"h@gmail.com"
    },
    {

    }
]
console.log(users[0].email);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
// entries is used to return an array containing all the key value pairs of the object
// in order to ask an object whether it contains a particular property or not we will use the hasOwnProperty method
console.log(tinderuser.hasOwnProperty('isloggedin'));
//how to: object destructuring
const course = {
    coursename: "webdev",
    courseid: 1234,
    price: "999",
    courseInstructor:"souchik"
}
console.log(course.courseInstructor);//trivial way
//the pro way using an alias instead of a  bulky variable name 
const { courseInstructor:ci } = course;
console.log("the course instructor is: "+ci);

