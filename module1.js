/**
 * Module 1 Practice Model - JS2
 */

//-----------------Example-----------------OOP-----------
class ShoppingCart {
  cart = [];

  constructor(shopName, currency) {
    this.shopName = shopName;
    this.currency = currency;
  }

  addToCart(item) {
    this.cart.push(item);
  }

  removeFromCart(item) {
    const idToFind = item.id;
    this.cart = this.cart.filter((currentItem) => currentItem.id !== idToFind);
  }

  calculateTotalCost() {
    const totalCost = this.cart.reduce((total, item) => {
      total += item.price;
      return total;
    }, 0);
    return totalCost;
  }

  displayCart() {
    console.log("Your cart:");
    console.log("-------------------");
    this.cart.forEach((item) => {
      console.log(item.title);
    });
    console.log("===================");
  }

  displayTotalCost() {
    console.log("Total items: ", this.cart.length);
    console.log("The total of the cart is:", this.calculateTotalCost());
  }
}

const myCart = new ShoppingCart("Norway Bakery", "USD");

const cookies = { id: 23, title: "Chocolate Chip Cookies", price: 20.0 };
const cake = { id: 45, title: "Vanilla Cake", price: 30.0 };

myCart.addToCart(cookies);
myCart.addToCart(cookies);
myCart.addToCart(cake);
myCart.displayCart();
myCart.removeFromCart(cookies);
myCart.displayCart();
myCart.displayTotalCost();

// ---------------------------- First Order Class Example ----------------------------
class Order {
  #orderId;

  constructor(ordId, total, date) {
    this.#orderId = ordId;
    this.total = total;
    this.date = date;
  }

  printReceipt() {
    console.log(
      `Receipt Id: ${this.#orderId}, Date: ${this.date}, Total: ${this.total}`
    );
  }
}

const myOrder = new Order(1, 70, "11-30-2023");

myOrder.printReceipt();

// -------------------------- More Comprehensive Order Class Example ---------------------------
class EnhancedOrder {
  #orderId;
  #total;
  #date;

  constructor(ordId, total, date) {
    this.#orderId = ordId;
    this.#total = total;
    this.#date = date;
  }

  get OrderId() {
    return this.#orderId;
  }

  set OrderId(newOrderId) {
    this.#orderId = newOrderId;
  }

  get total() {
    return this.#total;
  }

  set total(newTotal) {
    if (newTotal >= 0) {
      this.#total = newTotal;
    } else {
      console.log("Total cannot be negative");
    }
  }

  get date() {
    return this.#date;
  }

  set date(newDate) {
    this.#date = newDate;
  }

  addTax() {
    this.#total += this.#total * 0.2;
  }

  printReceipt() {
    this.addTax();
    console.log(
      `Receipt Id: ${this.#orderId}, Date: ${this.#date}, Total: ${this.#total}`
    );
  }
}

const order = new EnhancedOrder(123, 100, "2023-06-23");

console.log(order.total);
console.log(order.date);

order.total = 120;
order.date = "2023-07-01";
order.printReceipt();

// ------------------------------ User Class Example -------------------------------
class User {
  constructor(name) {
    this.name = name;
  }

  greetUser() {
    console.log(`Hello ${this.name}!`);
  }

  static company = "Acme";
  static displayTime() {
    console.log("12:00");
  }
}

const newUser = new User("Ola Nordmann");
newUser.greetUser();
console.log(User.company);
User.displayTime();
//-----------------------------------Calculator-------------------------------------

class Calculator {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }

  static modulus(a, b) {
    return a % b;
  }

  static power(a, b) {
    return a ** b;
  }
}

const num1 = 10;
const num2 = 5;
console.log(`Addition: ${Calculator.add(num1, num2)}`);
console.log(`Subtraction: ${Calculator.subtract(num1, num2)}`);
console.log(`Multiplication: ${Calculator.multiply(num1, num2)}`);
console.log(`Division: ${Calculator.divide(num1, num2)}`);
console.log(`Modulus: ${Calculator.modulus(num1, num2)}`);
console.log(`Power: ${Calculator.power(num1, num2)}`);

/*---------------------Level 1 TASK----------------------------*/

