let horseName = "Crazy Horse"

let position = Math.ceil(Math.random() *  5)

// If position is 1, log to the console: "(Insert horseName) finished in first place!"
if(position === 1){
    console.log(`${horseName} "He is a fast horse"`)
}else if(position === 2){
    console.log(`${horseName} "He is Mucho loco"`)
}else if(position === 3){
console.log(horseName)
} else if(position === 4){
console.log(horseName)
   }else if(position === 5){console.log(horseName)
}
     // If position is 2, log to the console: "(Insert horseName) finished in second place!"
// If position is 3, log to the console: "(Insert horseName) finished in third place!"
// If position is greater than 4, log to the console: "(Insert horseName) did not finish in the top 3."