// Create a file called functions.js
// In the file, create a function called sayTodaysDate() that accepts a name argument 
// And logs a greeting to the console like so: Hello Olive, today's date is 15th of January, 2015.

// A function that accepts a name argument and logs the date and name to the console.
function sayTodaysDate(name) {
    const date = new Date().toLocaleString('NG')
    console.log(`Hello ${name} today's date is ${date}`)
}
sayTodaysDate(prompt("Write your name"));

// Secondly, create a function that takes in two numbers as arguments and returns a sum of both numbers to the console. 
// Note: The fuction should still run properly, even if the numbers are passed in as String.

// A function that takes in two numbers as arguments and returns a sum of both numbers to the console.
function sum(num1, num2) {
    return Number(num1) + Number(num2);
 }
console.log(sum("2", "3"));      