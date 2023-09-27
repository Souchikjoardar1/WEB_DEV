//objects literals
const mysym= Symbol("key1")
const Jsuser = {
    name: "Souchik",
    age: 22,
    location: "kolkata",
    email: "souchik@gmail.com",
    isloggedin: "false",
    lastlogindays: ["MON", "TUES"],
    [mysym]: "mykey1",
}
//accessing this values
console.log(Jsuser.email + " " + Jsuser.age);
console.log(Jsuser.lastlogindays)
//method 2 since the values are treated as strings so he access them as strings as well
console.log(Jsuser["lastlogindays"])
console.log(typeof Jsuser[mysym])//value will be a string
//to convert this into a symbol use []
console.log(Jsuser[mysym])
//[mysym]: "mykey1" --> console.log(Jsuser[mysym])
Jsuser.email = "souchik@provip.com"
// Object.freeze(Jsuser)
console.log(Jsuser.email);
//after freezing changes won't be reflected
Jsuser.email = "souchiknigga@twitter.com"
console.log(Jsuser.email)//the changes werr not propagated
Jsuser.greeting =function()  {
    console.log("hello js user");
}
Jsuser.displayemail=  function () {
    console.log(`my new email is :- ${this.email}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.displayemail());