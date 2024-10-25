//--------Module 2----------------

function calculateSum (a, b) {
  let result = a + b
  console.log('Result:', result)
  return result
}

let num1 = 5
let num2 = 15
calculateSum(num1, num2)

/**
 * This will greet the user using their
 * user name and id
 * @param {string} userName this is the user's name
 * @param {number} id this is my id
 * @returns {string} The message has returned
 * @example
 * ```js
 * //use this function to greet user when they land
 * // our home page
 * const result = greetUser("Sana", 10);
 * // Returns a greeting
 * // Hello Sana, You are id 10.
 * ```
 */

function greetUser (userName, id) {
  return `Hello ${userName}, You are id ${id}.`
}
const result = greetUser('Sana', 10)
console.log(result)

/**
 *
 * @param {number} a - The first number to add
 * @param {number} b - The second number to add
 * @returns {number} The sum of the two numbers
 *
 * @example
 * ```js
 * const sum = addNumbers(5 , 20);
 * console.log(sum);
 * // 15
 * ```
 */

function addNumbers (a, b) {
  const result = a + b
  return result
}
/**
 * A song
 * @typedef {{title: string, artist: string, year: number}} Song
 */
/**
 * Plays a song
 * @param {Song} song - The {@link Song} to be played
 */

function play (song) {}
/**
 * @param {Object} myObject Object description
 * @param {number} myObj.a "a" property description
 * @param {string} myObj.b "b" property description
 */

//-------examples--------------🪄

/**
 * This function checks if the user admin rights based on their role.
 * @param {string} userName - This is the user's name.
 * @param {boolean} isAdmin - Indicates whether the user is an admin.
 * @returns {string} The message stating whether the user has admin access.
 * @example
 * ```js
 * // Use the function to check admin status  when a user logs in
 * const event = checkAdminStatus("Alice", true);
 * // Returns a message
 * // Hello Alice, you have admin access.
 *
 * const event2 = checkAdminStatus("Bob", false);
 * // Returns a message
 * // Hello Bob, you do not have admin access.
 * ```
 */
function checkAdminStatus (userName, isAdmin) {
  if (isAdmin) {
    return `Hello ${userName}, you have admin access.`
  } else {
    return `Hello ${userName}, you do not have admin access.`
  }
}

const event = checkAdminStatus('Alice', true)
console.log(event)

const event2 = checkAdminStatus('Bob', false)
console.log(event2)

/**
 * This function calculates the user\s current age based on the year of birth.
 * @param {number} birthYear - The user's current age based on the year of birth
 * @returns {number} the user's age.
 * @example
 * ```js
 * // use the function to calculate age based on birth age.
 * const age = calculateAge(1986);
 * // Returns 38 if the current year is 2024.
 * ```
 */
function calculateAge (birthYear) {
  const currentYear = new Date().getFullYear()
  return currentYear - birthYear
}
const age = calculateAge(1986)
console.log(age)



//--------------------generator function *------------------------


function* generateFunc () {
  yield 1
  yield 2
  return 3
}

const generator = generateFunc();

const firstValue = generator.next();

console.log(JSON.stringify(firstValue));

let secondValue = generator.next();

console.log(JSON.stringify(secondValue));

function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 5
}
console.log(generator.next());
console.log(generator.return(4)); 
console.log(generator.next());


function* myGen() {
  try {
    yield 1;
    yield 2;
  } catch (error) {
    console.log('Error caught:', error);
  }
}
const gen= myGen();
console.log(gen.next());
console.log(gen.throw('Error Occurred'));
console.log(gen.next());

//-----------(...) using spread operator-------------


function* myValue() {
  yield 1;
  yield 2;
  yield 3;
}

const value = myValue();
const values = [...value];
console.log(values);

//--------------Array.from()-------------


function* myFile() {
  yield 1;
  yield 2;
  yield 3;
}

const file = myFile();
const files = Array.from(file);
console.log(files);

//----generator composition--------


function* number1() {
  yield 'a';
  yield 'b';
}

function* number2() {
  yield '1';
  yield '2';
}

function* composedNumber() {
  yield* number1();
  yield* number2();
}

const number = composedNumber();

console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());

//--------------Fetching and paginate data from the server----------------


/**
 * 
 * @param {string} url The base URL of the API to fetch data from.
 * @param {number} page The page number to fetch (1-base index).
 * @param {number} pageSize A number of items to fetch per page.
 * @returns {Promise <Array>} A promise that resolves to an array of the fetched data.
 * @throws {Error} Throws an error if the network request fails or the response is not OK.
 */



