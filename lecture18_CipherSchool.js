// Basic Class Declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person1 = new Person('Alice', 30);
console.log(person1.greet()); // Output: Hello, my name is Alice and I am 30 years old.

// Class Inheritance
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // Call the parent class constructor
        this.grade = grade;
    }

    // Method overriding
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and I am in grade ${this.grade}.`;
    }
}

const student1 = new Student('Bob', 20, 'A');
console.log(student1.greet()); // Output: Hello, my name is Bob, I am 20 years old, and I am in grade A.

// Static Methods
class MathUtils {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtils.add(5, 3)); // Output: 8

// Getters and Setters
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Getter
    get area() {
        return this.width + this.height;
    }

    // Setter
    set area(value) {
        this.width = this.height = Math.sqrt(value);
    }
}

const rect = new Rectangle(4, 9);
console.log(rect.area); // Output: 13
rect.area = 16;
console.log(rect.width); // Output: 4
console.log(rect.height); // Output: 4

// Private Fields and Methods (stage 3 proposal)
class Counter {
    #count = 0; // Private field

    increment() {
        this.#count++;
        console.log(this.#count);
    }

    #decrement() { // Private method
        this.#count--;
        console.log(this.#count);
    }

    publicDecrement() {
        this.#decrement();
    }
}

const counter = new Counter();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.publicDecrement(); // Output: 1

// Abstract Classes (using convention, since JS does not support them directly)
class Animal {
    constructor(name) {
        if (new.target === Animal) {
            throw new TypeError("Cannot construct Animal instances directly");
        }
        this.name = name;
    }

    speak() {
        throw new Error('You have to implement the method speak!');
    }
}

class Dog extends Animal {
    speak() {
        return `${this.name} barks.`;
    }
}

const dog = new Dog('Rex');
console.log(dog.speak()); // Output: Rex barks.

// Class Fields
class Car {
    make = 'Default Make'; // Public field
    model = 'Default Model'; // Public field

    displayDetails() {
        return `This car is a ${this.make} ${this.model}.`;
    }
}

const car = new Car();
car.make = 'Toyota';
car.model = 'Corolla';
console.log(car.displayDetails()); // Output: This car is a Toyota Corolla.
