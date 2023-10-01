let flag=false
function addtwonumbers(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        flag = true;
        return (`${num1}+${num2} = ` + (num1 + num2));
    }
    else
        console.log("Invalid input");
}
let result = addtwonumbers(10, 'a')
if (flag) {
    console.log(result);
}
else
    result
function loginusermessage(username) {
    if (username)
        return `welcome ${username}`;
    else
        return 'the user is not logged in';
}
console.log(loginusermessage());
// !username because in JavaScript, undefined, null, 0, NaN, false, and an empty string ('') are all falsy values. Therefore, !username will return true if username is undefined, null, or an empty string.
// how to pass multiple parametres in a function by using rest operator ...
function calculatecartprice(...num1) {
    return (num1);
}
console.log(calculatecartprice(23, 546, 345, 456));
const user = {
    username:'' ,
    price:NaN
}
function handleobject(anyobject) {
    if (anyobject.username && anyobject.price)
        console.log(`the username is ${anyobject.username} and the price is ${anyobject.price}`);
    else
        console.log("enter proper values");
}
// handleobject(user)
handleobject({ //alternative way of passing object keys and values in a function call 
    username: 'souchik',
    price: 1000
})
const mynewarray = [200, 300, 400]
function returnsecondvalue(getnewArray) {
    return getnewArray[1];    
}
console.log(returnsecondvalue(mynewarray));