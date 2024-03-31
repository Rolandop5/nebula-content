// 1. Write a function that takes in 1 number and returns that number + 1

const myNumIncrement = numb => numb + 1;
    const inNumb = 6;
     const result = myNumIncrement(inNumb);
    console.log(result)


// 2. Write a function that takes in a name and outputs a sentence saying goodnight to that name.

const goodNightMess =  Name => `Good night, ${Name}`
const Name = "John";
const message = goodNightMess(Name);
console.log(message)


// 3. Write a function that takes in an array of numbers. If that array includes the number 0 return 'This array has the number zero in it'

const indexZero = arrOfNumbers => {
    if(arrOfNumbers.includes(0)){
        return "Hey we find you Mr Zero";
    } else{
        return "No zeros in here";
    }
}
 const myArray = [3, 7, 5, 0, 1];

 console.log(indexZero(myArray));
// 4. Write a function that console logs 'hello world' 10 times to the console. 

function printTenTimes() {
    for (let i = 0; i < 10; i++) {
        console.log('hello world');
    }
}

// 
printTenTimes();


// 5. Write the prior function utilizing a 'fat arrow' function
const HelloWorldMessage = () => {
    for (let i = 0; i < 10; i++) {
        console.log('Hello world');
    }
};


HelloWorldMessage();