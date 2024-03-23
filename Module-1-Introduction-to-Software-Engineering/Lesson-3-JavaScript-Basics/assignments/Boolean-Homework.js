//1. Write a statement that checks if 2 and 'two' are equal
const x = 2
const tTwo = "two"
if (x === tTwo) {
    console.log("2 and 'two' are equal.");
} else {
    console.log("2 and 'two' are not equal.");
}

//2. Write a statement that checks if '2' and 2 are loosely equal

const yText = '2'
const y = 2

if (yText == y) {
    console.log(" '2'  and 2 are loosely equal.");
} else {
    console.log(" '2' and 2 are not loosely equal.");
}
//3. Write a statement that checks if 14 and '14' are strictly equal

const sEqual = 14
const nEqual = '14' 

if (sEqual === nEqual) {
    console.log("14 and '14' are strictly equal.");
} else {
    console.log("14 and '14' are not strictly equal.");
}


//4. Write a statement that checks if 10 is greater than -100
const pNum = 10
const nNum = -100

if (pNum > nNum) {
    console.log("10 is greater than -100.");
} else {
    console.log("10 is not greater than -100.");
}
//5. Write a statement that checks if 4 is strictly equal to the rounded value of 4.4
let a = 4
let b = 4.4

if (a === Math.round(b)) {
    console.log("4 is strictly equal to the rounded value of 4.4.");
} else {
    console.log("4 is not strictly equal to the rounded value of 4.4.");
}
//6. Write a statement that checks if 10 is greater than or equal to 9.1 rounded up


let A = 10
let B = Math.ceil(9.1)


if (A >= B) {
    console.log("10 is greater than or equal to 9.1 rounded up.");
} else {
    console.log("10 is not greater than or equal to 9.1 rounded up.");
}

//7. Write a statement that checks if 10 is greater than 2 and 3 is greater than 4
let myN1 = 10
let myN2 = 2
let myN3 = 3
let myN4 = 4

if (myN1 > myN2 && myN3 > myN4) {
    console.log("Yes 10 is greater.")
} else {
    console.log("No, 3 is less than 4.")
}



// // 7.a Without changing any of the numbers, or their order. How do we make this print true?
//By Changing the AND (&&) operator to the (||) operator
//let myN1 = 10
//let myN2 = 2
//let myN3 = 3
//let myN4 = 4

//if (myN1 > myN2 || myN3 > myN4) {
//    console.log("Yes 10 is greater.")
//} else {
//    console.log("No, 3 is less than 4.") 

//8. Pick a number between 1-20 and assign it to a variable
const randWaterMelon = Math.floor(Math.random() * 20) + 1


// // This is the number of watermelons you purchased.
console.log('This is the number of watermelons you purchased.' + " "  +  randWaterMelon)

// // If your number of watermelons is 1 or 2, console.log 'Looks like you like watermelon'
// // If your number of watermelons is more than 2, console.log 'Thats a lot of watermelon'
// // If your number of watermelons is more than 5, print, 'Thats too many watermelon!'
// // If your number of watermelons is more than 10, print, 'You must be CRAZY for watermelon!'
// // If your number of watermelons is more than 15, print, 'Did you have a coupon?'

if (randWaterMelon === 1 || randWaterMelon === 2) {
    console.log('Looks like you like watermelon')
} else if (randWaterMelon > 2 && randWaterMelon <= 5) {
    console.log('That\'s a lot of watermelon')
} else if (randWaterMelon > 5 && randWaterMelon <= 10) {
    console.log('That\'s too many watermelons!')
} else if (randWaterMelon > 10 && randWaterMelon <= 15) {
    console.log('You must be CRAZY for watermelon!')
} else if (randWaterMelon> 15) {
    console.log('Did you have a coupon?')
}


//   if(numOfWM === 1 || numOfWM ===  2) {
//     console.log('Looks like you like watermelon')
//   } else if (numOfWM > 2 && numOfWM <= 5) {
//     console.log('Thats a lot of watermelon')
//   } else if (numOfWM > 5 && numOfWM <= 10){
//     console.log('Thats too many watermelon!')
//   } else if (numOfWM > 10 && numOfWM <= 15) {
//     console.log('You must be CRAZY for watermelon!')
//   } else {
//     console.log('Did you have a coupon?')
//   }

const numOfWM = Math.floor(Math.random() * 20) + 1;

// Log the randomly generated number of watermelons

console.log(`Number of watermelons purchased: ${numOfWM}`)

// Check the number of watermelons purchased and log the appropriate message
if (numOfWM === 1 || numOfWM === 2) {
    console.log('Looks like you like watermelon');
} else if (numOfWM > 2 && numOfWM <= 5) {
    console.log('That\'s a lot of watermelon');
} else if (numOfWM > 5 && numOfWM <= 10) {
    console.log('That\'s too many watermelons!');
} else if (numOfWM > 10 && numOfWM <= 15) {
    console.log('You must be CRAZY for watermelon!');
} else {
    console.log('Did you have a coupon?')
}

// //9. Create a variable that represents your current hunger on a level of 1-10
//   // Using a ternary, if your hunger is greater than 6 print, 'Time to eat!'
//   // Otherwise print. "I'm not hungry"

const cHunger =  Math.floor(Math.random() * 10) + 1  

const message = (cHunger > 6) ? 'Time to eat!' : "I'm not hungry";
console.log(message);


// 10. Think of an Magic-8 Ball
// Write a switch statement that works the same way.
// When you run this file you should
// Generate a random number
// And get an out put from your switch statement?
// Ex:
// I update a question variable to say "Will I win the lottery?"
// I run node <FILENAME>
// The console prints out:
// Will I win the lottery? Not Likely.

const magicNu = Math.floor(Math.random() * 8) + 1;
const question = "Will I win the lottery?";


switch (magicNu) {
    case 1:
        console.log(`${question} Yes.`);
        break;
    case 2:
        console.log(`${question} No.`);
        break;
    case 3:
        console.log(`${question} Maybe.`);
        break;
    case 4:
        console.log(`${question} Definitely.`);
        break;
    case 5:
        console.log(`${question} Unlikely.`);
        break;
    case 6:
        console.log(`${question} Most likely.`);
        break;
    case 7:
        console.log(`${question} Outlook not so good.`);
        break;
    case 8:
        console.log(`${question} Ask again later.`);
        break;
    default:
        console.log("Something went wrong!");
}

// BONUS:
// On the prior example, try and have the answer print like someone is speaking to you.


// Ex:
//Input:  Will I win the lottery?
//Output: Will you win the lottery? Not likely. <- Notice I has been programmatically changed to you



    // Generate a random number between 1 and 8
    
    // Switch statement to determine the response based on the random number
   
// Ex2:
// Input: Will I get a new pet this year?
// Output: Will you get a pet this year? It is certain.

// Try and handle many edge cases - can we put in any question and have it spit out a grammatically correct response?
