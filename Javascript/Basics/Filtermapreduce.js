const coding = ["ruby", "js", "python"]
const values = coding.forEach((item) => {
    console.log(item)
    return item //cannot return values from for each loop
})
console.log(values)
const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newnums= mynums.filter((num) => num > 4 )
console.log(newnums);
let newnums1 = mynums.filter((num) => {
    return num<4
})//inside {..} we will have to use the return keyword to return the item applying the appropriate filters 
console.log(newnums1)