// Grab the elements and log them to the console

// Q1:  Attach this document to the index.html


// Q2:  Grab the second element that has the text Hello
const secondHelloElement = document.querySelectorAll('h1');
let count = 0;
let secondHelloText;

secondHelloElement.forEach(element => {
    if (element.textContent.trim() === "Hello") {
        count++;
        if (count === 2) {
            secondHelloText = element.textContent;
        }
    }
});

console.log('Second element with text "Hello":', secondHelloText);


// Q3:  Grab the text in the h1 that says 'Good Afternoon'
/*const goodAfternoonElement = document.querySelectorAll('h1:contains("Good Afternoon")');


if (goodAfternoonElement) {
    const goodAfternoonText = goodAfternoonElement.textContent;
    console.log('Text in the h1 that says "Good Afternoon":', goodAfternoonText);
} else {
    console.log('No h1 element contains the text "Good Afternoon"');
}

console.log('Text in the h1 that says "Good Afternoon":', goodAfternoonText);*/

// Q4:  Grab the h1 with the text that says "Catch me if you can"

const h1Elements = document.querySelectorAll('h1');

let catchMeHeading;

for (let i = 0; i < h1Elements.length; i++) {
    if (h1Elements[i].textContent.trim() === 'Catch me if you can') {
        catchMeHeading = h1Elements[i].textContent;
        break; 
    }
}

console.log('h1 with text "Catch me if you can":', catchMeHeading);

// Q5:  Grab the span element and change the text to "Got ya"


const spanElement = document.querySelector('span');
spanElement.textContent = "Got ya";

console.log('Changed span text to "Got ya":', spanElement.textContent);