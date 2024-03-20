// For these questions use the Math methods that JavaScript includes
// All Math methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// find the square root of 25

const sRoot = Math.sqrt(25)
console.log(sRoot)


// find the value of 3 to the power of 5
const  numPower = Math.pow(3, 5);
console.log(numPower)


// find the value of 7.4 rounded
const rNumber1 = Math.round(7.4)
console.log(rNumber1)

// find the rounded-up value of 7.4

const rNumber = Math.ceil(7.4)
console.log(rNumber)
// find the absolute value of -13
let absNumber = Math.abs(-13)
console.log(absNumber)

// find the minimum value in a set of numbers: 12,13,14,15,2,-1
const someNumbers = Math.min(12,13,14,15,2,-1)
console.log(someNumbers)

// find the maximum value in a set of numbers: 12,13,14,15,2,-1
const mNumbers = Math.max(12,13,14,15,2,-1)
console.log(mNumbers)
// create a random number
const rnum2 = Math.random(100000)
console.log(rnum2)

// Create a random number between 0-10
const vNumb = Math.random() * 10
console.log(vNumb)
