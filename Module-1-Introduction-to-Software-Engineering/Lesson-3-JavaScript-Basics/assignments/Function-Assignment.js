// 1. Write a function that takes in an array of numbers and returns a new array containing the numbers with one added to each
// // Example you pass in the following array [1, 2, 3] the function should return [2, 3, 4]
const addOneToArray = numbers => {
    let newArray = [];
    for (let i = 0; i < numbers.length; i++) {
        newArray.push(numbers[i] + 1);
    }
    return newArray;
};

let originalArray = [1, 2, 3, 4, 5];
let newArray = addOneToArray(originalArray);
console.log(newArray);



// 2. Write a function that takes in a string, and a letter, and returns true or false if the string contains the letter.
// // Example string = "happy birthday", letter = "a", should return true
// // Example string = "happy birthday", letter = "q" should return false


 stringLetter = (str, letter) => {
    
    str = str.toLowerCase();
    letter = letter.toLowerCase();
    
  
    return str.includes(letter);
};

console.log(stringLetter("happy birthday", "a")); 
console.log(stringLetter("happy birthday", "q")); 


// 3. Write a function that takes in an array of full names (formatted "firstName lastName"), and returns a new array containing only first names.
// // Example array = ["Tom Smith", "Bob Jones", "Bill Williams"] returns ["Tom", "Bob", "Bill"]

let FirstNames = (fullNames) => {
    let firstNames = [];
    for (let i = 0; i < fullNames.length; i++) {
        let firstName = fullNames[i].split(" ")[0];
        firstNames.push(firstName);
    }
    return firstNames;
};

let namesArray = ["Tom Smith", "Bob Jones", "Bill Williams"];
let firstNamesArray = FirstNames(namesArray);
console.log(firstNamesArray);


// 4. Write a function that takes in a name and a greeting and logs a string greeting the person to the console.
// // Example name = "John Boy" greeting = Goodnight, returns "Goodnight John Boy"

let myGreetPerson = (theName, greeting) => {
    console.log(`${greeting} ${theName}`);
};


let theName = "John Boy";
let greeting = "Goodnight";
myGreetPerson(theName, greeting)


// 5. Write a function that takes in the year someone was born and returns their age.
// // Example: birth year: 2000 returns 23

const calcAge = (birthYear) => {
    let currentYear = new Date().getFullYear(); // Get the current year
    return currentYear - birthYear;
};


let birthYear = 2000;
let age = calcAge(birthYear);
console.log("Age:", age);