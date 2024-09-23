// changing the paragraph on click
document.querySelector('#changeTextButton').addEventListener(('click'),()=> {
    document.getElementById("myParagraph").textContent="text changed!"
    
})
// highlighting the first element
document.getElementById("highlightFirstCity").addEventListener(('click'), function() {
    let firstcityname = document.getElementById("citiesList").firstElementChild
    firstcityname.classList.add("highlight") 
    /*.highlight is a predefined css class
     designed to apply background color yellow 
     and text color black to any element*/
})
/*A DOMTokenList is an interface that represents a set of space-separated tokens. 
It is often used for manipulating classes on an element.
The classList property of an element
returns a DOMTokenList representing the element's class attribute.
The .classList property is a read-only property that returns
 a live DOMTokenList collection of the class attributes of the element.
This can be used to manipulate the classes of the element. 
The .add() method of DOMTokenList adds the specified class values to the element.
If the specified classes already exist, they are ignored.*/

// modifying the DOM
document.getElementById("changeOrder").addEventListener(("click"), function () {
    document.getElementById("coffeeType").textContent="Espresso"
})
// create and add and new list element
document.getElementById("addNewItem").addEventListener(("click"), function(){
    let newlistitem = document.createElement("li")
    document.getElementById("shoppingList").appendChild(newlistitem).textContent="new item"
})
// removing items from a list 
