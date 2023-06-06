/// 1
const test = [1,2,3,4,5,6];
console.log(sumEvenNumbers(test));
const test1 = [1,3,5];
console.log(sumEvenNumbers(test1));
/// 2
console.log(concatStrings('abc', 'def'));
/// 3
console.log(determineNumberType(1));
console.log(determineNumberType(-1));
console.log(determineNumberType(0));
/// 4
console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(1));
/// 5
console.log(greet());
//
const car = new Car('Model Y', 'Tesla', 2020);
console.log(`Make: ${car.make}, model: ${car.model}, year: ${car.year}`);

function sumEvenNumbers(array) {
    if (!array.length || !array) {
        return 0;
    }
    const evenNumbers = array.filter(num => num % 2 === 0);
    if (!evenNumbers.length) {
        return 0;
    }
    return evenNumbers.reduce((partialSum, num) => partialSum + num);
}

function concatStrings(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    return 0;
}

function determineNumberType(num) {
    if (num > 0) {
        return 'Positive';
    } else if (num < 0) {
        return 'Negative';
    }
    return 'Zero';
}

function factorialize(num) {
    if (num === 0 || num === 1) {
        return 1;
    }

    let result = num;

    while (num > 1) {
        num --;
        result *= num;
    }

    return result;
}

function greet() {
    const pesron = {
        name: 'Bob',
        age: 30,
    }
    return 'Greeting ' + pesron.name;
}

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}