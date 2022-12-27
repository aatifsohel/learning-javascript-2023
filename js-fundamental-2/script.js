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

// function calcAge(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge(1999);
// console.log(age1);

// function expression

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1999);
// console.log(age1, age2)

// Arrow Function

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1999);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1999, 'Aatif'));
// console.log(yearsUntilRetirement(1990, 'John'));

// Function calling other functions

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// Reviewing functions

/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;
    } else {
        return -1;
    }
    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1950, 'Aatif'));
*/

// Challenge 01 - Function
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);
*/

// Arrays

/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'John'
const john = [firstName, 'Doe', 2037 - 1991, 'teacher', friends];
console.log(john);
console.log(john.length);

// Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1984, 2008, 2020, 2018];

// const age = years[0] + years[2];
// console.log(age);

const age = calcAge(years[0]);
console.log(age);
*/

// Array Methods
/*
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// removing elements
friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

// position / location of array element
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

// checking if element is in the array

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
*/

// Challenge 02 - Arrays
/*
const calcTip = function (billValue) {
    const tip = 300 >= billValue >= 50 ? billValue * 0.15 : billValue * 0.2;
    return tip;
}

// console.log(calcTip(100));

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total1 = tips[0] + bills[0];
const total2 = tips[1] + bills[1];
const total3 = tips[2] + bills[2];

const total = [total1, total2, total3];
console.log(total)
*/

// Objects
/*
const john = {
    firstName: 'John',
    lastName: 'Doe',
    age: 2037 - 1991,
    job: 'Unknown',
    friends: ['Mick', 'Dan', 'Joe']
}

// Retrieving data
console.log(john);

console.log(john.lastName);

console.log(john['lastName']);

const nameKey = 'Name'
console.log(john['first' + nameKey]);
console.log(john['last' + nameKey]);

// console.log(john.'last' + nameKey);

const interestedIn = prompt('What do you want to know about John? Choose between firstName, lastName, age, job, and friends');

if (john[interestedIn]) {
    console.log(john[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
}

// adding property & value in the object
john.location = 'U.S';
john['twitter'] = '@johndoe';

// Mini Challenge
// John has 3 friends, and his best friend is called Mick!

console.log(`${john.firstName} has ${john.friends.length} friends, and his best friend is ${john.friends[0]}`);
*/

// Object Methods
/*
const john = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1991,
    job: 'Unknown',
    friends: ['Mick', 'Dan', 'Joe'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    summary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
}

console.log(john.calcAge());

console.log(john.age);

// Challenge

console.log(john.summary());
*/

// Challenge 03 - Objects
/*
const mark = {
    fullName: 'Mark Miller',
    weight: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    weight: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}

console.log(mark.calcBMI());
console.log(john.calcBMI());

if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
} else {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
}
*/

// for Loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repition ${rep}!`);
// }

// looping arrays
/*
const johnArray = ['John Doe', 2037 - 1991, 'teacher', ['Mick', 'Dan', 'Joe'], true];

const typeOfelement = [];

for (let i = 0; i < johnArray.length; i++) {
    //reading from array
    console.log(johnArray[i], typeof johnArray[i]);

    // writing to array
    // typeOfelement[i] = typeof johnArray[i];
    typeOfelement.push(typeof johnArray[i]);
}

console.log(typeOfelement);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log('----Only Strings----');

for (let i = 0; i < johnArray.length; i++) {
    if (typeof johnArray[i] !== 'string') continue;
    console.log(johnArray[i], typeof johnArray[i]);
}

console.log('----Break with Number----');

for (let i = 0; i < johnArray.length; i++) {
    if (typeof johnArray[i] === 'number') break;
    console.log(johnArray[i], typeof johnArray[i]);
}
*/

// Looping backward and loops in loop

/*
// backward
const johnArray = ['John Doe', 2037 - 1991, 'teacher', ['Mick', 'Dan', 'Joe'], true];

for (let i = johnArray.length - 1; i >= 0; i--) {
    console.log(johnArray[i]);
}


// Loop inside a loop
for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`----Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetation ${rep}`);
    }
}
*/

// While Loop

/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weight repetation ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weight repetation ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);

    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice === 6) console.log('Loop is about to end...');
}

*/

const calcTip = function (billValue) {
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}


console.log(calcAverage(totals));