async function fetchData(url, page, pageSize) {
  const response = await fetch(`${url}?_page=${page}&_limit=${pageSize}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

async function* paginateData(url, pageSize) {
  let currentPage = 1;
  while (true) {
    const data = await fetchData(url, currentPage, pageSize);

    if (data.length === 0) {
      break;
    }
    yield { data, currentPage };
    currentPage++;
  }
}

(async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const pageSize = 10;
  let dataGen = paginateData(url, pageSize);

  try {
    async function getNextPage() {
      const result = await dataGen.next();
      if (!result.done) {
        return result.value.data; 
      } else {
        return null;
      }
    }

    async function getPreviousPage() {
      console.log("Fetching previous pages is not supported in this implementation.");
    }

    console.log("First batch:", await getNextPage());
    console.log("Next batch:", await getNextPage());
    console.log("Previous batch:", await getPreviousPage()); 
  } catch (error) {
    console.error("Error fetching data:", error);
  }
})();

//----------------------Generating an infinite sequence of values.------------

function* orderIdGenerator() {
  let currentId = 1;
  while (true) {
    yield `ORDER-${currentId.toString().padStart(6, '0')}`;
    currentId++;
  }
}

const orderGen = orderIdGenerator();

function processOrder(customerName, orderDetails) {
  const orderId = '';
  const order = {
    id: orderId,
    customerName: customerName,
    orderDetails: orderDetails,
    timestamp: new Date().toISOString()
  };
  console.log('Processing Order:', order);
}

processOrder('Alise', { item: 'Laptop', quantity: 2 });
processOrder('Lily', { item: 'smart phone', quantity: 2 });
	processOrder("Alice", { item: "Laptop", quantity: 1 });
  processOrder("Bob", { item: "Smartphone", quantity: 2 });
processOrder("Charlie", { item: "Book", quantity: 3 });

//------------------//----------------------


const foo = function* () {
  yield 10;
  yield 20;
};

const bar = foo();
console.log(bar.next()); 

function* powers(n) {

  for (let current = n; ; current *= n) {
    yield current;
  }
}

for (const power of powers(2)) {

  if (power > 32) {
    break;
  }
  console.log(power);
}

//-----------------Regex---------------------------


const regex = /^h.llo$/;
const str1 = 'hello';
const str2 = 'hallo';
const str3 = 'hullo';

console.log(regex.test(str1));
console.log(regex.test(str2));
console.log(regex.test(str3));
console.log(regex.test('heello'));
console.log(regex.test('hello!'));

const regexAlt = /abc[\s\S]def/;

console.log(regexAlt.test("abcXdef"));  
console.log(regexAlt.test("abc-def"));  
console.log(regexAlt.test("abcdeff")); 

const regexItem = /[abc]/;
console.log(regexItem.test('apple'));
console.log(regexItem.test("banana"));
console.log(regexItem.test("cherry"));
console.log(regexItem.test("orange"));
console.log(regexItem.test('sopp')); 


const regexNum = /[a-z]/;
console.log(regexNum.test('apple')); 
console.log(regexNum.test('Banana'));
console.log(regexNum.test('12345')); 

const regexAlpha = /[a-zA-Z0-9]/;
console.log(regexAlpha.test('apple'));
console.log(regexAlpha.test("banana"));
console.log(regexAlpha.test("45678"));
console.log(regexAlpha.test("¤%&//()()"));

const regexDigit = /\d/;
console.log(regexDigit.test('1234'));
console.log(regexDigit.test('abc'));

const regexNonDigit = /\D/;
console.log(regexNonDigit.test('123'));
console.log(regexNonDigit.test('abc'));

const regexWord = /\w/;
console.log(regexWord.test('hello_world4567'));
console.log(regexWord.test('#¤#%%#¤%¤#¤'));

const regexWhiteSpace = /\s/;
console.log(regexWhiteSpace.test('hello world'));
console.log(regexWhiteSpace.test("helloworld"));


const regexDot = /\./;
console.log(regexDot.test('example.com'));

const regexDollar = /\$/;
console.log(regexDollar.test('Price: $100'));

const regexParentheses = /\(.*\)/;
console.log(regexParentheses.test("This is a (test) string."));

	const regexComplex = /^\(.*\)$/;
console.log(regexComplex.test("(This is a test)"));
   console.log(regexComplex.test("This is a (test)"));
  
   const regexAsterisk = /\*/;

console.log(regexAsterisk.test('apple*'));
console.log(regexAsterisk.test('banana')); 
console.log(regexAsterisk.test('*start'));  

const regexCaretDollar = /^\^.*\$$/;

console.log(regexCaretDollar.test("^hello$")); 
console.log(regexCaretDollar.test("^something$")); 
console.log(regexCaretDollar.test("normal string")); 
console.log(regexCaretDollar.test("$start^"));

//--------------------Quantifiers---------------------

const regexStar = /a*/;
console.log(regexStar.test('aaaa'));
console.log(regexStar.test('b'));
console.log(regexStar.test('abc'));


const regexPlus= /a+/;
console.log(regexPlus.test("aaaa"));
console.log(regexPlus.test("b"));
console.log(regexPlus.test("abc"));

const regexQuestion= /a?/;
console.log(regexQuestion.test("aaaa"));
console.log(regexQuestion.test("b"));
console.log(regexQuestion.test("abc"));

const regexExact = /a{3}/;
console.log(regexExact.test("aaaa"));
console.log(regexExact.test("b"));
console.log(regexExact.test("abc"));

const regexLeast = /a{2,}/;
console.log(regexLeast.test("aaaa"));
console.log(regexLeast.test("b"));
console.log(regexLeast.test("abc"));


const regexRange= /a{2,4}/;
console.log(regexRange.test("aaaa"));
console.log(regexRange.test("b"));
console.log(regexRange.test("abc"));


const regexGreedy = /a{2,4}/;
const str = 'aaaaa';
console.log(str.match(regexGreedy));

const regexLazy = /a{2,4}/;
const strin = "aaaaa";
console.log(str.match(regexLazy));