/*

<body>
    <h1>Hello, world!</h1>

    <label id="myLabel">Enter your name</label><br>
    <input type="text" id="myText"></input><br>
    <button type="submit" id="myButton">Submit</button>

</body>

*/

// ********* How to accept user input: *********

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
};
