let numbers = [1, 23, 45, 33]
//from ending of the array
push = numbers.push(12);
console.log(numbers);
console.log("the pushed element " + push);
p = numbers.pop();
console.log(numbers);
console.log("the popped number " + p);
//starting of the array
numbers.shift();
console.log(numbers);
shift = numbers.unshift(12);
console.log(shift);
let number = ['I', 'love', 'javascript']
// not including end
console.log(number);
console.log(number.splice(0, 2))
const arr = ['t', 'r', 'e']
console.log(arr.slice(-2));
//shallow copy seperate memory locations are used
const nums = [1, 2, 3, 4]
const copynums = nums.slice()
copynums[0]='souchik'
console.log(nums);
console.log(copynums);
