'use strict';
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const john = new Person('John', 1999);
console.log(john);

// 1. New {object} created
// 2. function is called, this => {object}
// 3. {object} linked to prototype
// 4. function automatically return {object}

const jane = new Person('Jane', 2013);
const matt = new Person('Matt', 2003);
console.log(jane, matt);

console.log(john instanceof Person);

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
}

Person.hey();
// john.hey();


//* Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

john.calcAge();

console.log(john.__proto__);
console.log(john.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(john));
console.log(Person.prototype.isPrototypeOf(Person));

console.log(john.hasOwnProperty('firstName'));
console.log(john.hasOwnProperty('species'));

console.log(john.__proto__);
// Object.prototype (top of prototype chain) ↓
console.log(john.__proto__.__proto__);
console.log(john.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 3, 5, 5, 1, 6];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// Don't create something like this in real time - bad practice
Array.prototype.unique = function ( ) {
  // return unique item from an array 
  return [...new Set(this)];
}
console.log(arr.unique());

console.dir(x => x + 1);

//* Coding Challenge #1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log(car1.make);
console.log(car2.make);

//* Class Declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  
  // instance method
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  
  greet() {
    console.log(`Hey ${this.firstName}!`);
  }

  // set a property that already exists
  set fullName (name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log(`Hey there 👋`);
    console.log(this);
  }
}

const janny = new PersonCl('Janny', 2000);
console.log(janny);
janny.calcAge();

console.log(janny.__proto__ === PersonCl.prototype);

janny.greet();

PersonCl.hey();

//* POINTS to remember
// 1. classes are NOT hoisted
// 2. classes are first-class citizens
// 3. classes are executed in strict mode
/*
const account = {
  owner: 'john',
  movements: [200, 530, 120, 300],
  
  get latest() {
    return this.movements.slice(-1).pop();
  },
  
  set latest(mov) {
    this.movements.push(mov)
  }
}

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

console.log();
console.log();

console.log(ac);


const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = 'Steven';
steven.birthYear = 2002;

steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto)

sarah.init('Sarah', 1979);
sarah.calcAge();

//* Coding Challenge #2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }
  
  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }
  
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS (speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();

ford.speedUS = 50;
console.log(ford);

//* Inheritance between classes: Constructor functions

// First Constructor function i.e. class
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Add method to Person prototype
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// create Second constructor function with additional details from Person constructor
const Student = function (firstName, birthYear, course) {
  // add Person constructor detail into this Student constructor
  Person.call(this, firstName, birthYear);
  
  // Additional detail
  this.course = course;
};

//* Linking Student Prototype to Person Protype to inherit addition methods & properties
Student.prototype = Object.create(Person.prototype);

// create new methods on Student Prototype
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);

mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

// Important: pointing back constructor to Student from Person
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

//* Coding Challenge 3

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// link the protypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(`Speed: ${this.speed}, Charge: ${this.charge};`);
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);

tesla.brake();
tesla.accelerate();

// Parent Class - using constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Parent Class - Methods
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// Child Class - using constructor function
const Student = function (firstName, birthYear, course) {
  // Inherit Parent Class - Properties
  // We use call() method because we are pointing `this` keyword to Student class. If we use regular function call like Person(firstName, birthYear) then `this` keyword points to undefined.
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Link Prototype - Change Student.prototype to Person.prototype
// Object.create() will return empty object {}
Student.prototype = Object.create(Person.prototype);

// Child Class - Method
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

// Create object i.e. mike with new operator
const mike = new Student('Mike', 1990, 'Computer Science');

mike.introduce();

mike.calcAge();

// Confirming that our prototype chain works:
console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true
console.log(mike instanceof Object); // true

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

//* Inheritance between classes - ES6 Classes
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // instance method
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  
  greet() {
    console.log(`Hey ${this.firstName}!`);
  }

  // set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  
  get fullName() {
    return this._fullName;
  }
  
  // Static method
  static hey() {
    console.log(`Hey there 👋`);
    console.log(this);
  }
}

// To implement inheretance between ES6 classes
// We only need 2 things - extends property & super() class
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // This needs to happen first!
    // Because it enables `this` keyword in constructor
    super(fullName, birthYear);
    
    // Extra property for StudentCl
    // this.course = course;
  }
}

const martha = new StudentCl('Martha Jones', 2012);

//* Inheritance between classes - Object.create

// Parent Object -
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

// Child Object -
const StudentProto = Object.create(PersonProto);

// Create a init method on child class
StudentProto.init = function (firstName, birthYear, course) {
  // Inherit from Parent Object
  PersonProto.init.call(this, firstName, birthYear);
  
  // Additional property for Child Object
  this.course = course;
};

// Method on Child Object
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

// Create empty obj {}
const jay = Object.create(StudentProto);

jay.init('Jay', 2010, 'Computer Science');

jay.introduce();
jay.calcAge();

class Account {
  // 1 - public fields (instances)
  locale = navigator.language;
  
  // 2 - private fields (instances)
  #movements = [];
  #pin;
  
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property (not private)
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
    
    console.log(`Thanks for opening an account, ${owner}`);
  }
  
  // 3 - Public methods
  // Public Interface of this object
  getMovements() {
    return this.#movements;
  }
  
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  
  requestLoan(val) {
    // if (this.#approveLoan(val)) {
      if (this._approveLoan(val)) {
        this.deposit(val);
        console.log(`Loan approved`);
        return this;
      }
    }
    
    static helper () {
      console.log('helper');
    }
    
    // 4 - Private methods
    // #approveLoan(val) {
      _approveLoan(val) {
        return true;
      }
    }
    
    const acc1 = new Account('Jonas', 'EUR', 1111);
    
    acc1.deposit(250);
    acc1.withdraw(140);
    acc1.requestLoan(1000);
    
    console.log(acc1.getMovements());
    console.log(acc1);
    
    // chaining
    acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
    console.log(acc1.getMovements());
    */

//* Coding Challenge 4
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }
}
class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(`Speed: ${this.speed}, Charge: ${this.#charge};`);
    return this;
  }
}

const revian = new EVCl('Rivian', 120, 23);
console.log(revian);
// console.log(revian.#charge);
revian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();
