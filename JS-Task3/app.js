const arr = [2,3,4,5,6];
/// 1
console.log(multiple(arr));
/// 2
console.log(getLength(arr));
/// 3
const stringArr = ['Bob', 'Steve', 'Mike', 'Carl'];
console.log(sortStrings(stringArr));
/// 4
const testArr = ['Joe, Sasha'];
console.log(concatArrays(testArr, stringArr));
/// 5
const sum = (num1, num2) => num1 + num2;
console.log(sum(2,5));
/// 6
console.log(restSum(1,2,3));
console.log(restSum(1,2,3,4,5));
/// 7
varScope();
console.log(a);
console.log(b);
console.log(c);
console.log(d);
/// 8
closure();
/// 9
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