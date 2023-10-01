let add = (a, b) =>a + b;

console.log(add(10, 20));
let print = a => console.log(a);
print(100)
const person = { //normal function inside an object 
    name: 'john',
    place: 'kolkata',
    greet: function(){
        console.log(`this in normal function `+this);
        console.log(`hi my name is ${this.name} and I live in ${this.place}`);
    }
}
person.greet();
const person1 = { //arrow functions in objects 
    name: 'elton',
    place: 'new york',
    greet: ()=> console.log(`I'm ${this.name} I live in ${this.place}`),
}
person1.greet()
// arrow function takes it's this from it's parent