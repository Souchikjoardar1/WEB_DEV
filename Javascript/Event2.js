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
document.getElementById("removeLastTask").addEventListener(("click"), function () {
    document.getElementById("taskList").lastElementChild.remove()
})
// Event handling display an alert by clicking a button
document.getElementById("clickMeButton").addEventListener(("dblclick"), function () {
    alert("clicked me ")
})//dblclick event means a doubleclick event
let newlistitem2 = document.createElement("li");
let newli = document.getElementById("teaList").appendChild(newlistitem2);
newli.textContent = "not a type of tea";

let tealist = document.getElementById("teaList"); // Ensure tealist is defined

tealist.addEventListener("click", function (e) {
    if (e.target.matches('.teaItem')) { // Check if there are any elements with the class "teaItem"
        alert("clicked on " + e.target.textContent);
    }
}); 
/*The e.target.matches('.teaItem') statement 
is used to check if the element
 that triggered the event (e.target)
 matches a specific CSS selector, in this case, 
 the .teaItem class. */
 
//  displaying the feedback submitted by the user upon clicking the submit 
document.getElementById("feedbackForm").addEventListener(("submit"), function (e) {
    e.preventDefault()
    // let feedback = document.getElementById("feedbackInput").textContent
    let feedback = document.getElementById("feedbackInput").value
    document.getElementById("feedbackDisplay").textContent=`The feedback is: ${feedback}`
    /*.textContent is used to get or set the text content of an element, 
    which includes all text within the element, including its children. 
    However, for input elements like <input> or <textarea>, .textContent
    does not apply because these elements do not have child nodes that contain text
    On the other hand, .value is used to get or set the current value of an input element.
    This is why .value gives you the correct result for an input element,
    while .textContent does not. */
})
document.getElementById("domStatus").textContent="dom loaded successfully"
// text changes color on clicking the toggle highlight button
document.getElementById("toggleHighlight").addEventListener(("click"), function (e) {
    document.getElementById("descriptionText").classList.toggle("highlight")
})