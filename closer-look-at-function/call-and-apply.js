'use strict';

const lufthansa = {
    airline: 'Lufthansa',
    iatacode: 'LH',
    bookings: [],
    // book: function {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`);


        this.bookings.push({flight: `${this.iatacode}${flightNum}`, name});
    },
}

lufthansa.book(230, 'John Doe')
lufthansa.book(563, 'Mevin D')
console.log(lufthansa.bookings);

const eurowings = {
    airline: 'Eurowings',
    iatacode: 'EW',
    bookings: [],
}

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