class Person {
  #firstName;
  #lastName;
  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }
  getFirstName() {
    return this.#firstName;
  }
  setFirstName(newFirstName) {
    this.#firstName = newFirstName;
  }
  getLastName() {
    return this.#lastName;
  }
  setLastName(newLastName) {
    this.#lastName = newLastName;
  }
}
const person = new Person("Sana", "Khuram");

console.log("First Name:", person.getFirstName());
console.log("Last Name:", person.getLastName());

person.setFirstName("Sana");
person.setLastName("Khuram");
console.log("Updated First Name:", person.getFirstName());
console.log("Updated Last Name:", person.getLastName());

//----------------------------Inheritance in OOP--------------

class BasicOrder {
  #orderId;
  #customerName;

  constructor(orderId, customerName) {
    this.#orderId = orderId;
    this.#customerName = customerName;
  }

  printOrderDetails() {
    console.log(
      `Order Number: ${this.#orderId}. Customer Name: ${this.#customerName}`
    );
  }

  processOrder() {
    console.log(`Processing order #${this.#orderId} for ${this.#customerName}`);
  }
}

//--------Extended order----------

class CoffeeOrder extends BasicOrder {
  #qty;
  #type;
  constructor(orderId, customerName, qty, type) {
    super(orderId, customerName);
    this.#qty = qty;
    this.#type = type;
  }
  printCoffeeDetails() {
    console.log(`Coffee Order: ${this.#qty} x ${this.#type}`);
  }
}

class WineOrder extends BasicOrder {
  
  #bottleCount;
  #wineType;

  constructor(orderId, customerName, bottleCount, wineType) {
    super(orderId, customerName);
    this.#bottleCount = bottleCount;
    this.#wineType = wineType;
  }
  printWineDetails() {
    console.log(
      `Wine Order: ${this.#bottleCount} bottles of ${this.#wineType}`
    );
  }
}

const generalOrder = new BasicOrder(1, "Alice"); 
generalOrder.printOrderDetails();
generalOrder.processOrder();

const coffeeOrder = new CoffeeOrder(2, "Lily", 3, "Latte");
coffeeOrder.printOrderDetails();
coffeeOrder.processOrder();
coffeeOrder.printCoffeeDetails();

const wineOrder = new WineOrder(3, "Bob", 2, "Merlot");
wineOrder.printOrderDetails();
wineOrder.processOrder();
wineOrder.printWineDetails();

coffeeOrder.qty = 6;
coffeeOrder.type = 'Espresso';
console.log(`Updated Coffee Order: ${coffeeOrder.qty} x ${coffeeOrder.type}`);

wineOrder.bottleCount = 6; 
wineOrder.wineType = 'Chardonnay';
console.log(`Updated Wine Order: ${wineOrder.bottleCount} bottles of${wineOrder.wineType}`);

//---------------Lesson Task----------------------

class Bear {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hibernate() {
    console.log(`${this.name} is hibernating.`);
  }
  findFood() {
    console.log(`${this.name} is looking for food.`);
  }
}

class GrizzlyBear extends Bear {
  constructor(name, age) {
    super(name, age);
  }
  findFood() {
    console.log(`${this.name} the grizzly bear is catching fish in the river.`);
  }
}

class PolarBear extends Bear {

  constructor(name, age) {
    super(name, age);
  }
  findFood() {
    console.log(`${this.name} the polar bear is hunting seals.`); 
  }
}

const grizzlyBear = new GrizzlyBear("Grizzly", 10);
const polarBear = new PolarBear("Polar", 5); 

grizzlyBear.findFood();
polarBear.findFood();


//------------------adding new method-------------//


class CustomerOrder {
  #orderId;
  #customerName;

  constructor(orderId, customerName) {
    this.#orderId = orderId;
    this.#customerName = customerName;
  }

  printOrderDetails() {
    console.log(
      `Order Number: ${this.#orderId}, Customer Name: ${this.#customerName}`
    );
  }

  processOrder() {
    console.log(
      `Processing order #${this.#orderId} for ${this.#customerName}.`
    );
  }

  getOrderId() {
    return this.#orderId;
  }

  getCustomerName() {
    return this.#customerName;
  }
}


class WinePurchase extends CustomerOrder {
  #bottleCount;
  #wineType;

  constructor(orderId, customerName, bottleCount, wineType) {
    super(orderId, customerName);
    this.#bottleCount = bottleCount;
    this.#wineType = wineType;
  }

