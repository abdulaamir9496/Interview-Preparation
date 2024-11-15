/**
 * @param {} str 
 * @returns 
 * 
1. What is JavaScript?
Answer: JavaScript is a high-level, dynamic, interpreted programming language commonly used for 
adding interactivity to web pages. It runs in the browser and is widely used for front-end web development.
Explanation: JavaScript allows developers to create dynamic and interactive user interfaces, 
manipulate the DOM, and work with APIs to fetch or send data.

2. What are the different data types in JavaScript?
Answer: JavaScript has several data types:
Primitive types: string, number, boolean, undefined, null, bigint, and symbol.
Non-primitive types: object (including arrays, functions, etc.).
Explanation: Primitive types represent single values, while objects can hold collections of values or 
more complex data structures.

3. What is the difference between var, let, and const?
Answer:
var: Function-scoped, can be redeclared, and is hoisted.
let: Block-scoped, cannot be redeclared in the same scope.
const: Block-scoped, cannot be redeclared or reassigned.
Explanation: let and const were introduced in ES6 to improve scoping behavior. 
const is often used for values that shouldn't change, while let is used when the variable value may change within the block.


4. Explain == vs. === in JavaScript.
Answer: == checks for equality with type coercion (converts values to a common type before comparing), 
whereas === checks for both value and type equality.
Explanation: For example, 5 == "5" is true because of type coercion, but 5 === "5" is false because 
the types (number and string) are different.

5. What is a closure in JavaScript?
Answer: A closure is a function that retains access to its lexical scope, even when it is executed 
outside of its original scope.

Explanation: Closures are created whenever a function is defined within another function, 
allowing the inner function to "remember" variables from the outer function. 
This feature is often used for data privacy and encapsulation.

javascript
Copy code
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const increment = outer();
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2

6. What is this in JavaScript?
Answer: this refers to the context in which a function is executed. It can refer to different objects depending on how the function is called (e.g., global object, object instance, etc.).
Explanation: In a method call, this refers to the object the method is called on. In a function in strict mode, this is undefined, while in non-strict mode, it refers to the global object (like window in browsers).

7. Explain the concept of hoisting.
Answer: Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution.

Explanation: This means variable and function declarations are processed before any code is executed. With var, the variable is hoisted but initialized to undefined. With let and const, the declaration is hoisted, but not initialized.

javascript
Copy code
console.log(x); // undefined due to hoisting
var x = 5;
 */

// Synchronous example in JavaScript
// console.log("First");
// console.log("Second");
// console.log("Third");
// Output:
// First
// Second
// Third


// Asynchronous example in JavaScript
// console.log("First");
// setTimeout(() => {
//   console.log("Second"); // Executes after a delay
// }, 1000);
// console.log("Third");
// Output:
// First
// Third
// Second (after 1 second)

// In summary:
// Synchronous: Waits for each task to complete before moving on.
// Asynchronous: Allows tasks to run independently and manages responses as they come in, 
//often using callbacks, promises, or async/await for handling outcomes in JavaScript.

// //promises in JavaScript
// const fetchData = new Promise((resolve, reject) => {
//     const success = true;
//     if(success) {
//         resolve('Data Fetching Success')
//     }
//     else {
//         reject('Error Fetching Data')
//     }
// });

// //handling the promise
// fetchData
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('Operation completed successfully')
//     });

//A real-world example of using fetch in JavaScript

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())  //convert response to JSON if successful
//     .then(data => console.log(data))  //logs the data if the fetch is successful
//     .catch(error = console.error("Error fetching posts: ", error));  //logs error if the fetch is unsuccessful

//What is NaN ? How to can you check if the value is NaN ?
// const invalidNumber = 'Invalid number' * 2;

// console.log(invalidNumber);
// console.log(isNaN(invalidNumber));


// //reverse a string
// function reverseString (str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("Coding"));

// //string is a palindrome
// function isPalindrome(str) {
//     // const reversed = str.split('').reverse().join('');
//     return str === reverseString(str);
// }

// console.log(isPalindrome("mom"));
// console.log(isPalindrome("John"));

// //Find the Factorial of a number
// function factorial(n) {
//     if(n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
// }

// console.log(factorial(6));

// //Implement Fibonacci sequence
// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. 
//It begins with 0 and 1, and each subsequent number is formed by adding the two numbers immediately before it.

// function fibonacci(n) {
//     if(n <= 1) return n;
//     return fibonacci(n-1) + fibonacci(n-2);
// }
// console.log(fibonacci(10));

// //sum all numbers in an array
// function sumArray(arr) {
//     return arr.reduce((sum, num) => sum + num, 0);
// }
// console.log(sumArray([1,2,3,4,5,6,7,8,9,10]));


// //Find the largest number in an array
// function largestNumber(arr) {
//     return Math.max(...arr)
// }
// console.log(largestNumber([7,23,64,77,834,1]));

// //remove duplicates from an array
// function removeDuplicate(arr) {
//     return [...new Set(arr)];
// }
// console.log(removeDuplicate([1,2,3,5,5,4,2,6,7,7,3]));

