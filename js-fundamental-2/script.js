'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// // if (passTest) hasDriversLicense = true;
// if (passTest) hasDriverLicense = true;

// if (hasDriversLicense) console.log('I can drive :D')


// Functions

function logger() {
    console.log('This string is in logger function');
}

// calling / running / invoking function
logger();
logger();
logger();

// function with parameters

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