  processWineOrder() {
    console.log(
      `Processing wine order #${this.getOrderId()} for ${this.getCustomerName()}.`
    );
    console.log(`Wine order: ${this.#bottleCount} bottles of ${this.#wineType}`);
    
    let total = 0;

    switch (this.#wineType) {
      case "Pino":
        total = this.#bottleCount * 200;
        break;
      case "Merlot":
        total = this.#bottleCount * 100;
        break;
      case "Champagne":
        total = this.#bottleCount * 400;
        break;
      default:
        console.log("Unknown wine type.");
        break;
    }

    console.log(`Total: ${total}`);
  }
}

class CoffeePurchase extends CustomerOrder {
  #qty;
  #type;

  constructor(orderId, customerName, qty, type) {
    super(orderId, customerName);
    this.#qty = qty;
    this.#type = type;
  }

  processCoffeeOrder() {
    console.log(
      `Processing coffee order #${this.getOrderId()} for ${this.getCustomerName()}.`
    );
    console.log(`Coffee Order: ${this.#qty} x ${this.#type}`);
    let total = 0;

    switch (this.#type) {
      case "Latte":
        total = this.#qty * 20;
        break;
      case "Americano":
        total = this.#qty * 10;
        break;
      case "Moccachino":
        total = this.#qty * 5;
        break;
      default:
        console.log("Unknown coffee type.");
        break;
    }

    console.log(`Total: ${total}`);
  }
}


//---------------Task--------------

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`Hello my name is ${this.name}, and i am ${this.age} years old. `);
  }
}
class Employee extends Human{
  #jobTitle;
  #salary;
  constructor(name, age, jobTitle, salary) {
    super(name, age);
    this.#jobTitle = jobTitle;
    this.#salary = salary;
  }
  getJobDetails() {
    console.log(
      `Hello my name is ${this.name}, I am ${this.age} years old, and i work as a ${this.#jobTitle}.`
    );
  }
} 
const human1 = new Human("Sana", 38);
human1.introduce();

const employee1 = new Employee("Khuram", 45, "Process Engineer", 90000);
employee1.introduce();
const people = [human1, employee1];
people.forEach(person => person.introduce());
employee1.getJobDetails();



//--------------function Constructor-------------


function Menu(menuId, total, date) {
  this.menuId = menuId,
    this.total = total,
    this.date = date
}

const myFirstOrder = new Menu(1, 190, "19-30-2023");
const mySecondOrder = new Menu(2, 70, "11-30-2023");

console.log(myFirstOrder.menuId);
console.log(mySecondOrder.menuId);


function Check(checkId, total, date) {
  (this.checkId = checkId),
    (this.total = total),
    (this.date = date),
    (Order.prototype.printReceipt = function () {
      console.log(
        `Receipt Id: ${this.checkId}, Date:${this.date} Total: ${this.total}`
      );
    });
}

const myFirstCheck = new Check(1, 190, "10.12.2024");
const mySecondCheck = new Check(2, 70, "15-10-2024");

console.log(myFirstCheck);
console.log(mySecondCheck);


//----------call function-------


function Ord(ordId, total, date) {
  this.ordId = ordId;
  this.total = total;
  this.date = date;
  this.printReceipt = function () {
    console.log(
      `Receipt Id: ${this.ordId}, Date: ${this.total} Total: ${this.date}`
    );
  };
}

function CoffeeOrd(qty, ordId, total, date) {
  Ord.call(this, ordId, total, date); 
  this.qty = qty;
}
const myFirstCoffeeOrd = new CoffeeOrd(5,1, 190, "10-30-2023");
	const mySecondCoffeeOrd = new CoffeeOrd(8,2, 70, "11-30-2023");
	
	console.log(myFirstCoffeeOrd);
console.log(mySecondCoffeeOrd);
  
CoffeeOrd.prototype = Object.create(Order.prototype);
  
//--------------------Information Hiding with function construction-----------

function List(listId, total, date) {
  this.listId = listId,
    this.total = total,
    this.date = date;
}
List.prototype.printReceipt = function () {
  console.log(
    `Receipt Id:${this.listId}, Date: ${this.date} Total:${this.total}`
  );
};

