// import React from 'react'
/*
The warning "React defined but never used" means that the React import
is present in your code, but you are not using it directly within the file.
In modern React (since React 17), you don't need to import React when using JSX,
but some tools might still expect it.
If you are using React 17 or later, you can safely remove the React
*/

/*
    The state of the app in React refers to the current values of data that determine
    how your app looks and behaves at any given moment. This includes things like the
    data shown on the screen, user input, and other variables that change over time.
    Think of it as the app’s "memory" or "current condition."
    In React, state is managed within components (which are like individual sections of your app).
    When the state changes, React updates the relevant part of the user interface (UI)
    to match the new state, ensuring that what the user sees on the screen is accurate.
    Example to Illustrate App State
    Imagine a shopping cart in an online store. The state of the app might include:
    The number of items in the cart
    The total price
    Whether the user is logged in or not
    If a user adds an item, the app’s state changes to reflect the new number of items
    and the updated total price. React will then update only the parts of the UI related
    to the cart to show the new item count and total. This ensures that the UI 
    (the shopping cart display) is consistent with the current state of the app
    (the actual items and price in the cart).
    Why Is This Important?
    Keeping the UI in sync with the app's state ensures that:
    Users see accurate information (e.g., the right items and prices).
    Bugs are reduced because the UI reliably reflects what’s in the app’s memory.
    Debugging is easier since you can look at the state and see where it might differ
    from what you expect.
*/
import ReactDOM from 'react-dom/client'
/*
    What is react-dom/client?
    react-dom/client is a part of React used to display (render) your React components in a web browser.
    It provides the tools you need to get your React app running on the page.
    Why is it important?
    It gives us methods to start a React app and display it inside a specific part of the page (like a <div>).
    Key Methods in react-dom/client
    createRoot():

    This is the main method used in React 18 and later to display your app.
    It sets up a “root” in the DOM (a place where your app will live on the page) and renders your component
    tree (all the React components you’ve created) into it.
    Think of createRoot() as the command to tell React, “Start my app here in this part of the page!"
*/
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root'))
  .render(
  /*In React, rendering refers to the process of converting React components into 
  the actual HTML elements that the browser can understand and display on the screen.
  */
    <App />
)
/*
  why virtual DOM ?
    Updates are sent to the Document Object Model (DOM) after every change to reflect
    the change in the application When the DOM is updated, the browser recalculates 
    CSS, does layout, and repaints the screen. This process can be slow, especially 
    if there are many UI components.
    Speeding up updates
    The virtual DOM allows React to immediately update the parts of the DOM that need changing,
    instead of sending updates for every change. 
    Reducing re-renders
    The virtual DOM eliminates unnecessary re-renders of DOM elements. 
    Batching updates
    The virtual DOM sends updates to the real DOM in batches, which is more efficient 
    than sending updates for each change. 
    Improving consistency
    The virtual DOM ensures that the UI remains consistent with the app's state,
    which reduces bugs and makes debugging easier. 
    Simplifying coding
    The virtual DOM allows developers to design user interfaces declaratively, which 
    simplifies coding and maintenance. 
    No direct DOM manipulation: You don’t tell React how to add each new task to the DOM step-by-step.
    Instead, you declare what you want to display (<li key={index}>{task}</li>) based on the tasks array,
    and React takes care of updating the DOM for you.
    Automatic Updates: When the tasks state changes, React automatically re-renders the <ul> list with the 
    new tasks. You don’t need to worry about reloading the entire list manually.
    Simpler Code: You focus only on the logic (what happens when you add a task) and let React handle the
    details of making the UI match the current tasks state.
    Supporting cross-platform development
    The virtual DOM supports cross-platform development with tools like React Native. 
    The virtual DOM is a JavaScript object that represents the original DOM. It works by: 
    Creating a snapshot of itself before the update 
    Comparing the changes with the snapshot to determine what has changed 
    Applying only the necessary changes to the real DOM 
*/