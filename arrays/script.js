'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  // Sorting
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements.filter(mov => mov > 0).map(deposit => deposit * acc.interestRate / 100).filter((int, i, arr) => {
    return int >= 1;
  }).reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;

};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  });
};

createUsernames(accounts);

// Update UI
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event handlers
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // prevent submission of form
  e.preventDefault();

  // find if user exist or not
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    // Hide blinking cursor from input field
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';

  if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
    // Doing transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movment
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username && currentAccount.pin === Number(inputClosePin.value)) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);

    // Delete account
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// Sorting Functionality
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault;
  displayMovements(currentAccount.movements, !sorted);
  // flipping variable :-> true <-> false
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);


/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// * Slice Method - returns new array
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));

// * Splice Method - mutates original array
// console.log(arr.splice(2));
arr.splice(-1); //removes last element
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// * Reverse Method - mutates original array
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);


// * Concat Method
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// * Join Method
console.log(letters.join(' - '));
*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
  for (const [i, movement] of movements.entries()) {
  if (movement > 0 ){
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
}

console.log('----FOR EACH----');
movements.forEach(function (movement, index, arr) {
  if (movement > 0 ){
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdraw ${Math.abs(movement)}`);
  }
});

// 0: function (200)
// 1: function (450)
// ...
*/
/*
// forEach with Maps and Sets
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, map){
  console.log(`${value}: ${value}`);
});

// TODO - Challenge 1

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];


let age;

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0,1);
  dogsJuliaCorrected.splice(-2);

  const both = dogsJuliaCorrected.concat(dogsKate);
  console.log(both);
  both.forEach(function(dogAge, index, both) {
    if (dogAge >= 3) {
      console.log(`Dog number ${index + 1} is an adult, and is ${dogAge} years old`);
    } else {
      console.log(`Dog number ${index + 1} is still a puppy 🐶`);
    }
  })
  };

  // checkDogs(dogsJulia, dogsKate);
  checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


  const eurToUsd = 1.1;
  // const movementsUSD = movements.map(function (mov) {
    //   return mov * eurToUsd;
    // });
    const movementsUSD = movements.map(mov => mov * eurToUsd);

    console.log(movements);
console.log(movementsUSD);

const movementsDescription = movements.map((mov, i) => {
  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
});

console.log(movementsDescription);

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposits);
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

console.log(movements);

// const balance = movements.reduce(function(acc, curr, i, arr){
  //   console.log(`Iteration ${i}: ${acc}`);
  // return acc + curr;
  // }, 0);
  const balance = movements.reduce((acc, curr) => acc + curr, 0);
  console.log(balance);

  // Maximum Value
  const max = movements.reduce((acc, mov) => {
    if (acc > mov) return acc;
    else return mov;
  }, movements[0]);
  console.log(max);

  // Coding Challenge 2

  const dogsJulia = [5, 2, 4, 1, 15, 8, 3];
  const dogsKate = [16, 6, 10, 5, 6, 1, 4];

  const calAverageHumanAge = function (arr) {
    const dogsToHumanAge = arr.map(dogAge => dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4);
  console.log(dogsToHumanAge);
  const dogsToHumanAdult = dogsToHumanAge.filter(humanAge => humanAge >= 18);
  console.log(dogsToHumanAdult);
  const avgHumanAge = dogsToHumanAdult.reduce((acc, age) => acc + age, 0);
  return avgHumanAge / dogsToHumanAdult.length;
};

console.log(calAverageHumanAge(dogsJulia));
console.log(calAverageHumanAge(dogsKate));

// Pipeline
const eurToUsd = 1.1;
// const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0);

// to display individual array while using pipeline
const totalDepositsUSD = movements.filter(mov => mov > 0).map((mov, i, arr) => {
  // console.log(arr);
  return mov * eurToUsd}).reduce((acc, mov) => acc + mov, 0);

  console.log(totalDepositsUSD);
}

// Coding Challenge 3

const dogsJulia = [5, 2, 4, 1, 15, 8, 3];
const dogsKate = [16, 6, 10, 5, 6, 1, 4];

const calcAvg = arr => arr.map(mov => mov <= 2 ? 2 * mov : 16 + mov * 4).filter(age => age >= 18).reduce((acc, adultAge, i, arr) => acc + adultAge / arr.length, 0);

console.log(`pipeline`);
console.log(calcAvg(dogsJulia), calcAvg(dogsKate));

// Find Method
const firstWidthrawal = movements.find(mov => mov < 0);
console.log(firstWidthrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);


// FLAT METHOD
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2,], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());

// overall account balance
// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

// using chaining
const overallBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// flatMap Method
const overallBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

// Sorting with strings - mutates array
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers - sorting works on string
console.log(movements);
// console.log(movements.sort()); // NOT WORKS

// Sorting NUMBERS with CB function - Works
// return something < 0, A, B (keep order)
// return something > 0, B, A (switch order)
// Ascending order
// movements.sort((a, b)=> {
  // if (a > b) return 1;
// if (b > a) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending order
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
*/

// creating & filling arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);

// empty array + fill method
const x = new Array(7);
console.log(x);

x.fill(1, 3, 5);
x.fill(1);
console.log(x);

// filling predefined arr
arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({length: 7}, () => 1);
console.log(y);

const z = Array.from({length: 7}, (_, i) => i + 1);
console.log(z);


labelBalance.addEventListener('click', function() {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => el.textContent.replace('€', ''));
console.log(movementsUI);

// second way
const movementsUI2 = [...document.querySelectorAll('.movements__value')];
console.log(movementsUI2.map(el => el.textContent.replace('€', '')));
})