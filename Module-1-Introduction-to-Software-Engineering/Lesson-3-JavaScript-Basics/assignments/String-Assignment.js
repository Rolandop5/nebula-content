
//SUBMIT A LINK TO THE GITHUB REPOSITORY CONTAINING THIS ASSIGNMENT
// 1. Concatenate "hello" with "goodbye"
 const string1 = "hello"
 const string2  = "goodbye"
 console.log(string1 + string2)

// 2. Save the substring "Friend" from the string "Hello Friend"
const greeting = "Hello Friend"
const fString = greeting.slice(6, 13)
console.log(fString)

// 3. Using 5 or more of the following words, create a template literal that makes a legible sentence.
//    Do not create your own words, use the existing ones below!
const word1 = "hello"; 
const word2 = "horror";
const word3 = "peace";
const word4 = "world"
const word5 = "dislike"; 
const word6 = "umbrella"; 
const word7 = "car"; 
const word8 = "pasta"; 
const word9 = "pizza"; 
const word10 = "movies";
const word11 = "football"; 
const word12 = "soccer"; 
const word13 = "eat"; 
const word14 = "cookie"; 
const word15 = "favorite";
const word16 = "makeup"; 
const word17 = "I"; 
const word18 = "to"; 
const word19 = "my";
const word20 = "is";
const word21 = "and";
const word22 = "also";
const word23 = "like"; 

const myTemplate = (`${word1} ${word4}, ${word17} ${word13} ${word9} ${word21} ${word22} ${word23} ${word11}.`)
console.log(myTemplate)

// 4. Given the string of your full name get your initials.

Myname = "Rolando Piche"

console.log(Myname[0] + Myname[8])


// 5. Get the 5th character from the following string: 'Hello World'
const greeting1 = 'Hello World'
console.log(greeting1[4])

// 6. Find the index of the dash from 'Coding-Time!'
const coding = 'Coding-Time!'
const cIndex = coding.indexOf ("-")
console.log(cIndex)

// 7. Write code to grab the final letter from a any string.
const string = "string"
const lastSt = string[string.length - 1]
console.log(lastSt)

// 8. Write code to grab the first 3 letters from a string.
const nStr = "Dog named Luna"
const leters3 = nStr.slice(0, 3)
console.log(leters3)



// 9. Turn the following string into an array of words: 'This-is-a-sentence';
const sentence1 = 'This-is-a-sentence'
const sentenceToArr = sentence1.split("-")
console.log(sentenceToArr)

// 10. Make the string of 12 from the following two numbers:
let one = 1;
let two = 2;
console.log(" " +one + two)
