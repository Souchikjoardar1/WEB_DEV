// creating promises in Js
/* 
    Pending: The initial state of a promise.
    It means the promise is neither fulfilled nor rejected.
    Fulfilled: The state when the asynchronous operation completes successfully,
    and resolve() is called.
    Rejected: The state when the asynchronous operation fails, and reject() is called.
    Then: The then method is used to specify what to do when the promise is fulfilled.
*/
const promiseOne = new Promise(function (resolve,reject) {
    // do an async task
    // database calls
    setTimeout(function(){
        console.log('async task is completed');
        resolve()
    }, 1000);
})
promiseOne.then(function(){
    console.log('promise consumed');
    
})
/*
    new Promise(function (resolve, reject) {...}): This creates a new promise. 
    The function passed to the Promise constructor is called the executor function.
    It takes two arguments: resolve and reject.
    setTimeout(function(){...}, 1000): Simulates an asynchronous task 
    (e.g., a database call) that takes 1 second to complete.
    resolve(): This is called when the asynchronous task completes successfully.
    It changes the promise's state from "pending" to "fulfilled".
    promiseOne.then(function(){...}): This method is used to handle the promise 
    once it is fulfilled. The function inside then is executed when resolve()
    is called in the promise.
*/
/* 
    Flow of the Code
    A promise promiseOne is created.
    Inside the promise, an asynchronous task is simulated using setTimeout.
    After 1 second, the message 'async task is completed' is logged, 
    and the promise is resolved.
    The then method is used to log 'promise consumed' once the promise is fulfilled.
*/
new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log("async task 2 ");
        resolve()
    },1000)
})
.then(function () {
    console.log('Async 2 resolved');
    
})
/* 
    Creation: A new promise is created. 
    Inside the promise, a setTimeout function simulates an 
    asynchronous task that takes 1 second.
    Resolution: After 1 second, the promise is resolved with an object
    containing username and email.
    Consumption: The then method is used to handle the resolved value,
    logging the user object to the console.
*/
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            username:"kafka", email:"kafka1@gmail.com"
        })
    },1000)
})
promiseThree.then(function (user) {
    console.log(user);
})
/*
    Creation: Another promise is created with a setTimeout function
    that simulates an asynchronous task taking 1 second.
    Conditional Resolution/Rejection: The promise checks the error variable.
    If error is false, it resolves with a user object. If error is true, 
    it rejects with an error message.
    Consumption:
    The first then logs the user object and returns the username.
    The second then logs the username.
    The catch method handles any errors by logging the error message.
    The finally method logs a message indicating that the promise has either
    been resolved or rejected.
*/
const promiseFour = new Promise(function (resolve,reject) {
    setTimeout(function () {
        let error = true
        if (!error)
            resolve({
        username:"chikowski",password:"abc"
            })
        else
            reject('Error:Something went wrong')
    },1000)
})
    const username=promiseFour.then((user)=> {
    console.log(user);
    return user.username
    })
        .then((username) =>
        {
            console.log(username)
        })
        .catch((error)=>
        {
            console.log(error);            
            return error
        })
        .finally(() =>
            console.log("promise is either resolved or rejected !")
)
   /*
    Creation: A promise is created with a setTimeout function that simulates
    an asynchronous task taking 1 second.
    Conditional Resolution/Rejection: The promise checks the error variable.
    If error is false, it resolves with a user object. If error is true,
    it rejects with an error message.
    Consumption with async/await:
    The consumePromiseFive function is an async function that uses await
    to wait for the promise to resolve or reject.
    The try block attempts to await the promise and logs the response if it resolves.
    The catch block logs any errors if the promise is rejected.
   */
const promiseFive = new Promise(function (resolve,reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({username:'javascript',password:'123'})
        }
        else {
            reject('ERROR: JS went wrong')
        }
    },1000)
})  
    //   async await doesn't handle errors directly
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    }
    catch(err) {
        console.log(err);
    }
}
consumePromiseFive()
/*
    Fetching Data from an API with async/await
    Function Definition: An async function getAllUsers is defined to fetch data from an API.
    Fetching Data: The fetch function is used to make an HTTP request to the API.
    The await keyword waits for the response.
    Parsing JSON: The response is converted to JSON format using response.json().
    Logging Data: The data is logged to the console.
    Error Handling: Any errors during the fetch or JSON parsing are caught and logged.
*/
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);        
    }
    catch (err) {
        console.log("Err: ",err);
    }
}
getAllUsers()
/*
    Fetching Data from GitHub API
    Fetching Data: The fetch function is used to make an HTTP request to the GitHub API.
    Parsing JSON: The response is converted to JSON format using response.json().
    Logging Data: The data is logged to the console.
    Error Handling: Any errors during the fetch or JSON parsing are caught and logged.
*/
fetch('https://api.github.com/users/Souchikjoardar1')
    .then((response) => {
    return response.json()
    })
    .then((data) => {
    console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
/*
Promises: Used to handle asynchronous operations. 
They can be resolved or rejected based on the outcome of the operation.
then Method: Used to handle the resolved value of a promise.
catch Method: Used to handle errors if the promise is rejected.
finally Method: Executes code regardless of whether the promise was resolved or rejected.
async/await: Provides a more readable way to work with promises, 
using try/catch for error handling.
*/
