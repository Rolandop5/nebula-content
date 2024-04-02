// SUBMIT A LINK TO THE GITHUB REPO FOR THIS ASSIGNMENT
// 1.bCreate an object for your dream vehicle
// // Give it a minimum of 6 key-value pairs
// // This object should contain many datatypes (string, number, boolean, null, array)

let dreamCar = {
    make: 'Tesla',
    model: 'Model S',
    year: 2025,
    color: 'Blue Metallic',
    electric: true, 
    topSpeedMPH: 155,
    autopilotEnabled: false,
    insurance: null
    
    

}


// 2. Using dot-notation Log to the console 3 properties from the previous object

console.log(dreamCar.make);
console.log(dreamCar.year);
console.log(dreamCar.topSpeedMPH);


// 3. Using bracket-notation Log to the console 3 properties from the previous object
console.log(dreamCar["color"]);
console.log(dreamCar["electric"]);
console.log(dreamCar["autopilotEnabled"]);

// 4.Try and log a property that doesn't already exist - what output do we get?

console.log(dreamCar.engineType)
// 5.bAdd a new key-value pair to the vehicle. 

dreamCar.engineType = "Eletric";

console.log(dreamCar.engineType)
// 6. Using bracket-notation update a property on the vehicle. 
dreamCar["color"] = "Red";
console.log(dreamCar.color);

// 7. Using dot-notation update a property on the vehicle. 
dreamCar.topSpeedMPH = 200;
console.log(dreamCar.topSpeedMPH)

// 8. Create a method for turning your vehicle on

let dreamCarCopy = { ...dreamCar} 
    
     function PowerOn() {
        console.log('The vehicle is now turned on.')
}

     
dreamCarCopy.PowerOn = PowerOn
dreamCarCopy.PowerOn()
// 9.Create a method for turning your vehicle off
let dreamCarNew = { ...dreamCar} 
    
     function PowerOff() {
        console.log('The vehicle is now turned off.')
}

     
dreamCarNew.PowerOff = PowerOff
dreamCarNew.PowerOff()

//10.   
// // a. Check if your vehicle is on (it should be off)
// // b. Start your vehicle
// // c. Check if your vehicle is on (it should be on)
// // d. Stop your vehicle
// // e. Check if your vehicle is on (it should be on)



accelerate: function() {
    console.log("Zoom zoom! Accelerating...");
},
honk: function() {
    console.log("Beep beep! Honking the horn...");
},
checkIfOn: function() {
    if (this.isOn) {
        console.log("The vehicle is on.");
    } else {
        console.log("The vehicle is off.");
    }
},
start: function() {
    if (!this.isOn) {
        this.isOn = true;
        console.log("Starting the vehicle...");
    } else {
        console.log("The vehicle is already on.");
    }
},
stop: function() {
    if (this.isOn) {
        this.isOn = false;
        console.log("Stopping the vehicle...");
    } else {
        console.log("The vehicle is already off.");
    }
}



DreamCarNew.checkIfOn(); 
DreamCarNew.start(); 
DreamCarCopy.checkIfOn(); 
DreamCarCopy.stop();
DreamCarCopy.checkIfOn();