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


