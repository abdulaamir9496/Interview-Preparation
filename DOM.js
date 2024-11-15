// Here are some common DOM-related questions you may encounter in a JavaScript interview:

// 1. What is the DOM?
// The DOM (Document Object Model) is an interface that allows programming languages like JavaScript to interact with the structure of HTML and XML documents. It represents the document as a tree structure where each element is a node. JavaScript can manipulate these nodes to change the document dynamically.

// Example:

// javascript Copy
// const element = document.getElementById("myElement");
// element.innerHTML = "New Content!";

// 2. What are the different ways to access elements in the DOM?
// You can access elements using the following methods:
// getElementById(): Accesses an element by its unique ID.
// getElementsByClassName(): Accesses elements by their class name (returns a live HTMLCollection).
// getElementsByTagName(): Accesses elements by their tag name (returns a live HTMLCollection).
// querySelector(): Selects the first matching element using CSS selectors.
// querySelectorAll(): Selects all matching elements using CSS selectors (returns a static NodeList).

// Example:

// javascript Copy
// const elementById = document.getElementById('myId');
// const elementByClass = document.getElementsByClassName('myClass');
// const firstDiv = document.querySelector('div');

// 3. What is the difference between getElementById() and querySelector()?
// getElementById(): Used to select an element by its ID. It returns a single element.
// querySelector(): Can select an element by any CSS selector, such as a class, ID, tag, or a more complex query. It also returns only the first match.

// Example:

// javascript Copy
// getElementById
// const header = document.getElementById('header');

// querySelector
// const header2 = document.querySelector('#header'); // Same as above


// 4. What is the difference between querySelector() and querySelectorAll()?
// querySelector() returns the first matching element found in the document.
// querySelectorAll() returns all matching elements as a static NodeList (not live).

// Example:

// javascript Copy
// const firstDiv = document.querySelector('div'); // Only the first <div>
// const allDivs = document.querySelectorAll('div'); // All <div> elements

{/* <div class="my-class">Div 1</div>
<div class="my-class">Div 2</div>
<div class="my-class">Div 3</div>
<div class="my-class">Div 4</div>
<div class="my-class">Div 5</div>

<script>
  // Use :nth-of-type() to select the 5th div
    const fifthDiv = document.querySelector('div:nth-of-type(5)');
  console.log(fifthDiv.textContent); // Output: Div 5
</script> */}


// 5. What is innerHTML and outerHTML?
// innerHTML: Returns or sets the HTML content inside an element (excluding the element itself).
// outerHTML: Returns or sets the entire HTML of an element, including the element itself.

// Example:

// javascript Copy
// const div = document.getElementById('myDiv');
// console.log(div.innerHTML); // Content inside the div
// console.log(div.outerHTML); // Full HTML including the div tag itself


// 6. What is event delegation?
// Event delegation is a technique where you attach a single event listener to a parent element 
// instead of individual child elements. This helps in efficiently managing events, 
// especially in cases of dynamic content where new elements are added after the event listener has been set.

// Example:

// javascript Copy
// document.getElementById('parent').addEventListener('click', function(e) {
//     if (e.target && e.target.matches('button.classname')) {
//         alert('Button clicked!');
//     }
// });


// 7. What is the purpose of preventDefault() and stopPropagation()?
// preventDefault(): Prevents the default behavior of an event (e.g., prevents form submission when the submit button is clicked).
// stopPropagation(): Prevents the event from bubbling up or propagating through the DOM tree.

// Example:

// javascript Copy
// document.getElementById('myButton').addEventListener('click', function(e) {
//   e.preventDefault(); // Prevent the default action
//   e.stopPropagation(); // Prevent the event from bubbling
// });


// 8. What are createElement(), appendChild(), and removeChild() used for?
// createElement(): Creates a new element in the DOM.
// appendChild(): Appends a child element to a parent element.
// removeChild(): Removes a child element from a parent.

// Example:

// javascript Copy
// const newDiv = document.createElement('div');
// newDiv.innerHTML = "Hello, World!";
// document.body.appendChild(newDiv); // Adds new div to body

// document.body.removeChild(newDiv); // Removes the new div


// 9. What is the DOMContentLoaded event?
// The DOMContentLoaded event fires when the HTML document has been completely loaded and parsed, without waiting for stylesheets, images, or subframes to finish loading.

// Example:

// javascript Copy
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('DOM is fully loaded');
// });

// JavaScript code:
// document.addEventListener("DOMContentLoaded", () => {
//     console.log("DOM fully loaded and parsed, ready to manipulate!");
//     // You can safely access and modify DOM elements here
// });

// In short, DOMContentLoaded ensures that your script runs as soon as the HTML is fully parsed into the DOM tree, 
// regardless of whether external resources are still loading.


// 10. What are setAttribute() and getAttribute() used for?
// setAttribute(): Sets a specific attribute to an element.
// getAttribute(): Retrieves the value of a specific attribute from an element.

// Example:

// Javascript code:
// const div = document.getElementById('myDiv');
// div.setAttribute('data-id', '12345'); // Set a custom data attribute
// console.log(div.getAttribute('data-id')); // Get the value of the data-id attribute



// 11. What is the difference between textContent and innerText?
// textContent: Returns the text content of an element, including text from hidden elements.
// innerText: Returns the visible text content of an element, 
//excluding hidden elements and CSS styles that affect visibility.

// Example:

// javascript Copy
// const div = document.getElementById('myDiv');
// console.log(div.textContent);  // Includes hidden text
// console.log(div.innerText);    // Excludes hidden text


// 12. What is documentFragment?
// documentFragment is a lightweight container that can hold a portion of the DOM. 
// It allows you to perform DOM manipulations off-screen and then append the fragment to the document in one operation, 
// reducing reflows and improving performance.

// Example:

// javascript Copy
// const fragment = document.createDocumentFragment();
// const newDiv = document.createElement('div');
// newDiv.innerHTML = "Hello from the fragment!";
// fragment.appendChild(newDiv);
// document.body.appendChild(fragment); // Adds the fragment to the body


// 13. What is the window object in JavaScript?
// The window object represents the browser window and provides access to the DOM, location, history, 
// and other properties and methods that control the browser window's behavior.

// Example:

// javascript Copy
console.log(window.innerHeight); // Height of the browser window
window.alert('Hello, World!'); // Display an alert
