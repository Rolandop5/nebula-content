// 1.   cCreate an array that ontains two of your favorite things to do

const favthings = ["cooking", "Working with computers"];
console.log(favthings)

// 2.   Using an array method, add another thing you like to do to that list
favthings.push("Reading")
console.log(favthings)

// 3.   Reverse the order of the array (remember, if needed use MDN)
let revfavthings = favthings.reverse()
console.log(revfavthings)

//      Use this array for questions 4-11:
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// 4.   log the length of the array
console.log(daysOfWeek.length)
// 5.   log the 4th element in the array

console.log(daysOfWeek[3])

// 6.   Remove the first element in the array. Log the new array and the element removed from the array
const remElement = daysOfWeek.shift()
console.log("New array:", daysOfWeek);
console.log("Element removed:", remElement);

// 7.   Put 'Sunday' back at the beginning of the array and log the new array

daysOfWeek.unshift()

console.log("New array:", daysOfWeek)

// 8.   Remove the last element in the array. Log the new array and log the element removed

const PopElement = daysOfWeek.pop()
console.log("New array:", daysOfWeek);
console.log("Element removed:", PopElement);

// 9.   Add 'Saturday' back to the end of the array and log the new array

daysOfWeek.push('Saturday')

console.log("New array:", daysOfWeek)

//10.   Replace 'Thursday' with 'Friday Junior'

const indexOfThursday = daysOfWeek.indexOf('Thursday');
if (indexOfThursday !== -1) {
    daysOfWeek[indexOfThursday] = 'Friday Junior';
}

console.log("New array:", daysOfWeek);


//}

//11.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'

const favoriteDay = daysOfWeek.pop()

console.log("My favorite day of the week is " + favoriteDay)

//12.   Combine these two arrays
    let phone = ['iphone', 'android']
    let laptop = ['MacBook', 'HP', 'Dell']

    let combArr = phone.concat(laptop);

console.log(combArr);

//13.   Write a line of code to test if something is an array or not

let checkArr = [1, 2, 3]

if (Array.isArray(checkArr)) {
    console.log("It's an array!")
} else {
    console.log("It's not an array!")
}

