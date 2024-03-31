// 1. Write a function that multiplies 3 input numbers together.


const mThreeNums = (num1, num2, num3) => {
    return num1 * num2 * num3;
   
}
const result = mThreeNums(2, 3, 4);
console.log(result); 
// 2. Write a function that takes in a number and logs all odd numbers leading up to that number

const OddNumb = (number) => {
    for (let i = 1; i <= number; i += 2) {
        console.log(i);
    }
};


OddNumb(10);

// 3. Write a function that takes in a list of names and returns a list of initials. The names will be formatted: 'Peter Parker'. 

const Initials = (names) => {
    return names.map(name => {
        const nameParts = name.split(' ');
        return nameParts.map(part => part.charAt(0)).join('');
    });
};

const names = ['Peter Parker', 'Wonder Woman', 'Spider Man'];
const Newinitials = Initials(names);
console.log(Newinitials); 

// 4. Write a function which takes in two numbers and a mathematical operator and performs Math on those two numbers utilizing that operator

// 5. Write a function which takes in two arrays and returns those arrays combined together. 