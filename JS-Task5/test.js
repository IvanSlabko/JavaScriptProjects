// const arr = [1,2];

// function isOdd(arr) {
//     arr.filter(a)
// }

// the result will be a = 1, b = 1 cuz B assign to 1 and after A assign to B
// function doSomething(a=b=1) {
//     console.log(a,b);
// }
// doSomething(6);
// doSomething(1,2,3,4);
// function doSomething(...arg) {
//     console.log(arg.forEach);
// }
// sum(1)(2)(3)....(n)

// function sum(a) {
//     return function(b) {
//         return function(c) {
//             console.log(a + b + c);
//         }
    
//     }
// }

// result = 6
// sum(1);
// const f1 = sum(1);
// f1();
// const f2 = f1(2);
// f2(3);

// 1. What is promise() -- async operation -- three states and explain all in one line (pending, resolved, rejected);

// !!! function currying 
// !!! callback hell -answer for await/async question. Convert nested Promise to await/async 
// new Promise((resolve, reject) => {
//     resolve();
// })
// p1 => 1

// p2 =>  result of p1 + 2

// p3 =>  result of p2 + 3

// const promise2 = new Promise((resolve, reject) => {
//     const x = 8;
//     resolve(x);
// })

// promise2.then((resolvedX) => {
//     console.log(resolvedX);
//     return resolvedX * 2;
// }).then((multipliedX) => {
//     console.log(multipliedX);
// }).catch((err) => {
//     console.log('caught', err);
// })

// function a(num) {
// }
// Promise.all()
// Promise.allSettled()
// Promise.race()
// Promise.any()
// IIFE !!
// https://javascript.info/call-apply-decorators
// https://javascript.info/task/debounce