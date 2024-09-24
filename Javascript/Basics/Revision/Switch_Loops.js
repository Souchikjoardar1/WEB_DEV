let grade='c'
switch (grade) {
    case 'a':
        console.log("you're a a grader");
        break;
    case 'b':
        console.log("you're a b grader");
        break;
    case 'c':
        console.log("you're a bitch");
        break;
    default:
        console.log("enter valid grade");
        break;
}
let role = 'ceo'
let salary=100000
switch (role) {
    case 'ceo':
    case 'cto':
    case 'coo':
        salary += 0.05 * salary
        console.log("as a "+role+" your new salary is "+salary);
        break;
        case 'hr':
            salary += 0.03 * salary
            console.log("as a "+role+" your new salary is "+salary);
        break;
    default:
        console.log('enter valid role bitch');
        break;
}
// loops 
console.log("loops");
let score=0
for (; score <= 10; score++){
    console.log(score);
}
let score1 = 0;
while (score1 <= 10) {
    
    console.log(score1);
    score1++;
}
let score2 = 0;
do {
    console.log("do while");
    score2++;
}
while (score2 <= 10);
let marks = 0;
/* The forEach method in JavaScript is specifically designed to work 
with arrays. It executes a provided function once for each array element. 
It doesn't work with other data types directly.
 However, you can use it with array-like objects or iterable objects
  by converting them to arrays first.*/
