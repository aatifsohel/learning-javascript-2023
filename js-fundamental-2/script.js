'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// // if (passTest) hasDriversLicense = true;
// if (passTest) hasDriverLicense = true;

// if (hasDriversLicense) console.log('I can drive :D')


// Functions

// function logger() {
//     console.log('This string is in logger function');
// }

// calling / running / invoking function
// logger();
// logger();
// logger();

// function with parameters

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// function declarations

function calcAge(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge(1999);
console.log(age1);

// function expression 

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1999);

console.log(age1, age2)