//Program to find the hypotenuse of a right angled triangle

//********** Easy way **********
/*
let a;
let b;
let c;

a = window.prompt("Enter side A: ");
a = Number(a);

b = window.prompt("Enter side B: ");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2)+Math.pow(b, 2));

console.log("The Hypotenuse of side C is " + c);
*/


//********** Advance way **********

//USING HTML

/*
    <input type="text" id="aSide" placeholder="Side A">
    <input type="text" id="bSide" placeholder="Side B"><br>
    <button type="button" id="myButton">Submit</button><br>
    <label id="cSide"></label>
*/

document.getElementById("myButton").onclick = function(){

    a = document.getElementById("aSide").value;
    a = Number(a);

    b = document.getElementById("bSide").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2)+Math.pow(b, 2));

    c = document.getElementById("cSide").innerHTML = "Result for C side is: " + c;

}