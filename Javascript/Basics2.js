let grade = "A"
switch (grade) {
    case 'A':
        console.log("Grade A");
        break;
    case 'B':
        console.log("Grade B");
        break;
    case 'C':
        console.log("Grade C");
        break;
    default:
        console.log("Invalid grade");
        break;
}
let role = "CEO"
let salary = 10000
switch (role) {
    case "Engineer":{
        salary += 0.05 * salary
        console.log(salary);
        break
    }
    case "CIO": {
        salary += 0.10 * salary
        console.log(salary);
        break
    }
    case "CTO": {
        salary += 0.90 * salary
        console.log(salary);
        break
    }
    case "CEO": {
        salary += 2 * salary
        console.log(salary);
        }
    default:
        console.log("enter valid role");
}
