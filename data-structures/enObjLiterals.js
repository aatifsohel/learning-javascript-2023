'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
    // computing
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // * Old way
    // openingHours: openingHours,

    // * enhanced object literal - ES6 feature
    openingHours,

    // * New way of writing functions without property
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]}, and  ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delecious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    // * Old way of writing functions into objects
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};
console.log(openingHours);
restaurant.orderPasta('a', 'b', 'c');

// Without Optional Chaining (?.)
if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// With Optional Chaining (?.)
console.log(restaurant.openingHours.mon?.open);

// Real world example
console.log('-----Real World Example----');
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
}

// If method exists?
console.log(restaurant.order?.(0, 1) ?? 'Method does not exists!');
console.log(restaurant.orderResotto?.(0, 1) ?? 'Method does not exists!');

// On arrays
const arr = [{ name: 'master', email: 'example@example.com' }];

console.log(arr[0]?.name ?? 'arr array is empty');
