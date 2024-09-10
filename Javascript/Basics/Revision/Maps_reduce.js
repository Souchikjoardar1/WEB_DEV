// adding 10 to an array all numbers
// chaining map and filter()
const nums = [12, 45, 34, 90, 23]
let y = nums.map((i) => (i + 10)).map((i) => (i * 20)).filter((i) => (i > 40))
// operations: adding +10 to all elements then *10 after which filter all elements >40 
console.log(y);
/* reduce((accu,curr)=>accu+curr,ini) method set the initial value to 0
 the first value to be stored in accumulator is initial value then after
  adding accu+curr the value of acc will be revised to the sum */
const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let ini = 0
let x = n.reduce((acc, curr) => acc + curr, ini)
console.log("summing all elements to return the sum using .reduce() method the arrow function way :- " + x);
// reduce(function(x,y){return x+y},0) here this {},0 signifies the initial value of the accumulator (x)
let c = n.reduce(function (x, y) {
    return x + y
}, 0)
console.log("summing all elements to return the sum using .reduce() method the function way :- " + c);
// adding prices up in a shopping cart
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
let totalcartprice = shoppingCart.reduce((a, c) => c.price + a, 0)
console.log("the total price of all the cart items is:- ", totalcartprice);