// Create a variable for each aspect of an address 
// First Name, Last Name, House-Number, Street-Name, City, State, Zip
// Combine them to be usable as a postage address

/*
First-Name Last-Name
House-Number, Street-Name 
City, State
Zip
 
Your log should look like this:

Steve Rogers
569, Amsterdam Ave
New York, NY
18062 
*/
let fName = "Rolando";
let lName = "P";
let hNumber ="10";
let sName = "Doodle Ave";
let city = "Saint J";
let state = "NY";
let zcode = "10000";
//console.log(fName + lName);
//console.log(hNumber + sName);
//console.log(state + zcode);


const address = `${fName} ${lName} 
${hNumber}, ${sName}
${city}, ${state}
${zcode}`
console.log(address);