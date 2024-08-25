let chances = Math.random()
console.log("\n Press 1: for addition \n Press 2: for substraction \n Press 3: for mulitplication \n Press 4: for division");
let ch=parseInt(prompt("\n Enter your choice: "))
if (chances < 0.1)
{
    switch (ch) {
        case 1:
            let a = parseInt(prompt("\n enter a number"));
            let b = parseInt(prompt("\n enter another number "))
            return ("the result is", (a+b))
            break;
    
        default:
            return "wrong input"
            break;
    }
}