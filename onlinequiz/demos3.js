
class Vehicle {
  constructor(vname, registrationNumber, capacity,fuel,wheel,amount) {
    this.vname = vname;
    this.registrationNumber = registrationNumber;
    this.capacity = capacity;
    this.fuel = fuel;
    this.wheel = wheel;
    this.amount = amount;
    this.speed = 0;
  }   
  accelerate(speedChange) {
    if(speedChange >= 280)
    {
      console.log("Gently release your accelerator" + this.speed)
    } else {
      this.speed += speedChange;
      console.log(`Accelerate: ${speedChange} km/hr. Current Speed: ${this.speed} km/hr`);
    }
  }   
  brake(speedChange) {
    if(speedChange <=0) {
      console.log("Kindly release the brake first!")
    } else {
    this.speed -= speedChange;
    console.log(`Applying brakes: ${speedChange} km/hr. Current Speed: ${this.speed} km/hr`);
    }  
  }
  getDescription() {
    console.log(`Vehicle Name: ${this.vname}`);
    console.log(`Registration Number: ${this.registrationNumber}`);
    console.log(`Capacity: ${this.capacity}`);
    console.log(`Fuel: ${this.fuel}`);
    console.log(`Wheel: ${this.wheel}`);
    console.log(`Amount: ${this.amount}`);
    console.log(`Current Speed: ${this.speed} km/hr`);
  }

}

class Bike extends Vehicle {
  constructor(vname, registrationNumber, capacity,fuel,wheel,amount) {
    super(vname, registrationNumber, capacity,fuel,wheel,amount);
  }
}

class Car extends Vehicle {
  constructor(vname, registrationNumber, capacity,fuel,wheel,amount) {
    super(vname, registrationNumber, capacity,fuel,wheel,amount);
  }
}

class Bus extends Vehicle {
  constructor(vname, registrationNumber, capacity,fuel,wheel,amount) {
    super(vname, registrationNumber, capacity,fuel,wheel,amount);
  }
}

const bike = new Bike("Royal Enfield Classic350", "AB1234",2,"Petrol",2,"1 Lakh 93 Thousand and 80 Rupees");
bike.getDescription();
bike.accelerate(0);
bike.brake(0);

const car = new Car("Pajero Sports 2014", "CD1234", 7,"Petrol",4,"33 Lakhs");
car.getDescription();
car.accelerate(0);
car.brake(0);

const bus = new Bus("Motor Coach Elite", "EF1234", 56,"Diesel",6,"88.50 Lakhs");
bus.getDescription();
bus.brake(0);


bike.accelerate(280);
bike.accelerate(200);
car.accelerate(120);
