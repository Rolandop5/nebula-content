// Declare an empty array

let myArray = [1,2];


// Declare an array with all the data types you can think of within it

let mixedArray = [42, "Hello, world!", true,]      
     
     console.log([1])  


// Make a list of classmates names first names in an array
// Get the length of that previous array

let classMem = ["Hashenn", "Rolando", "Michael", "Creig", "Raffaello", "Garry", "Sharon"]
let lengthOfClassMem = classMem.length

console.log(lengthOfClassMem)


// Check the type of the previous array


let typeOfClassMem = Array.isArray(classMem) ? "Array" : typeof(classMem)
console.log(typeOfClassMem) 


// Using indexing, grab your name from that previous array
let MyName = classMem[1]
console.log(MyName)


// Use the following variable to get the student at the index from the array of students
let index = 2

let studAtIndex = classMem[index];
console.log(studAtIndex)


// Update the array to have each element as a students first and last name : 'firstName lastName'

let lastName = "Doe1"
let lastName1 = "Doe2"
let lastName2 = "Doe3"
let lastName3 = "Doe4"
let lastName4 = "Doe5"
let lastName5 = "Doe6"

// Update each element to be in the format 'firstName lastName'
let classmates = classMem
classmates[0] + `${classMem[0]} ${lastName}`
classmates[1] = `${classMem[1]} ${lastName1}`
classmates[2] = `${classMem[2]} ${lastName2}`
classmates[3] = `${classMem[3]} ${lastName3}`
classmates[4] = `${classMem[4]} ${lastName4}`
classmates[5] = `${classMem[5]} ${lastName5}`


console.log(classMem)