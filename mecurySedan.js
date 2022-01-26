<script src="./vehicleBaseClass.js"></script>

//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle {
    constructor(maxPassenger, passenger, numberOfWheels, maxSpeed, fuel, scheduleService)
        this.maxPassenger = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false;
}
loadPassenger(num) {
    if {
         passenger < maxPassenger == true;
         console.log("There is enough room in the car, lets go!");
    } else {
        console.log("There is no more room in the car, you can not come...")
    }
}
start() {
    if {
        fuel > 0 == true;
        console.log("Start the car!");
    } else {
        console.log("Do Not start the car.");
    }
}
scheduleService(mileage) {
    if {
        mileage > 30000 == true;
        console.log("Time for maintenance!");
    } else {
        console.log("Not time for maintenance yet.");
    }
}
super(length, length);