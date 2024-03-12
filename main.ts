console.log("hello world");

//premitive data type;

let firstName: string = "Rida";
console.log(firstName);

let age: number =30;
console.log(age);

let isalive: boolean = false;
console.log(isalive);

//modifying data type;

let testvariable = 1;
console.log(typeof testvariable);

//operators;
//addition;

let num1: number = 1;
let num2: number = 2;
let cart1: number = num1 + num2;
console.log(cart1);

//substraction;

let cart2: number = 4;
let num3: number = 3;
let total: number = cart2 - num3;
console.log(total);

//multiplication;

let bags: number = 5;
let oranges: number = 6;
let totaloranges: number = bags * oranges;
console.log(totaloranges);

//division;

let totalorange: number = 30;
let bag: number = 5;
let eachbags: number = totalorange / bags;
console.log(eachbags);

//exponentiation; (a+b)

let layer: number = 6;
let orange: number = 6;
let power: number = layer ** 2;
console.log(power);

//module;

let orang = 6;
let beg = 5;
let reminder =  orang % beg;
console.log(reminder);

//unary operators;

let a=5
let b=2
a++; // a becomes 6
b--; // b becomes 1

let c=5
let d=2
++a; // a becomes 6
--b; // b becomes 1

let e:number=5; 
let f:number=2;
let g:number;
g = ++e + e++  + --f  + f-- + e + f++ + f;
console.log(g);

//combining operators;

let result = 3 + 4 * 5;
console.log(result);

let results = 3 + 4 * 5;
result++
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
console.log(x >=4 && x < 8);
console.log(x >= 4 || x < 8);

//else if statement;

let weather = "cloudy";
if (weather === "raining") {
    console.log("wear a raincoat");
} else if (weather === "cloudy") {
    console.log("wear a light jacket.");
} else {
    console.log("wear sunglasses.");
}

//function;

function halfFryEgg() {
    let cocked = 1 + 1.5 + 2;
    //Egg + butter + salt
    console.log(cocked)
}
halfFryEgg() // Invoking the function

//Arrow function;

let halffryEgg = () => 1.5 + 3 + 1;
                    // egg + butter + salt
let response: number = halffryEgg()
console.log(response)

//Arrays;
//adding and removing Arrays; //splicing and slicing Arrays;

let colors: string[] = ["red", "green", "blue"];

colors.push("yellow"); //adds "yellow" to the end
colors.pop(); // removes teh last element ("yellow")
colors.shift(); // removes teh first element ("red")
colors.unshift("purple"); // adds "purple" to the start

console.log(colors); // ["purple", "green", "blue"]

//multidimensional Arrays;

let matrix: number[][] = [
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










