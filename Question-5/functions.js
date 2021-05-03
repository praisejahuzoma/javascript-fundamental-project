// A function that accepts a name argument and logs the date and name to the console.
function sayTodaysDate(name) {
    const date = new Date().toLocaleString('NG')
    console.log(`Hello ${name} today's date is ${date}`)
}
sayTodaysDate(prompt("Write your name"));

// A function that takes in two numbers as arguments and returns a sum of both numbers to the console.
function sum(num1, num2) {
    return num1 + num2;
 }
console.log(sum(2, 3));      