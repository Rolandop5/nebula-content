// Given the following list:
// Change the element at index zero to equal itself times 10 
let numArr = [1,2,3,4,5];

numArr[0] *= 10;
console.log(numArr)
// Add an additional element to the prior array
numArr.push(6); 
console.log(numArr)

// In one line, remove the last element from the prior array and set that element to a variable called 'removedItem'
let removedItem = numArr.pop()
console.log(numArr)

// Check if the prior array contains the number 1
//   If it does, log true, if it doesn't, log false

let containsOne = numArr.includes(2)
console.log(containsOne)

// Remove the first element from the prior array and set that element to a variable called 'removedFirstItem'

let numArr1 = [1, 2, 3, 4, 5];
let removedFirstItem = numArr1.shift();
console.log(removedFirstItem)

// Add that item back
numArr1.unshift(removedFirstItem)
console.log(numArr1)


// Given the following array, sort it using an array method
let sortThis = ["dairy", "banana", "cherry", "apple", "eel"];
sortThis.sort()
console.log(sortThis)


// Now reverse the prior array
let sortThis1 = ["apple", "banana", "cherry", "dairy", "eel"];
sortThis1.reverse();
console.log(sortThis1)


  
// Write a string stating your favorite 3 foods. 
//  Ex: 'My favorite foods are za, pineapple, hawaiian-pizza'

let favoriteFoods = 'My favorite foods are za, pineapple, hawaiian-pizza';
console.log(favoriteFoods);

// Convert the prior string into an array of words (don't worry about where punctuation lands). 
//  Ex: ['My', 'favorite', 'foods', 'are', 'za,', 'pineapple,', 'hawaiian-pizza']

let MyWordsArr = favoriteFoods.split(' ')
MyArray1 = [MyWordsArr]
console.log(MyArray1);

// Convert the output from the prior example back into a string, but with dashes between the words. 
//  Ex: 'My-favorite-foods-are,-za,-pineapple,-hawaiian-pizza'


let stringWithDashes = MyArray1.join('-');
console.log(stringWithDashes)

// Given the following array: [1,2,3,4,5,7,8,9,10]
// insert the number 6 into its logical location

let array = [1, 2, 3, 4, 5, 7, 8, 9, 10];
let numberToInsert = 6;

let indexToInsert = array.findIndex(num => num > numberToInsert);


if (indexToInsert === -1) {
    indexToInsert = array.length;
}


array.splice(indexToInsert, 0, numberToInsert)

console.log(array)



// Create two arrays and, using JavaScript join them together

let array1 = [1, 2, 3]
let array2 = [4, 5, 6]

let myTwoArr = array1.concat(array2);

console.log(myTwoArr)

// Create a multi-dimensional array
let  myDimArr = [[4,5,6], [1,2,3]]
console.log(myDimArr[1])

