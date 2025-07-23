// --- PART ONE: HTML Elements and Event Listeners ---

// 1. Button: Change its background color randomly on click
const colorBtn = document.getElementById('colorBtn');
colorBtn.addEventListener('click', function () {
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
    this.style.backgroundColor = randomColor;
});

// 2. Input: Live greet in messageBox
const nameInput = document.getElementById('nameInput');
const messageBox = document.getElementById('messageBox');
nameInput.addEventListener('input', function () {
    if (this.value.trim() === "") {
        messageBox.textContent = "Hello!";
    } else {
        messageBox.textContent = `Hello, ${this.value}!`;
    }
});

// 3. List: Remove item on double-click
const dynamicList = document.getElementById('dynamicList');
dynamicList.addEventListener('dblclick', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});

// 4. create a button and a paragraph
const jsElementsContainer = document.getElementById('jsElementsContainer');

const addItemBtn = document.createElement('button');
addItemBtn.textContent = 'Add List Item';
jsElementsContainer.appendChild(addItemBtn);

const dynamicPara = document.createElement('p');
dynamicPara.textContent = 'Hover over me!';
jsElementsContainer.appendChild(dynamicPara);

// 5. add new item to the list
addItemBtn.addEventListener('click', function () {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${dynamicList.children.length + 1}`;
    dynamicList.appendChild(newItem);
});

// 6. change text on mouseover
let paraOriginal = dynamicPara.textContent;
dynamicPara.addEventListener('mouseover', function () {
    this.textContent = 'You are hovering!';
});
dynamicPara.addEventListener('mouseout', function () {
    this.textContent = paraOriginal;
});

// --- PART TWO ---

// 1. Objects in JavaScript
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022
};
car.color = "blue";
car.year = 2023;
delete car.model;
console.log(car);

// 2. Arrays in JavaScript
let scores = [15, 22, 8];
scores.push(30);
scores.splice(1, 1, 18);
let removed = scores.pop();
console.log(scores);
console.log("Removed:", removed);

// 3. String Methods
let message = "JavaScript is awesome!";
console.log(message.toUpperCase());
console.log(message.slice(0, 10));
console.log(message.includes("is"));

// 4. The DOM (Document Object Model)
let newDiv = document.createElement("div");
newDiv.textContent = "This div was created with JS!";
newDiv.setAttribute("class", "highlight");
document.body.appendChild(newDiv);

// 5. DOM Methods
let firstButton = document.querySelector("button");
if (firstButton) {
    firstButton.style.border = "2px solid red";
}
let allInputs = document.querySelectorAll("input");
allInputs.forEach(input => input.placeholder = "Updated!");

// 6. innerHTML, innerText, textContent
let sampleDiv = document.createElement("div");
sampleDiv.innerHTML = "Hello <span style='display:none'>hidden</span> World!";
console.log(sampleDiv.innerHTML);
console.log(sampleDiv.textContent);
console.log(sampleDiv.innerText);

// 7. createElement, setAttribute, createTextNode, remove, removeChild
let list = document.createElement("ul");
let item = document.createElement("li");
item.textContent = "Dynamic item";
list.appendChild(item);
document.body.appendChild(list);
setTimeout(() => {
    list.removeChild(item);
    list.remove();
}, 2000);

// 8. HTMLCollection vs NodeList
let paragraphs = document.getElementsByTagName("p");
let nodeList = document.querySelectorAll("p");
console.log("HTMLCollection length:", paragraphs.length);
console.log("NodeList length:", nodeList.length);

// 9. let, const, and Template Literals
let user = "Shehab";
const PI = 3.14159;
console.log(`User: ${user}, PI: ${PI}`);

// 10. Spread Operator and Destructuring
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
let [first, ...rest] = arr2;
console.log(arr2);
console.log(first, rest);
let person = { name: "Shehab", age: 21 };
let { name, age } = person;
console.log(name, age);

// 11. Loops
let colors = ["red", "green", "blue"];
// for loop
for (let i = 0; i < colors.length; i++) {
    console.log(`Color at ${i}: ${colors[i]}`);
}
// for...of
for (let color of colors) {
    console.log("Color:", color);
}
// for...in (for object)
let userObj = { a: 1, b: 2 };
for (let key in userObj) {
    console.log(key, userObj[key]);
}
// while loop
let count = 0;
while (count < 2) {
    console.log("While count:", count);
    count++;
}
// do...while
let n = 0;
do {
    console.log("Do...while n:", n);
    n++;
} while (n < 1);
// forEach
colors.forEach((color, idx) => {
    console.log(`forEach ${idx}: ${color}`);
});
// map
let upperColors = colors.map(c => c.toUpperCase());
console.log(upperColors);
