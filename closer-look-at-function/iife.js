'use strict';

const runOnce = function () {
console.log('This will never run again');
};

runOnce();

// IIFE 
(function () {
    console.log('This will never run again');
})();

(() => console.log('This will never run again'))();

// variable scoping
{
    const isPrivate = 23;
    var notPrivate = 46; 
}

// console.log(isPrivate);
console.log(notPrivate);