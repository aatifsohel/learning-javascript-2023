'use strict';

const lufthansa = {
    airline: 'Lufthansa',
    iatacode: 'LH',
    bookings: [],
    // book: function {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`);


        this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
    },
};

lufthansa.book(230, 'John Doe');
lufthansa.book(563, 'Mevin D');
console.log(lufthansa.bookings);

const eurowings = {
    airline: 'Eurowings',
    iatacode: 'EW',
    bookings: [],
};

// copying method into a variable
const book = lufthansa.book;

// not works
// book(23, 'Jane Doe');


// Call Method
book.call(eurowings, 23, 'Jane Doe');
console.log(eurowings);

book.call(lufthansa, 253, 'Lee Cooper');
console.log(lufthansa);

// Apply Method
const flightData = [583, 'Harry Potter']; // Array
book.apply(eurowings, flightData); // Not to use 
console.log(eurowings);

book.call(eurowings, ...flightData); // Use spread operator method
console.log(eurowings);

// Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
bookEW(12, 'Steven J');

// using flight num specifically
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Joey M');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

// lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(26));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    };
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(26));
