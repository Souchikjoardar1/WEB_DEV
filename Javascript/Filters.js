const a = ["dfg", 23, "sgr", 34]
let m = a.filter((x) => x > 2)
let z = []
/* in case of for-each loop we'll have to create a new empty
 array and push the filtered elements to it then display the 
 newly generated array */
a.forEach((i) => {
    if (i > 2)
        return z.push(i);
})
console.log("using filter: " + m);
console.log("using for-each: " + z);
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
// practising filter() filtering only the history books 
let b = books.filter((i) => (i.genre) === "History")
let c = books.filter((i) => (i.edition < 2010) && (i.genre === "Non-Fiction"))
console.log("\n filtering only the history books:- ");
console.log(b);
console.log("\n filtering books published before 2010th edition && are of genre non-fiction:- ");
console.log(c);
