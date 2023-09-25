// How to accept user input 1

// EASY WAY with a window prompt
/*
let username = window.prompt("What's your name?");
console.log(username);
*/

// DIFFICULT WAY HTML textbox 

let username;

document.getElementById("myButton").onclick = function(){ //on click
   username = document.getElementById("myText").value; //Assign the value in the input to element "myText"
   console.log(username);
   document.getElementById("myLabel").innerHTML = "Hello " + username; //Assign the value in the input to element "myLabel"
}
