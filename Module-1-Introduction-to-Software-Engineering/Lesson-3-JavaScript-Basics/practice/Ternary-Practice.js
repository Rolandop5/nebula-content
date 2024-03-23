// USE FAKE INFO FOR THE FOLLOWING EXERCISE

// Initialize a variable called creditCardNum, set it equal to a fake credit card string-number




// Initialize a variable called last4SS, set it equal to a 4 string-numbers (don't use your real SS last 4!)


// Initialize a variable called userId, set it equal to a fake user ID


// Initialize a variable called password, set it equal to a fake password


// Create two last variables called inputId & inputPass, initially set them as the same values as userId and password


// Write a ternary statement that checks if userId is equal to inputId and if password is also equal to inputPass
// If they are the same, log the credit card num and the last4SS
// If not, log 'incorrect username or id'
const cCardnum = "0000 1111 7777 9999"
const last4SS = 1234
const userId = "rojo"
const pWord = "sisi"
const inputId = "rojo"
const inputPass = "xxsisi"

let pInfo = userId === inputId && pWord === inputPass ? cCardnum + " " + last4SS : 'incorrect username or id'
console.log(pInfo)