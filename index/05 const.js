// conts = a variable that can't be changed

//example WITHOUT constant

/*
let pi = 3.141659;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

pi = 50; // If someone changes our code, then it can be a problem.

circumference = 2 * pi * radius;

console.log("The circumference is: " + circumference);
*/

//example WITH constant

const PI = 3.141659;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

PI = 50; // It'll give in the console an uncaught variable error, a const cant be changed.

circumference = 2 * PI * radius;

console.log("The circumference is: " + circumference);

