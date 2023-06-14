// const a = null;
// console.log('null', typeof a);
// const b = undefined;
// console.log(typeof b);
// console.log(null + 2);
// console.log(undefined + 2);
// console.log(null === undefined); // false
// console.log(2 == '2'); // true
// console.log(2 + '2'); // true '22'
// console.log(a);
// var a;

// let b;

// test();
// function test();

// var a = 1;

// function b() {
//     let a = 10;
//     return;
// }
// b();
// console.log(a);

// console.log(example());
// function example() {
//     return 9;
// }

// var example = function () {
//     return 1;
// } - hoisting doesnt work here

// const obj = new Object();
const fullName = 'Ivan Slabko';
const obj1 = {
    [fullName] : 2,
    name: 'Bob',
};
const obj2 = obj1; // <- shallow copy
const object3 = Object.assign({}, obj1); // <- deep copy w/o nested obj. shallow copy w/ nested obj
JSON.parse(JSON.stringify(obj));
structuredClone() // <- deep copy
function isEmpty(obj) {
    if (obj === undefined || obj === null) {
        return true;
    }
    return Object.keys(obj).length === 0;
}
// Object.create()
// console.log(obj1);
// obj1['Ivan Slabko'];