// 1. Declare a for loop that starts at 0, goes until 30, and increments by 1
// //      Each loop it should log to the console 'the current index is _'

for (let i = 0; i <= 30; i++) {
    console.log(`The current index is ${i}`);
}


// 2. Declare a for loop that starts at 1, goes until 10, and increments by 2
// //      Each loop it should log to the console the current index

for (let i = 1; i <= 10; i += 2) {
    console.log("The current index is " + i);
}



// 3. Create an array with your top 5 celebrity names in it. 
// //      Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
// //      Loop over the array and log each celebrity's full name to the console.

let fameNames = ["Michaelo Jordan", "Paytono Manning", "Derek Jitter", "Michael Jackson", "Tom Cruise"]

for(let i = 0; i < fameNames.length; i++) {
    let fullNme = fameNames[i];
    console.log(`Here is the full name of all the famous people on my lis: ${fullNme}`)
    
} 

// 4. Loop over your celebrity list and 
// // If a celebrity's full name has an even number of characters log it to the console

let topCeleb = ["Michael Jordan", "Payton Manning", "Derek Jitter", "Michael Jackson", "Tom Cruise"]

for (let i = 0; i < topCeleb.length; i++) {
    let celFullName = topCeleb[i];
    let characterCount = 0;

    for (let j = 0; j < celFullName.length; j++) {
        if (celFullName[j] !== ' ') {
            characterCount++;
        }
    }

    if (characterCount % 2 === 0) {
        console.log(celFullName);
    }
}


// 5. Use the celebrity array for this question
// // Create a for loop which will iterate over each element and output a new array of only first names
let NewtopCeleb = ["Michael Jordan", "Payton Manning", "Derek Jitter", "Michael Jackson", "Tom Cruise"]
let firstName = [];
for (let i = 0; i < NewtopCeleb.length; i++) {
    let celFullName = NewtopCeleb[i];
    let celFirstName = celFullName.split(" ")[0];
    firstName.push(celFirstName);    
      
    }

    console.log(firstName);



// 6. Use the celebrity array for this question
// // Create a for loop which will iterate over each element and output a new array of only last names
let celebLastN = ["Michael Jordan", "Payton Manning", "Derek Jitter", "Michael Jackson", "Tom Cruise"]
let lastName = [];
for (let i = 0; i < celebLastN.length; i++) {
    let cFullName = celebLastN[i];
    let cLastName = cFullName.split(" ")[1];
    lastName.push(cLastName);    
      
    }

    console.log(lastName);




// 7. Loop over the celebrity list and then loop through each name. 
// // If a letter is a vowel, log it to the console

let celebList = ["Michael Jordan", "Payton Manning", "Derek Jitter", "Michael Jackson", "Tom Cruise"]
const vowels = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < celebList.length; i++) {
    let fullName = celebList[i];

    for (let j = 0; j < fullName.length; j++) {
        let letter = fullName[j]
        if (vowels.includes(letter)) {
            console.log(letter);
        }
    }
}

// // 8.   Loop over the celebrity list and then loop through each name. 
// //      If a letter is uppercase, log it to the console

let celebListCaps = ["Michael Jordan", "Payton Manning", "Derek Jitter", "Michael Jackson", "Tom Cruise"]

for (let i = 0; i < celebListCaps.length; i++) {
    let fullName = celebListCaps[i];

    for (let j = 0; j < fullName.length; j++) {
        let letter = fullName[j]
        if (letter === letter.toUpperCase() && letter !== ' ') {
            console.log(letter);
        }
    }
}

// // 9. Convert your celebrity array to all caps and no spaces:
// //  Ex:
// // // Input:  ['Martha Stewart', 'David Beckham', etc..] 
// // // Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]

/*let allCapsCel = ["Michael Jordan", "Payton Manning", "Derek Jitter", "Michael Jackson", "Tom Cruise"]
let allCapsNames = [];
for (let i = 0; i < allCapsCel.length; i++) {
    let cfullName = allCapsCel[i];
    let noSpaceModeName = '';

    for (let j = 0; j < allCapsNames.length; j++) {
        let letter = allCapsNames[j]
        if (letter [j] !== ' ') {
            noSpaceModeName += letter[j].toUpperCase();
            console.log(letter);
        }
    }

    allCapsCel.push(noSpaceModeName);
}

console.log(allCapsCel)*/


// 10.  Index your array to find your favorite celebrity. 
//      Save that name to a variable
//      Loop over the array until you find that individual
//      Log that name to the console and break out of the loop

let myFavCel = ["Michael Jordan", "Payton Manning", "Derek Jitter", "Michael Jackson", "Tom Cruise"]
let faveCelebrity = "Michael Jordan";
for (let i = 0; i < myFavCel.length; i++) {
    if(myFavCel[i] === faveCelebrity ){
        console.log("My favorite celebrity is:" + faveCelebrity)
        break;
    }
}



//BONUS:
// // Write a loop that iterates from zero until 30
// // If an index is divisible by 2 log 'fizz'
// // If an index is divisible by 3 log 'buzz'
// // If an index is divisible by both 2 & 3, log 'fizz-buzz'
// // Otherwise print the index to the console
