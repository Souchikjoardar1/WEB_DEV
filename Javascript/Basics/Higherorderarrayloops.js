let arr = ['superman', 'batman', 'spidernam'];
for(const i of arr) {
    console.log(i);
}
let m = new Map();//creating maps in js
m.set(123,'souchik')
m.set(345, 'joardar')
for ([key, value] of m) {//destructing the maps 
    console.log(`key:- ${key} value:- ${value}`)
}
let str = 'souchik'
for (let i of str) {
    if (i === 'c') {
        break;
    }
    console.log(i);
}
//destructuring an object 
let obj = {
    name: 'souchik',
    city: 'kolkata',
    age:22
}
let { name:n } = obj //aliasing the variable name
console.log(n);
// for (const i of obj) {this will throw an error as objects are not iterable
//     console.log(i);
// }
for (const i in obj) {//iterating over an object using for in loop
    console.log(`keys:- ${i} values:- ${obj[i]}`);
}
//iterating over an array using for in loop
for (const i in arr) {
    console.log(i);//this will print the keys of the array
}
// keys of an array are basically thr indexes of the array
console.log('displaying the keys of the map');
// for (const i in m) {//won't be able to iterate over the map using for in loop
//     console.log(i);
// }