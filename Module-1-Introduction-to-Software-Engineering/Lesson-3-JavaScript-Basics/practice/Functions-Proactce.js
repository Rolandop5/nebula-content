

function multiplyBy10(Mynumber) {
    return Mynumber * 10;
}


console.log(multiplyBy10(5)); 
console.log(multiplyBy10(10));
console.log(multiplyBy10(7));

//Define a function called sayGoodbye that uses a name parameter and 
//returns a farewell message incorporating that name.

function sayGoodbye(name) {
    return("Goodbye, " + name)
}


console.log(sayGoodbye("Rolando"));  
console.log(sayGoodbye("Michael"));    
console.log(sayGoodbye("Raffaelo"));

//Define a function called evenNumbers that takes in an array as an argument and iterates
// over that array and returns a new array with all the even numbers from that input array
//
// (Hint: you can use the modulus operator to check whether a number is even or not).




function evenNum(arr) {
    let evenArr = []; 
    // 
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i]);
        }
    }
    
    return evenArr; 
}

let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(evenNum(inputArray));


//Define a function called reverseWords that takes in a string and returns a string with the
// order of words reversed.


function revW(str) {
    
    let words = str.split(" ");    
        let reversed = words.reverse();   
    
    let reversedString = reversed.join(" ");    
    return reversedString;
  }
  
  let originalString = "Hello world, how are you?";
  let reversedString = revW(originalString);
  console.log(reversedString);