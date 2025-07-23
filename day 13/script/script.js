// Example 1: Weather check
let currentTemp = 18;
if (currentTemp < 10) {
    console.log("It's a cold day!");
} else if (currentTemp < 25) {
    console.log("It's a pleasant day!");
} else {
    console.log("It's a warm day!");
}

// Example 2: Greeting based on time
let currentHour = 20;
if (currentHour < 12) {
    console.log("Good morning!");
} else if (currentHour < 17) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}

// Example 3: Membership and purchase
let hasLoyaltyCard = false;
let purchaseAmount = 75;
if (hasLoyaltyCard) {
    if (purchaseAmount > 50) {
        console.log("You get a 15% loyalty discount!");
    } else {
        console.log("Loyalty card holders get free samples!");
    }
} else {
    console.log("Join our loyalty program for rewards!");
}

// Example 4: Switch statement for animals
let animal = "dog";
switch (animal) {
    case "cat":
        console.log("Soft and purring");
        break;
    case "dog":
        console.log("Loyal and barking");
        break;
    case "parrot":
        console.log("Colorful and talking");
        break;
    default:
        console.log("Unknown animal");
}

// Example 5: Ternary operator for login status
let isLoggedIn = false;
let loginMessage = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(loginMessage);

// Example 6: For loop countdown
console.log("Blastoff in:");
for (let n = 3; n > 0; n--) {
    console.log(n);
}

// Example 7: While loop for random string
let code = "";
while (code.length < 6) {
    code += String.fromCharCode(65 + Math.floor(Math.random() * 26));
    console.log("Generating code...");
}
console.log(`Your code: ${code}`);

// Example 8: Function for perimeter
function calcPerimeter(length, width) {
    return 2 * (length + width);
}
console.log(`Perimeter: ${calcPerimeter(4, 7)}`);

// Example 9: Function to check odd
function isOdd(num) {
    return num % 2 !== 0;
}
console.log(`Is 9 odd? ${isOdd(9)}`);

// Example 10: Arrow function greeting
let greetUser = (username) => `Hi, ${username}!`;
console.log(greetUser("Shehab"));

// Example 11: Object for a movie
let movie = {
    name: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    isInStock: false,
    status: function () {
        return this.isInStock ? "Available" : "Out of stock";
    }
};
console.log(movie.status());

// Example 12: Object for a teacher
let teacher = {
    fullName: "shehab mohamed",
    subject: "javascript"
};
teacher.experience = 12;
console.log("Experience : ", teacher.experience);

teacher.subject = "Physics";
console.log("Subject : ", teacher.subject); 

delete teacher.experience;
console.log(teacher);

// Example 13: Array of cities
let cities = ["Cairo", "Fayoum", "Alexandria"];
console.log(cities[2]);
console.log("Number of cities : ", cities.length);

// Example 14: Array methods
let scores = [10, 20, 30];

scores.push(40);

scores.pop();

scores.unshift(5);

scores.shift();
console.log(scores); 

let tripled = scores.map(score => score * 3);
console.log(tripled); 

let highScores = scores.filter(score => score > 15);
console.log(highScores); 
// Example 15: DOM manipulation
let header = document.getElementById("mainHeader");
console.log(header.innerHTML);  
console.log(header.innerText); 
console.log(header.textContent); 

let infoPara = document.createElement("p");
infoPara.textContent = "Info paragraph";
document.body.appendChild(infoPara);

let logo = document.createElement("img");
let logoBox = document.getElementById("logo_box");

logo.src = "image/logo.png";
logo.alt = "Logo";

logoBox.appendChild(logo);

let obsolete = document.getElementById("obsolete-element");
obsolete.remove();

let outer = document.getElementById("outer");
let inner = document.getElementById("inner");
outer.removeChild(inner);

// Example 16: Button event
let actionBtn = document.getElementById('actionBtn');

actionBtn.addEventListener('click', function () {
    console.log('Action button pressed!');
    this.textContent = 'Done!';
});

// Example 17: Box hover events
let hoverArea = document.getElementById('hoverArea');

hoverArea.addEventListener('mouseenter', function () {
    this.style.backgroundColor = 'lightgreen';
});

hoverArea.addEventListener('mouseleave', function () {
    this.style.backgroundColor = 'beige';
});

hoverArea.addEventListener('mousemove', function (e) {
    console.log(`Mouse at X: ${e.clientX}, Y: ${e.clientY}`);
});

// Example 18: Keyboard event

document.addEventListener('keydown', function (e) {
    console.log(`Key pressed: ${e.key}`);

    if (e.key === 'Enter') {
        console.log('Enter key pressed');
    }
});

// Example 19: Input field event
let searchBox = document.getElementById('searchBox');
searchBox.addEventListener('keyup', function (e) {
    console.log(`Search: ${this.value}`);
});

// Example 20: Event delegation

document.getElementById('listContainer').addEventListener('click', function (e) {
    if (e.target.classList.contains('list-item')) {
        console.log(`List item ${e.target.id} clicked`);
    }
});

// Example 21: Link event

document.getElementById('externalLink').addEventListener('click', function (e) {
    e.preventDefault();

    console.log('Event details:');
    console.log('Target:', e.target);
    console.log('Current Target:', e.currentTarget);
});

// Example 22: Drag and drop
let dragItem = document.getElementById('dragItem');
let dropArea = document.getElementById('dropArea');

dragItem.addEventListener('dragstart', function (e) {
    e.dataTransfer.setData('text/plain', this.id);
    this.classList.add('dragging');
});

dragItem.addEventListener('dragend', function () {
    this.classList.remove('dragging');
});

dropArea.addEventListener('dragover', function (e) {
    e.preventDefault();
    this.classList.add('dragover');
});

dropArea.addEventListener('dragleave', function () {
    this.classList.remove('dragover');
});

dropArea.addEventListener('drop', function (e) {
    e.preventDefault();
    this.classList.remove('dragover');

    let id = e.dataTransfer.getData('text/plain');
    let dragged = document.getElementById(id);
    this.appendChild(dragged);
});
