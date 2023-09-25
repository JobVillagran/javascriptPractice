console.log("Hello world!");
console.log("Miau Miau");

//window.alert("I REALLY LOVE PIZZA"); // PopUp message

//this is a comment

/**
 * This
 * is
 * a
 * multiline
 * comment
 */


//VARIABLES
// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

let age = 21; //numbers
age = age + 1; //numbers
let firstName = "John"; //strings
let student = true; //boolean

console.log(age, firstName);
console.log(firstName);
console.log(student);
console.log("Hello", firstName);
console.log("You have ", age, "years old.");
console.log("Enrolled:", student);

//HTML

<body>
    <h1>Hello, world!</h1>

    <p id="p1"></p>
    <p id="p2"></p>
    <p id="p3"></p>

</body>

//End HTML

//string concatenation along with some text in the DOM
document.getElementById("p1").innerHTML = "Hello" + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old.";
document.getElementById("p3").innerHTML = "Enrolled: " + student;