// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);
console.log('Importing module');

// everything as shopping cart
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// Do not mix named export & default export ↓↓↓
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price, tq);
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);
