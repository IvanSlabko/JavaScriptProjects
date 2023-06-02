class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return this.make + ' ' + this.model + ' ' + this.year;    
    }
}

const car = new Car('Model Y', 'Tesla', 2020);
console.log(car.getInfo())