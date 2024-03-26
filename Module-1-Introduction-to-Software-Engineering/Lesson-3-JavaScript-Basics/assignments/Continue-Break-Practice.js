// 1. Write a for loop that looks for the letter a
// // The loop should log the letter 'a' to the console
// // STOP immediately after finding the letter 'a'
let mLetters = "Long Island"

for(let i = 0; mLetters.length; i++) {
    if (mLetters[i] ==="a"){
        console.log("a")
        break
    }
}




// 2. Write a for loop that looks for a number
// // The loop should log 'at index _ there is the number _' to the console 
// // Stop immediately after finding that number
// // // ex: Input: ['a','b','c', 100,'e']
// // // Output: 'at index 3 there is the number 100'

let rOfnumsStrs = [20, 40, 50, 'cat', 'Dog', 100, 'horse' ]
let targetArr = 100
for(let i = 0; i < rOfnumsStrs.length; i++) {
    if (rOfnumsStrs[i] === targetArr){
        console.log(`at index position ${i} there is the number ${targetArr} taht we are looking for`)
        break
    }


}

// 3. Using the continue keyword loop over an array of numbers & strings
// // If the current element is a number skip it
// // Otherwise add the element to an array
// // After finishing the loop log the new array to the console

const mixArr = ["blue", 7, "red", 9, "yellow", 11]
const otherArr = []

for(let i = 0; i < mixArr.length; i++) {
    if(typeof mixArr[i] === "number"){

        continue

        
    }
    else{
        otherArr.push(mixArr[i])

    }
}
console.log(otherArr)