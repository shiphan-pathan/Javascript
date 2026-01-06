// The DOM is a programming interface that represents an HTML document as a tree structure, where each HTML element is a node.
// DOM is not part of JavaScript — it is provided by the browser.

// JavaScript uses the DOM to:
// Read HTML elements
// Modify content, styles, and attributes
// Handle events (click, input, submit, etc.)


// Difference between innerHTML and textContent?
//innerHTML	      //textContent
//Parses HTML	   //Plain text
//XSS risk	      //Safe
//Slower	        //Faster


// Event Bubbling & Capturing (Frequently Asked)
// Bubbling → child → parent (default)
// Capturing → parent → child

element.addEventListener("click", handler, true); // capturing



// What is preventDefault()?
// Stops default browser behavior (form submit, link navigation).

document.getElementById("id")        // single element
document.getElementsByClassName()   // HTMLCollection
document.getElementsByTagName()
document.querySelector()            // first match
document.querySelectorAll()         // NodeList

//querySelector supports CSS selectors