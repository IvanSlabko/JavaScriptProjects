import fetch from 'node-fetch';

/// 1. Explain the difference between synchronous and asynchronous JavaScript code execution and provide an example for each.
asyncFunc(); // async function will be called after all sync code;
syncFunc();

function syncFunc() {
    console.log('sync');
}

function asyncFunc() {
    setTimeout(() => console.log('async'), 0);
}
/// 2. Write JavaScript code that uses the setTimeout function to log a message after a specified delay, and then clear the timeout using clearTimeout.
function log() {
    console.log('some log msg');
}
function log2() {
    console.log('some log msg2');
    clearTimeout(st2);
}

const st = setTimeout(log, 1000);
clearTimeout(st);
const st2 = setTimeout(log2, 1000);

/// 3. Write JavaScript code that uses the setInterval function to repeatedly log a message at a specified interval, and then clear the interval using clearInterval.
function showMsg() {
    console.log('show msg');
}
function showMsg2() {
    console.log('show msg2');
    clearTimeout(si2);
}

const si= setInterval(showMsg, 1000);
clearTimeout(si);
const si2= setInterval(showMsg2, 1000);
/// 4. Write JavaScript code that demonstrates the basic syntax of ES6 Promises by creating a simple promise that resolves with a value and handles the fulfillment and rejection cases.

const promise1 = new Promise((resolve, reject) => {
    const x = 5;
    resolve(x);
})

promise1.then((resolvedX) => {
    console.log(resolvedX);
    return resolvedX * 2;
}).then((multipliedX) => {
    console.log(multipliedX);
}).catch((err) => {
    console.log('caught', err);
})

const promise2 = new Promise((resolve, reject) => {
    const x = 8;
    reject(x);
})

promise2.then((resolvedX) => {
    console.log(resolvedX);
    return resolvedX * 2;
}).then((multipliedX) => {
    console.log(multipliedX);
}).catch((err) => {
    console.log('caught', err);
})

/// 5. Write JavaScript code that demonstrates the usage of the `async` and `await` keywords to handle asynchronous operations in a synchronous-looking manner.

async function getUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    console.log('response sent', data);
    const result = JSON.stringify(data);
    console.log('result:', result);
    return 42;
}
const user = getUser();
console.log(user);