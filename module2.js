//--------Module 2----------------

function calculateSum(a, b) {
  let result = a + b;
  console.log("Result:", result);
  return result;
}

let num1 = 5;
let num2 = 15;
calculateSum(num1, num2);


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


function greetUser(userName, id) {
  return `Hello ${userName}, You are id ${id}.`;
}
const result = greetUser("Sana", 10);
console.log(result);


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

function addNumbers(a, b) {
  const result = a + b;
  return result;
}
/**
 * A song
 * @typedef {{title: string, artist: string, year: number}} Song
 */
/**
 * Plays a song
 * @param {Song} song - The {@link Song} to be played
 */

function play(song) { }
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
function checkAdminStatus(userName, isAdmin) {
  if (isAdmin) {
    return `Hello ${userName}, you have admin access.`;
  } else {
    return `Hello ${userName}, you do not have admin access.`;
  }
}

const event = checkAdminStatus("Alice", true);
console.log(event); 

const event2 = checkAdminStatus("Bob", false);
console.log(event2); 


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
function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}
const age = calculateAge(1986);
console.log(age);