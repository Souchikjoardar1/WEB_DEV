// let a = 10
// let b = 40
// // non parameterized
// function add() {
//     return(a+b);
// }
// console.log(add())
// // parameterized
// function add1(a,b) {
//     return(a+b)
// }
// console.log(add1(234, 345))
// let name = "souchik"
// n=name.slice(2,5)
// console.log(n);
function isleapyear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("the year " + year + " is a leap year");
    } else {
        console.log("the year " + year + " is not a leap year");
    }
}
isleapyear(1968)