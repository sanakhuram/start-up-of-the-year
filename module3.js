document
  .getElementById("learnMoreBtn")
  .addEventListener("mouseover", function () {
    this.style.backgroundColor = "green";
  });

document
  .getElementById("learnMoreBtn")
  .addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
  });
document.getElementById("submitBtn").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value;
  if (name === "") {
    alert("Name cannot be empty!");
  } else {
    alert(`Hello, ${name}!`);
  }
});
document.getElementById("parent").addEventListener("click", function () {
  console.log("parent clicked - Bubbling");
});

document.getElementById("child").addEventListener("click", function (event) {
  console.log("child clicked");
   event.stopPropagation();
});

document.getElementById("parent").addEventListener("click", function () {
  console.log("parent clicked - Capturing");
},true);


function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new DataTransfer().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      return func(...args);
    }
  };
}

window.addEventListener("scroll", throttle(function () {
  console.log("Scroll event triggered");
}, 500));


function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

document.getElementById("nameInput").addEventListener(
  "input",
  debounce(function () {
    console.log("Input event debounced");
  }, 300)
);

const customEvent = new CustomEvent("customAlert", {
  detail: { message: "Hello from custom event!" },
});

document
  .getElementById("triggerEventBtn")
  .addEventListener("click", function () {
    document.dispatchEvent(customEvent);
  });


document.addEventListener("customAlert", function (event) {
  alert(event.detail.message);
});

let symbol1 = Symbol('identifier');
let symbol2 = Symbol('identifier');
console.log(symbol1 === symbol2); 

let globalSymbol = Symbol.for('globalSymbol');
let sameGlobalSymbol= Symbol.for('globalSymbol');
console.log(globalSymbol === sameGlobalSymbol);
let symbolKey = Symbol.keyFor(globalSymbol);
console.log(symbolKey);

let capitals = new Map([
  ["USA", "Washington, D.C."],
  ["France", "Paris"],
  ["Japan", "Tokyo"],
]);

capitals.set("India", "New Delhi");
console.log(capitals.get('France')); 
if (capitals.has('Japan')) {
  console.log('Japan is in map');
} else {
  console.log('Japan is not in map');
}

capitals.forEach((value,key)=> {
  console.log(`${key}: ${value}`);
});

for (let [key, value] of capitals) {
  console.log(`${key}: ${value}`);
}

capitals.delete('USA');
capitals.clear();

console.log(capitals.size);

let numbers = new Set([1, 2, 3, 4, 5]);

numbers.add(6);
numbers.add(3);

numbers.delete(5);
numbers.clear();


if (numbers.has(2)) {
  console.log('Set contains 2');
} else {
  console.log('Set does not contain 2');
}

numbers.forEach(function (value) {
  console.log(value);
});

for (let value of numbers) {
  console.log(value);
}

console.log(numbers.size);

let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, 'Some Value');

let keyObj = {};
weakMap.set(keyObj, { data: 'Some data' });
console.log(weakMap.get(keyObj));

if (weakMap.has(keyObj)) {
  console.log("WeakMap has the key");
} else {
  console.log("WeakMap does not have the key");
}


class Stack {
  constructor() {
    this.items = [];
  }


  push(element) {
    this.items.push(element);
  }


  pop() {
    if (this.items.length === 0) return "Stack is empty";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }


  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

let browserHistory = new Stack();


browserHistory.push('Homepage');
browserHistory.push('Article Page');
browserHistory.push('Contact Us');


console.log('Revisiting: ' + browserHistory.pop());


console.log('Current Page: ' + browserHistory.peek());

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new ListNode(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}

const myWorker = new Worker('worker.js');

myWorker.postMessage(10);

myWorker.onmessage = function (e) {
  console.log('Main thread received:', e.data);
};

const complexData =  {
  numbers: [1, 2, 3, 4, 5],
  operation: 'sum'
};
myWorker.postMessage(complexData);

var x = 10;
let y = 20;
const z = 30;

console.log("Initial values:", x, y, z);

x = 15;
y = 25;
console.log("After reassignment:", x, y);

//--------------Arrow function--------------

const add = (a, b) => {
  const result = a * b;
  console.log(`Arrow function:${a} + ${b}=`, result);
  return result;
};

function multiply(a, b) {
  const result = a * b;
  console.log(`Normal function: ${a}*${b}=`, result);
  return result;
}
function multiply(a, b) {
  const result = a * b;
  console.log(`Normal function: ${a} * ${b} = `, result);
  return result;
}

add(2, 3);
multiply(4, 5);

//--------------Template Literals-----------------

const name = "Alice";
const age = 30;
const greeting = `Hello, ${name}! you are ${age} years old.`;
console.log(greeting);


//------------ Object and Array Destruction--------------------

const person = { navn: "Alice", gammel: 25 };
const { navn, gammel } = person;
console.log("Destructed Object:", navn, gammel);

const number = [1, 2 ,3];
const [first, second, third] = number;
console.log("Destructed array:", first, second, third);


//------------Async/Await vs Promise Chaining-------------------

function fetchData() {
  return new Promise((resolve) => setTimeout(() => resolve("data"), 1000));
}

fetchData()
  .then((data) => {
    console.log("Promise chaining result:", data);
    return data;
  })

  .catch((error) => console.error("Error:", error));

async function fetchDataAsync() {
  try {
    const data = await fetchData();
    console.log("Async/Await result:", data);
  } catch (error) {
    console.error("Error:", error);
    }
}
  
fetchDataAsync();

//---------------Try/Catch Statements-----------------

function riskyOperation() {
  if (Math.random() > 0.5) throw new Error("Operation Failed!");
  return "Operation Succeeded";
}

try {
  const result = riskyOperation();
  console.log("Try block result:", result);
} catch (error) {
  console.log("Caught error:", error.message);
}

//----------------------Loop Types------------------------

const thing = { a: 1, b: 2, c: 3 };
for (let key in thing) {
  console.log(`Key: ${key}, Value: ${thing[key]}`);
}

//----------------for...of------------------

const arr = [1, 2, 3];
for (let value of arr) {
  console.log("Value:", value);
}

//------------ Standard for Loop-------------

for (let i = 0; i < 3; i++) {
  console.log("Loop index:", i);
}

//-------------array.map----------------------

const digits = [1, 2, 3];
const doubled = digits.map((n) => {
  const result = n * 2;
  console.log(`Mapping   ${n} to ${result}`);
  return result;
});
console.log("Doubled array:", doubled);

//--------------------Regex-----------------------------

const email = "test@example.com";
const regex = /\S+@\S+\.\S+/;

const isValid = regex.test(email);
console.log(`Is "${email}" a valid email?`, isValid); 

const text = "Replace all vowels in this text.";
const replacedText = text.replace(/[aeiou]/gi, "*");
console.log("Text with vowels replaced:", replacedText); 

//-----------------------Advanced Concepts: Event Loop-----------------------------

async function test1() {
  console.log("test1");  
}
function test2() {
  console.log("test2");
}

test1();
setTimeout(() => console.log("test3"), 0);
test2();
console.log("test4");

//-----------------Web Components-------------------

class HelloWorld extends HTMLElement{
  constructor() {
    super();
    this.innerHTML = "<p> Hello,  world!</p>";
    console.log("Hello World component created");
  }
}

customElements.define("hello-world", HelloWorld)