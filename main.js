console.log("hello world");
//premitive data type;
let firstName = "Rida";
console.log(firstName);
let age = 30;
console.log(age);
let isalive = false;
console.log(isalive);
//modifying data type;
let testvariable = 1;
console.log(typeof testvariable);
//operators;
//addition;
let num1 = 1;
let num2 = 2;
let cart1 = num1 + num2;
console.log(cart1);
//substraction;
letcart2 = 4;
let num3 = 3;
lettotal = cart2 - num3;
console.log(total);
//multiplication;
letbags = 5;
let oranges = 6;
console.log(totaloranges);
//division;
let totalorange = 30;
let bag = 5;
let eachbags = totalorange / bags;
console.log(eachbags);
//exponentiation; (a+b)
let layer = 6;
let orange = 6;
let power = Math.pow(layer, 2);
console.log(power);
//module;
let orang = 6;
let beg = 5;
let reminder = orang % beg;
console.log(reminder);
//unary operators;
let a = 5;
let b = 2;
a++; // a becomes 6
b--; // b becomes 1
let c = 5;
let d = 2;
++a; // a becomes 6
--b; // b becomes 1
let e = 5;
let f = 2;
let g;
g = ++e + e++ + --f + f-- + e + f++ + f;
console.log(g);
//combining operators;
let result = 3 + 4 * 5;
console.log(result);
let results = 3 + 4 * 5;
result++;
console.log(result);
//comparison operators;
let n = 4;
console.log(n == 4);
console.log(n === 4);
console.log(n != 4);
console.log(n > 7);
console.log(n <= 7);
//logical operators;
let x = 4;
console.log(x >= 4 && x < 8);
console.log(x >= 4 || x < 8);
//else if statement;
let weather = "cloudy";
if (weather === "raining") {
    console.log("wear a raincoat");
}
else if (weather === "cloudy") {
    console.log("wear a light jacket.");
}
else {
    console.log("wear sunglasses.");
}
//function;
function halfFryEgg() {
    var cocked = 1 + 1.5 + 2;
    //Egg + butter + salt
    console.log(cocked);
}
halfFryEgg(); // Invoking the function
//Arrow function;
let halffryEgg = function () { return 1.5 + 3 + 1; };
// egg + butter + salt
let response = halffryEgg();
console.log(response);
//Arrays;
//adding and removing Arrays; //splicing and slicing Arrays;
let colors = ["red", "green", "blue"];
colors.push("yellow"); //adds "yellow" to the end
colors.pop(); // removes teh last element ("yellow")
colors.shift(); // removes teh first element ("red")
colors.unshift("purple"); // adds "purple" to the start
console.log(colors); // ["purple", "green", "blue"]
//multidimensional Arrays;
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]);
//for loops;
//Exercises;
let cleanestCities = ["karachi", "lahore", "islamabad", "peshawar"];
let matchFound = "no";
for (let i = 0; i <= 4; i++) {
    if ("islamabad" === cleanestCities[i]) {
        matchFound = "yes";
        alert("it's one of the cleanest cities");
    }
}
if (matchFound === "no") {
    alert("it's not on the list");
}
