// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// X TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  // X TODO: Declare properties of the Truck class
  // X TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  towingCapacity: number;
  // X TODO: Create a constructor that accepts the properties of the Truck class
   constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number,
  ) {
    // X TODO: The constructor should initialize the properties of the Truck class
    super();
    // X TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

    tow(vehicle: Truck | Motorbike | Car): void {
      // X TODO: Get the make an model of the vehicle if it exists
      const model = vehicle.make && vehicle.model ? `${vehicle.make} ${vehicle.model}`: "vehicle";
      // X TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
      if (vehicle.weight <= this.towingCapacity) {
      // X TODO: If it is, log that the vehicle is being towed
    console.log(`Vehicle has being towed.`);
      } else { // X TODO: If it is not, log that the vehicle is too heavy to be towed
        console.log(`Vehicle is too heavy to be towed.`);
      }   
    }
  
  override printDetails(): void {   
  // X TODO: Override the printDetails method from the Vehicle class
    // X TODO: The method should call the printDetails method of the parent class
    super.printDetails();
    // X TODO: The method should log the details of the Truck
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    // X TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
    console.log(`Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`);
    console.log(`Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`);
    console.log(`Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`);
    console.log(`Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`);
  }
} 

// Export the Truck class as the default export
export default Truck;
