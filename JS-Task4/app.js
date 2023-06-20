/// 1. Write a JavaScript function that demonstrates the concept of this by creating an object with a method that uses this to access its own property.
thisDemo();

function thisDemo() {
    const obj = {
        name: "test",
        displayName() {
            console.log(this.name);
        }
    }
    obj.displayName();
}
/// 2. Write a JavaScript function that demonstrates the concept of prototype by adding a new method to the prototype of an object and accessing it from an instance of that object.
function Animal(name) {
    this.name = name;
}
Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating ${amount} kg's`)
}
const leo = new Animal('Leo');
leo.eat(10);

/// 3. Write a JavaScript function that demonstrates the usage of the call method to invoke a function with a specific "this" value and additional arguments.
const obj = {
    a: 'someName',
}

function callShowcase(a, b) {
    console.log('this.a:', this.a);
    console.log(a, b);
}
callShowcase.call(obj);
callShowcase.call(obj, 1, 2);

/// 4. Write a JavaScript function that demonstrates the usage of the apply method to invoke a function with a specific "this" value and an array of arguments.
const obj2 = {
    a: ['someArrayValue'],
}

function applyShowcase(a) {
    console.log('this.a:', this.a);
    console.log(a);
}
applyShowcase.apply(obj2);
applyShowcase.apply(obj2, [1, 2]);

/// 5. Write a JavaScript function that demonstrates the usage of the `bind method to create a new function with a specific "this" value.
const obj3 = {
    a: ['someName'],
}

function bindShowcase(a) {
    console.log('this.a:', this.a);
    console.log(a);
}
const bs = bindShowcase.bind(obj2);
console.log('bind------');
bs();
bs(42);

/// 6. Write a JavaScript constructor function that creates instances of a Book object with properties for title and author.
function Book(title, author) {
    this.title = title;
    this.author = author;
}

const book = new Book('Test', 'Bob');
console.log(book.title, book.author);
/// 7. Explain the concept of prototypes in JavaScript and how they are used to achieve inheritance and share properties and methods between objects.
const protoObj1 = {
    abc: 'abc',
    prop1: () => console.log('prop1'),
}

const protoObj2 = {
    prop2: () => console.log('prop2'),
}

Object.setPrototypeOf(protoObj2, protoObj1);
protoObj2.prop2();
protoObj2.prop1();
console.log(protoObj2.abc);
console.log(protoObj1.__proto__ === Object.prototype);

/// 8. Create a JavaScript class called Rectangle that represents a rectangle with properties for width and height. Include a static method calculateArea that calculates and returns the area of the rectangle.
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    static calculateArea(width, height) {
        return width * height;
    }
}
const rectangle = new Rectangle(4,6);
console.log(rectangle.width, rectangle.height);
console.log(Rectangle.calculateArea(4,5));