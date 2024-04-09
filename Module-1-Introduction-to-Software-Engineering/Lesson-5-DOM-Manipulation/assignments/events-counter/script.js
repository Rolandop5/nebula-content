// COUNTER EXERCISE

// Select the body element from index.html
const AddBodyElem = document.body;

// Set an attribute of 'style' to the body tag and add a background color of anything other than white
AddBodyElem.setAttribute('style', 'background-color: lightblue');

/* -------------------------------------------------------------------------- */

// Create an h1 element
AddBodyElem.setAttribute('style', 'background-color: lightblue');


// Append a new h1 element to the body element as a child
AddBodyElem.setAttribute('style', 'background-color: lightblue');


// Add text to the h1 element 
AddBodyElem.setAttribute('style', 'background-color: lightblue');

// Assign the background color of this element to something unique
AddBodyElem.setAttribute('style', 'background-color: lightblue');

// Set a new style attribute to the h1 element
AddBodyElem.setAttribute('style', 'background-color: lightblue');

// Add font size to the h1Element

AddBodyElem.setAttribute('style', 'background-color: lightblue');


// Set the default text to the number zero

AddBodyElem.setAttribute('style', 'background-color: lightblue');

/* -------------------------------------------------------------------------- */


// Create a button element to increment the h1 text
AddBodyElem.setAttribute('style', 'background-color: lightblue');

// Append the button element to the body element

AddBodyElem.setAttribute('style', 'background-color: lightblue');

// Add text to the boxButton
const addH1Elem = document.createElement('h1');


// Add a class attribute to boxButton
AddBodyElem.appendChild(addH1Elem);

/* -------------------------------------------------------------------------- */

// Create another button element to decrement the h1 text
addH1Elem.textContent = '0';


// Add the button element to the body element
addH1Elem.style.backgroundColor = 'lightgreen'; 

// Add text to the button element
addH1Elem.setAttribute('style', 'font-size: 24px'); 

// Add a class attribute of style to the button element

/* -------------------------------------------------------------------------- */
// ADD BUTTON FUNcTION
// Create functionality that, when you click this button it increases the h1 value

// Create functionality that, when you click this button it decreases the h1 value



addH1Elem.style.fontSize = '24px';
addH1Elem.textContent = '0';

const incrementButton = document.createElement('button');


AddBodyElem.appendChild(incrementButton);


incrementButton.textContent = 'Increment';


incrementButton.classList.add('boxButton');


const decrementButton = document.createElement('button');


/* -------------------------------------------------------------------------- */
// DELETE BUTTON FUNCTION 

AddBodyElem.appendChild(decrementButton);


decrementButton.textContent = 'Decrement';


decrementButton.classList.add('boxButton');

incrementButton.addEventListener('click', function() {
    let currentValue = parseInt(addH1Elem.textContent);
    addH1Elem.textContent = currentValue + 1;
});

decrementButton.addEventListener('click', function() {
    let currentValue = parseInt(addH1Elem.textContent);
    addH1Elem.textContent = currentValue - 1;
});

const resetButton = document.createElement('button');


AddBodyElem.appendChild(resetButton);

resetButton.textContent = 'Reset and Clear';

resetButton.addEventListener('click', function() {
    addH1Elem.textContent = '0';
});
