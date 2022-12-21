// let js = "amazing";
// console.log(40 + 22 - 10);

// console.log('Aatif');
// console.log('23');

// // VARIABLES

// let firstName = "Aatif";
// console.log(firstName);

// // CONSTANTS

// let PI = 3.14;

// // DESCRIPTIVE VARIABLE NAMES

// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// // Dynamic Typing

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1999;
// console.log(typeof year);

// console.log(typeof null);

// // let, var, const

// let age = 30;
// age = 31;

// const birthYear = 1999;
// // birthYear = 1990;

// // const job;

// var job = "programmer";
// job = 'teacher';


// // OPERATORS in Javascript

// const currentYear = 2022;
// const ageAatif = currentYear - 1999;
// const ageJonas = currentYear - 1991;
// console.log(ageAatif, ageJonas);

// console.log(ageAatif * 2, ageJonas / 10, 2 ** 3);

// const firstName = "Aatif";
// const lastName = "Sohel";
// console.log(firstName + ' ' + lastName);

// // Assignment Operators

// let x = 10;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

// Comparison Operators

// console.log(ageAatif < ageJonas);
// console.log(ageAatif >= 18);

// console.log(currentYear - 1999 > currentYear > 1991);


// Test 01

// Data 01

// const heightMark = 1.69;
// const weightMark = 78;

// const heightJohn = 1.95;
// const weightJohn = 95;


// const bmiOfMark = weightMark / heightMark ** 2;
// console.log(bmiOfMark);

// const bmiOfJohn = weightJohn / heightJohn ** 2;
// console.log(bmiOfJohn);

// const markHigherBmi = bmiOfMark > bmiOfJohn;

// console.log(bmiOfMark, bmiOfJohn, markHigherBmi);


// if / else statement

// const age = 15;

// if (age >= 18) {
//     console.log('Sarah can start driving license.');
// } else {
//     const yearsleft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsleft} years :`);
// }

// const birthYear = 1999;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

// Challenge 02

// if (bmiOfMark > bmiOfJohn) {
//     console.log(`Mark's BMI (${bmiOfMark}) is higher than John's (${bmiOfJohn})!`)
// } else {
//     console.log(`John's BMI (${bmiOfJohn}) is higher than Mark's (${bmiOfMark})!`)
// }



// const hasDriverLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive...')
// }

// const isTired = false; // C
// console.log(hasDriverLicense && hasGoodVision && isTired);


// if (hasDriverLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive...')
// }


// Challenge 03
///////////////

// const teamDolphinsScore = 96 + 108 + 89;
// const teamKoalasScore = 88 + 91 + 110;

// const teamDolphinsAvgScore = teamDolphinsScore / 3;
// const teamKoalasAvgScore = teamKoalasScore / 3;

// console.log(teamDolphinsAvgScore, teamKoalasAvgScore);
// console.log(teamDolphinsScore, teamKoalasScore);

// if (teamDolphinsAvgScore > teamKoalasAvgScore) {
//     console.log(`Team Dolphins is the winner with score ${teamDolphinsAvgScore}`);
// } else if (teamKoalasAvgScore > teamDolphinsAvgScore) {
//     console.log(`Team Koalas is the winner with score ${teamKoalasAvgScore}`);
// } else {
//     console.log('DRAW!!!')
// }

// Challenge 03 - Bonus 1

// const teamDolphinsScore = 97 + 112 + 101;
// const teamKoalasScore = 109 + 95 + 123;

// const teamDolphinsAvgScore = teamDolphinsScore / 3;
// const teamKoalasAvgScore = teamKoalasScore / 3;

// console.log(teamDolphinsAvgScore, teamKoalasAvgScore);
// console.log(teamDolphinsScore, teamKoalasScore);

// if ((teamDolphinsAvgScore > teamKoalasAvgScore) && (teamDolphinsAvgScore >= 100)) {
//     console.log(`Team Dolphins is the winner with score ${teamDolphinsAvgScore}`);
// } else if ((teamKoalasAvgScore > teamDolphinsAvgScore) && (teamKoalasAvgScore >= 100)) {
//     console.log(`Team Koalas is the winner with score ${teamKoalasAvgScore}`);
// } else {
//     console.log('DRAW!!!');
// }

// Challenge 03 - Bonus 2


const teamDolphinsScore = 97 + 112 + 101;
const teamKoalasScore = 109 + 95 + 106;

const teamDolphinsAvgScore = teamDolphinsScore / 3;
const teamKoalasAvgScore = teamKoalasScore / 3;

console.log(teamDolphinsAvgScore, teamKoalasAvgScore);
console.log(teamDolphinsScore, teamKoalasScore);

if ((teamDolphinsAvgScore > teamKoalasAvgScore) && (teamDolphinsAvgScore >= 100)) {
    console.log(`Team Dolphins is the winner with score ${teamDolphinsAvgScore}`);
} else if ((teamKoalasAvgScore > teamDolphinsAvgScore) && (teamKoalasAvgScore >= 100)) {
    console.log(`Team Koalas is the winner with score ${teamKoalasAvgScore}`);
} else {
    console.log('DRAW!!!');
}