//var, let, const
// if (true) {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(b); // Error: b is not defined
// }
// console.log(a); // 10 (accessible outside block)

//Arrow Function
// const addArrow = (a, b) => a + b;
// console.log(addArrow(100, 100));

//What is Closures ?
// In JavaScript, a closure is a feature where an inner function has access to the outer (enclosing) function's variables, even after the outer function has finished executing. Closures are created every time a function is created, allowing it to access its lexical scope even when it's executed outside of its original context. for privacy and incapsulation

// Closures are powerful in JavaScript and enable functional programming patterns, maintainable code, and encapsulated, reusable functions.
// function createCounter() {
//   let count = 0; // count is a private variable

//   return function () {
//     count += 1;
//     return count;
//   };
// }

// const counter = createCounter();
// console.log(counter()); // Output: 1
// console.log(counter()); // Output: 2
// console.log(counter()); // Output: 3

// function createGreeting(name) {
//   return function () {
//     console.log(Hello, ${name}!);
//   };
// }
// const greetAlice = createGreeting("Alice");
// greetAlice();

// this method?
// const obj = {
//   name: "JavaScript",
//   showName() {
//     console.log(this.name);
//   },
// };
// obj.showName(); // JavaScript (this refers to obj)

//Spread Operator
// let fruits = ["apple", "orange", "kivi"];
// let moreFruits = [...fruits, "mango", "banana"];
// console.log(moreFruits);


//event listener access for parent tag for giving access to all the children
// const amer = document.querySelector(".amer");
// document.querySelector(".amer").addEventListener("click", (e) => {
//   if (e.target.tagName === "DIV") {
//     console.log(e.target.innerHTML);
//   }
// });

//check is if array ?
// const arr = ["amer", "shakir"];
// console.log(Array.isArray(arr));


//Null and undefined
// let z;
// console.log(z);
// let b = null;
// console.log(b);

// let x = "amer";
// console.log(x);


//What is Hoisting ?
// In JavaScript, hoisting is a behavior where variable and function declarations are 
// moved to the top of their scope (either global or local) during the compilation phase, 
// before the code executes. This means you can use variables and functions before they are declared in the code.

// greet();
// function greet() {
//   console.log("Hello");
// }

// Synchronous vs Asynchronous
// Synchronous:
// Definition: Synchronous operations happen one after another. 
//The program waits for each task to complete before moving on to the next one. 
//If one task takes time, it will block the execution of the next task until it's finished.
// Behavior: In a synchronous process, the program executes each step in sequence, 
//meaning that each operation must wait for the previous one to finish.

// console.log("Start");

// console.log("Middle");

// console.log("End");

// Asynchronous:
// Definition: Asynchronous operations allow tasks to be executed independently. 
// While one task is running, the program doesn't wait for it to complete and can continue executing other tasks.
// Behavior: An asynchronous operation runs in the background (e.g., a timer or fetching data), 
// allowing the program to continue with other operations while waiting for the background task to finish.

// Example of Asynchronous
// console.log("Start");
// setTimeout(() => {
//   console.log("This is asynchronous");
// }, 3000);
// console.log("End");

// what is a Promises
// In JavaScript, a Promise is an object that represents the eventual completion or failure 
//of an asynchronous operation. A promise allows you to handle asynchronous tasks 
//in a more manageable way by providing a result that can be either fulfilled (success) or rejected (failure).

// Promises are especially useful for operations that take time, such as fetching data from a server or 
//reading a file, because they allow JavaScript to keep running other code while waiting for the result.


// A promise has three states:

// Pending: The initial state—meaning the asynchronous operation is not complete yet.
// Fulfilled: The operation completed successfully, and the promise has a resulting value.
// Rejected: The operation failed, and the promise has a reason for failure (an error).

// const fetchData = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve("Data fetched!");
//   } else {
//     ("Error fetching data");
//   }
// });

// fetchData
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Operation completed");
//   });

// A Real World Example
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error Data Fetching", error));

//  What is NaN? How can you check if a value is NaN?
// NaN (Not-a-Number) is a value representing an invalid number. You can use isNaN() to check if a value is NaN.
// const checkNaN = "hello" * 2;
// console.log(checkNaN);
// console.log(isNaN(checkNaN));

// 2. What are Data Types in JavaScript?
// JavaScript data types are categorized into two parts i.e. primitive and non-primitive types.
// Primitive Data Type: The predefined data types provided by JavaScript language are known as primitive data type. 
// Primitive data types are also known as in-built data types.
// Numbers
// Strings
// Boolean
// Symbol
// Undefined
// Null
// BigInt

// Non-Premitive Data Type: The data types that are derived from primitive data types 
// are known as non-primitive data types. It is also known as derived data types or reference data types.
// Objects
// Functions
// Arrays

// //Flatten a nested array
// function flattenArray(arr) {
//     return arr.flat(Infinity);
// }
// console.log(flattenArray([1,[2,[3,[4]]]]));

// //check if a number is prime
// function isPrime(n) {
    
// }
