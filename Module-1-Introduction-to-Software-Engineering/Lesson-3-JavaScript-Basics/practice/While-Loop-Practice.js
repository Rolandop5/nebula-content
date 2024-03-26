// Reminder: control-c will kill an infinitely running node-process


// 1. Write a while loop that loops over a string and logs the letter when it find an "a"

const myLetterA = "Hey look at me I am the letter a"
let ind = 0;

while (ind < myLetterA.length) {
  if (myLetterA[ind] === 'a') {
    console.log(" Yes I am the letter"+ " " + myLetterA[ind]);
  }
  ind++;
}

// 2. Write a while loop that logs to the console the 'count' until the 'count' reaches 100
// // Inside the while loop be sure to increase count by some number

let myCount = 0

while(myCount < 100) {
    console.log(myCount)

    myCount +=5

}