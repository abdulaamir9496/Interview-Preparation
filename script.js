/**
 * 
 * @param {} str 
 * @returns 
 * 
 * 
 * 
1. What is JavaScript?
Answer: JavaScript is a high-level, dynamic, interpreted programming language commonly used for adding interactivity to web pages. It runs in the browser and is widely used for front-end web development.
Explanation: JavaScript allows developers to create dynamic and interactive user interfaces, manipulate the DOM, and work with APIs to fetch or send data.

2. What are the different data types in JavaScript?
Answer: JavaScript has several data types:
Primitive types: string, number, boolean, undefined, null, bigint, and symbol.
Non-primitive types: object (including arrays, functions, etc.).
Explanation: Primitive types represent single values, while objects can hold collections of values or more complex data structures.

3. What is the difference between var, let, and const?
Answer:
var: Function-scoped, can be redeclared, and is hoisted.
let: Block-scoped, cannot be redeclared in the same scope.
const: Block-scoped, cannot be redeclared or reassigned.
Explanation: let and const were introduced in ES6 to improve scoping behavior. const is often used for values that shouldn't change, while let is used when the variable value may change within the block.


4. Explain == vs. === in JavaScript.
Answer: == checks for equality with type coercion (converts values to a common type before comparing), whereas === checks for both value and type equality.
Explanation: For example, 5 == "5" is true because of type coercion, but 5 === "5" is false because the types (number and string) are different.

5. What is a closure in JavaScript?
Answer: A closure is a function that retains access to its lexical scope, even when it is executed outside of its original scope.

Explanation: Closures are created whenever a function is defined within another function, allowing the inner function to "remember" variables from the outer function. This feature is often used for data privacy and encapsulation.

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
const invalidNumber = 'Invalid number' * 2;

console.log(invalidNumber);
console.log(isNaN(invalidNumber));


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

// //Flatten a nested array
// function flattenArray(arr) {
//     return arr.flat(Infinity);
// }
// console.log(flattenArray([1,[2,[3,[4]]]]));

// //check if a number is prime
// function isPrime(n) {
    
// }
