// A function that accepts a name argument and logs the date and name to the console.
function sayTodaysDate(name) {
    const date = new Date().toLocaleString('NG')
    console.log(`Hello ${name} today's date is ${date}`)
}
sayTodaysDate(prompt("Write your name"));

// A function that takes in two numbers as arguments and returns a sum of both numbers to the console.
const num1 = 5;
const num2 = 3;

// Add two numbers
const sum = num1 + num2;

// Display the sum of the two numbers
console.log(`The sum of ${num1} and ${num2} is: ${sum}`);