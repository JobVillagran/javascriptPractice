/*
arithmetic expression is combination of...
operands (values, variables, etc.)
operators (+ - * / %)
that can be evaluated to a value
ex. y = x + 5;
*/

let students = 21;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;

students += 1; //augmented assignment operator - Does the same as the previous operactions = students = students + 1;
//students -= 1; //augmented assignment operator
//students *= 2; //augmented assignment operator
//students /= 2; //augmented assignment operator

let extraStudents = students % 3; // gives you the remaining for any division

console.log(students);
console.log(extraStudents);

/*
    operator precedence

    1. parenthesis ()
    2. exponents
    3. multiplication & division
    4. addition & subtraction
*/

result = 1 + 2 * (3 + 4) / 2;
console.log(result);
