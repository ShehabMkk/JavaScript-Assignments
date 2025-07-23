window.alert("Welcome to My Website");
console.log("Welcome to My Website");
document.write("Welcome to My Website");
// --------------------------------------------------------------------------------------------------
// Variable Declarations and Types
let city = "Cairo";
let population = 9500000;
let isCapital = true;
let temperature;
let mayor = null;

console.log(`City: ${city}, Type: ${typeof city}`);
console.log(`Population: ${population}, Type: ${typeof population}`);
console.log(`Is Capital: ${isCapital}, Type: ${typeof isCapital}`);
console.log(`Temperature: ${temperature}, Type: ${typeof temperature}`);
console.log(`Mayor: ${mayor}, Type: ${typeof mayor}`);
// --------------------------------------------------------------------------------------------------
// Numbers and Math
let apples = 12;
apples -= 2;
console.log(`Apples left: ${apples}`);

let price = 19.99;
let discount = 5;
let total = price - discount;
let area = 6 * 7;
let sqrtValue = Math.sqrt(49);
let quotient = 20 / 3;

let strNum = "123";
let parsedNum = parseInt(strNum);
// --------------------------------------------------------------------------------------------------
// String Operations
let animal = "elephant";
console.log(animal.length);
console.log(animal.toUpperCase());
console.log(animal.toLowerCase());
console.log(animal.substring(2, 6));
console.log(animal.charAt(4));
console.log(animal.indexOf("ph"));

let first = "shehab";
let last = "mohamed";
let combined = first + " " + last;
let combinedTemplate = `${first} ${last}`;
console.log(combinedTemplate);

console.log("Code"[1]);
console.log("Learning JavaScript, \"Step by Step.\"");
console.log("Line1\n\tLine2");

const letter = "z";
console.log(letter.charCodeAt(0));
// --------------------------------------------------------------------------------------------------
// Arithmetic Operators
let x = 8, y = 2;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x++);
console.log(++x);
console.log(x ** y);
// --------------------------------------------------------------------------------------------------
// Comparison and Logical Operators
console.log(5 < 3);
console.log(5 > 3);
console.log(5 <= 3);
console.log(5 >= 3);
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != "5");
console.log(5 !== "5");

console.log(false && true);
console.log(true && true);
console.log(false || true);
console.log(false || false);
console.log(!false);
// --------------------------------------------------------------------------------------------------
// Conditional (Ternary) Operator
let score = 75;
let grade = score >= 60 ? "Pass" : "Fail";
console.log(grade);
// --------------------------------------------------------------------------------------------------
// If-Else Statements
let temp = -3;
if (temp > 0) {
    console.log("Temperature is above freezing");
} else if (temp < 0) {
    console.log("Temperature is below freezing");
} else {
    console.log("Temperature is exactly zero");
}
// --------------------------------------------------------------------------------------------------
// Nested If
let studentAge = 17;
let hasID = false;
if (studentAge >= 16) {
    if (hasID) {
        console.log("You can enter the exam.");
    } else {
        console.log("You need an ID to enter.");
    }
} else {
    console.log("You are too young for the exam.");
}
// --------------------------------------------------------------------------------------------------
// Switch Statement
let fruit = "Banana";
switch (fruit) {
    case "Apple":
        console.log("It's an apple");
        break;
    case "Banana":
        console.log("It's a banana");
        break;
    default:
        console.log("Unknown fruit");
}
// --------------------------------------------------------------------------------------------------
// Loops
for (let n = 1; n <= 3; n++) {
    console.log(`For loop: ${n}`);
}

let m = 0;
while (m < 3) {
    console.log(`While loop: ${m}`);
    m++;
}

let p = 0;
let output = "";
do {
    p++;
    output += p + " ";
} while (p < 3);
console.log(output);
// --------------------------------------------------------------------------------------------------
// Functions
function sayHello(person) {
    console.log(`Hi, ${person}!`);
}
sayHello("shehab");

function multiplyNums(a, b) {
    return a * b;
}
let productResult = multiplyNums(6, 7);
console.log(productResult);

const subtract = (x, y) => x - y;
console.log(subtract(10, 4));
// --------------------------------------------------------------------------------------------------
// Objects
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "blue",
    honk: function () {
        console.log(`Beep! I am a ${car.brand}`);
    }
};
console.log(car.brand);
console.log(car["model"]);
car.honk();