function CoffeeList(qty, listId, total, date) {
  List.call(this, listId, total, date);
  this.qty = qty;
}

CoffeeList.prototype = Object.create(List.prototype);
CoffeeList.prototype.printCoffeeReceipt = function () {
  console.log(
    `Receipt Id:${this.listId}, Date: ${this.date} Total${this.total}`
  );
};

const myFirstCoffeeList = new CoffeeList(5, 5, 5, "10-20-2024");
const mySecondCoffeeList = new CoffeeList(6, 6, 6, "10-10-2025");

console.log(myFirstCoffeeList);
console.log(mySecondCoffeeList);

	myFirstCoffeeList.printCoffeeReceipt();
myFirstCoffeeList.printReceipt();
 
//-----------------------IIFE----------------------🦁


const lion = (function () {
  let sound = "Roarrrr";
  return {
    speak: function () {
      return `The Lion says ${sound}`;
    },
    setSound: function (newSound) {
      sound = newSound;
    },
  };
})();

console.log(lion.sound);
lion.setSound("Meow"); 

//----------------💸--------------


let balance = 0;

const deposit = (amount) => {
  balance += amount;
};

const withdraw = (amount) => {
  balance -= amount;
};

const getBalance = () => {
  return balance;
};

const bank = {
  deposit,
  withdraw,
  getBalance,
};

const printBalance = () => {
  console.log(`You now have ${bank.getBalance()} NOK in your account.`);
};

const handleDeposit = (amount) => {
  bank.deposit(amount);
  printBalance();
};

const handleWithdraw = (amount) => {
  bank.withdraw(amount);
  printBalance();
};

handleDeposit(100);  
handleWithdraw(20);  


//------------------Lesson Task---------------//

/**
 * @constructor
 * @param {string} name - The name of the animal.
 * @param {string} sound - The sound the animal makes.
 */
const Animal = (function () {
  function Animal(name, sound) {
    let _name = name;
    let _sound = sound;

    this.getName = function () {
      return _name;
    };

    this.setName = function (newName) {
      _name = newName;
    };

    this.getSound = function () {
      return _sound;
    };

    this.setSound = function (newSound) {
      _sound = newSound;
    };
  }

  Animal.prototype.makeSound = function () {
    console.log(this.getSound());
  };

  return Animal;
})();

const cat = new Animal('Cat', 'Meow');
cat.makeSound();

cat.setName('Tiger');
cat.setSound('Roar');
console.log(cat.getName());
console.log(cat.getSound());

//----------Adding Private Fields--------///


const People = (function () {
  function People(firstName, lastName) {
    let _firstName = firstName;
    let _lastName = lastName;

    this.getFirstName = function () {
      return _firstName;
    };

    this.setFirstName = function (newFirstName) {
      _firstName = newFirstName;
    };

    this.getLastName = function () {
      return _lastName;
    };

    this.setLastName = function (newLastName) {
      _lastName = newLastName;
    };
  }

  People.prototype.introduce = function () {
    console.log(`Hello, I am ${this.getFirstName()} ${this.getLastName()}`);
  };

  return People;
})();

const people1 = new People('Lily', 'Thomas');
people1.introduce();  

people1.setFirstName('Nina');
people1.setLastName('Anita');
people1.introduce();  


//---------------Create a Function Constructor---------------🚗🚗🚗🚗🚗🚗

function Vehicle(make, model) {
  this.make = make;
  this.model = model;
}
Vehicle.prototype.getDetails = function () {
  console.log(`Vehicle:${this.make} ${this.model}`);
};

const car = new Vehicle('Tesla', 'Jaguar');
car.getDetails();

function Car(make, model, numDoors) {
  Vehicle.call(this, make, model);
  this.numDoors = numDoors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.getDetails = function () {
  console.log(`Car: ${this.make} ${this.model}, , Doors:${this.numDoors}`);
};

const sedan= new Car('Honda', 'Accord', 4);
sedan.getDetails();

const genericVehicle = new Vehicle('Ford', 'Explorer');
genericVehicle.getDetails();

//-------------W3 school--------------

function Family(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
const myFather = new Family("John", "Doe", 50, "blue");
const myMother = new Family("Sally", "Rally", 48, "green");

myFather.nationality = "English";

console.log(myFather);
console.log(myMother);