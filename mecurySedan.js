//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

class car{
    constructor(make,model,year,color,mileage){
        super(make,model,year,color,mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4; 
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;

    }
    checkService(){
        if (this.mileage > 30000){
            this.scheduleService = true 
            return this.scheduleService
        }
    }
    start(){
        if (this.fuel < 0 ){
            console.log("engine has started.");
            return this.start = true 
            } else { 
                console.log("out of gas");
                return this.start = false

            }
        }

    loadPassenger(num){
        if (this.passenger < this.maximumPassengers){
            if ((num + this.passenger) <- this.maximumPassengers){
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + "" + this.make + "not enough space for all passengers ")
            }

    } else{
        console.log(this.mode + " " + this.make + "is full");
    }




    }



}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
