/* Scenario
You’ve been hired to help a logistics company build a system to manage its fleet of
vehicles. The system should be able to:
1. Create individual vehicles with properties like type, make, model, year, and
mileage.
2. Add a method to update the mileage of a vehicle when it is used.
3. Add a method to display the details of the vehicle in a user-friendly format.
4. Instantiate multiple vehicles from the class and test your methods.
Tasks

1. Define the Vehicle Class:
○ The constructor should include properties: type, make, model, year,
and mileage.
○ Use default values for mileage (e.g., 0).

2. Add Methods:
○ drive(distance): Increases the vehicle’s mileage by the given
distance (in kilometers or miles).
○ getDetails(): Returns a formatted string describing the vehicle’s
details.
*/

class Vehicle {
    constructor(type, make, model, year, mileage = 0) {
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    drive(distance) {
        this.mileage += distance;
    }

    // ○ getDetails(): Returns a formatted string describing the vehicle’s details.
    getDetails() {
        return `The ${this.make} ${this.model} is a ${this.type} made in ${this.year} and has ${this.mileage} miles on it.`;
    }

}

let car = new Vehicle("sedan", "Toyota", "Camry", 2023, 17000);
console.log(car);

let truck = new Vehicle("truck", "Ford", "F150", 2025, 300);
console.log(truck);

let motorcycle = new Vehicle("motorcycle", "Suzuki", "TL1000S", 1999, 4500);
console.log(motorcycle);

/*
3. Create and Use Vehicle Objects:
○ Instantiate at least three vehicle objects with different properties (e.g.,
a car, a truck, and a motorcycle).
○ Use the drive method to simulate trips and update mileage.
○ Use the getDetails method to print each vehicle’s updated
information.
*/

car.drive(25000);
console.log(car.getDetails());

truck.drive(112);
console.log(truck.getDetails());

motorcycle.drive(1000);
console.log(motorcycle.getDetails());