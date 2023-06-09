const arr = [2,3,4,5,6];
/// 1 Write a JavaScript function that takes an array of numbers as input and returns a new array where each element is multiplied by 2.
console.log(multiple(arr));
/// 2 Write a JavaScript function that takes an array as input and returns the length of the array.
console.log(getLength(arr));
/// 3 Write a JavaScript function that takes an array of strings as input, sorts the strings in ascending order, and returns the sorted array.
const stringArr = ['Bob', 'Steve', 'Mike', 'Carl'];
console.log(sortStrings(stringArr));
/// 4 Write a JavaScript function that takes two arrays as input, combines them into a single array, and returns the result.
const testArr = ['Joe, Sasha'];
console.log(concatArrays(testArr, stringArr));
/// 5 Write a JavaScript function using an arrow function expression that takes two numbers as input and returns their sum.
const sum = (num1, num2) => num1 + num2;
console.log(sum(2,5));
/// 6 Write a JavaScript function that takes multiple arguments using the rest operator and returns the sum of all the arguments. If no arguments are provided, the function should return 0.
console.log(restSum(1,2,3));
console.log(restSum(1,2,3,4,5));
/// 7 Write a JavaScript function that demonstrates the concept of variable scope by declaring a variable inside a block and trying to access it outside the block. Explain the output or error that occurs.
varScope();
console.log(a);
console.log(b);
console.log(c);
console.log(d);
/// 8 Write a JavaScript function that demonstrates closure by creating an inner function that has access to the outer function's variables. Invoke the inner function and observe the output.
closure();
/// 9 Write a JavaScript function that uses recursion to calculate the factorial of a given number.
console.log(factorialize(6));


function multiple(array) {
    return array.map(num => num * 2);
}

function getLength(array) {
    return array.length;
}

function sortStrings(array) {
    return array.sort();
}

function concatArrays(array1, array2) {
    return array1.concat(array2);
}

function restSum(...args) {
    let total = 0;
    args.forEach((arg) => {
        total += arg;
    })
}

function varScope() {
    a = 1;
    var b = 2; // ReferenceError: b is not defined
    let c = 3; // ReferenceError: c is not defined
    const d = 4; // ReferenceError: d is not defined
}

function closure() {
    first = 1;
    var second = 2;
    let third = 3;
    const fourth = 4;

    test = () => {
        console.log('first', first);
        console.log('second', second);
        console.log('third', third);
        console.log('fourth', fourth);
    };

    test();
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