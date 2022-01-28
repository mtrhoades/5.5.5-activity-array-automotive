

//this includes the vehicle class as a module

const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class MercurySedan extends Vehicle {
    constructor(year, color, mileage) {
        super(year, color, mileage);
        this.make = "Mercury";
        this.model = "Sedan";
        this.maxPassenger = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 200;
        this.scheduleService = false;
        this.started = false;
        this.numberOfWheels = 4;
}

loadPassenger(num) {
    if (num < this.maxPassenger - this.passenger) {
        this.passenger = this.passenger + num
        console.log("There is enough room in the car, lets go!");
    } else {
        console.log("There is no more room in the car, you can not come...")
    }
}

scheduleService(mileage) {
    if (mileage > 30000) {
        this.scheduleService = true;
        console.log("Time for maintenance!");
        } 
    }
}

let mattsCar = new MercurySedan(2000, "green", 60000);
console.log("");
console.log(mattsCar.start());
console.log("");
console.log(mattsCar.accelerate())
console.log("");
console.log(mattsCar.accelerate());
console.log("");
console.log(mattsCar.decelerate());
console.log("");
console.log(mattsCar.brake());