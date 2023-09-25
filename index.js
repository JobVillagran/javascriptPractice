// Type Conversion = change the datatype of a value to another
//                    (strings, numbers, booleans) 

/*
let age = window.prompt("How old are you?");

console.log(typeof age); // Check the data type of the variable - Should be and String
age = Number(age); //We are converting the String age to a number
console.log(typeof age); // Now after the conversion, should be a number.
age += 1;

console.log("Happy Birthday! You are ", age, " years old");
*/

x = Number("3.14");
NaN = Number("pizza"); //Not a number, when you convert an string to number
y = String(3.14);
z = Boolean("pizza"); //if the boolean is empty will show: false, if you have info inside the parenttesis will show true.

console.log(x, typeof x);
console.log(NaN, typeof NaN);
console.log(y, typeof y);
console.log(z, typeof z);