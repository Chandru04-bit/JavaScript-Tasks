// Employee Bonus Calculator

let employeeName = "Rahul";
let salary = 50000;
let experience = 6;
let bonus = 0;

if (experience >= 5) {
    bonus = salary * 0.20;
} else if (experience >= 2) {
    bonus = salary * 0.10;
} else {
    bonus = salary * 0.05;
}

let finalSalary = salary + bonus;

console.log("Employee:", employeeName);
console.log("Final Salary:", finalSalary);


// College Admission System

let studentName = "Kavin";
let studentAge = 18;
let percentage = 75;

if (studentAge >= 17) {
    if (percentage >= 60) {
        console.log("Admission Approved");
    } else {
        console.log("Admission Rejected");
    }
} else {
    console.log("Admission Rejected");
}

//Food Delivery Menu

let choice = 2;

switch (choice) {
    case 1:
        console.log("Order Confirmed : Pizza");
        break;
    case 2:
        console.log("Order Confirmed : Burger");
        break;
    case 3:
        console.log("Order Confirmed : Shawarma");
        break;
    case 4:
        console.log("Order Confirmed : Fried Rice");
        break;
    default:
        console.log("Invalid Selection");
}

//Attendance Tracker

let students = [
    "Rahul", "Kavin", "John", "David", "Sam",
    "Arun", "Vijay", "Priya", "Anu", "Sneha"
];

for (let student of students) {
    console.log(student);
}

console.log("Total Students:", students.length);

//E-Commerce Cart

let cart = [
    { product: "Mobile", price: 15000 },
    { product: "Headset", price: 2000 },
    { product: "Charger", price: 1000 }
];

let total = 0;
let expensiveProduct = cart[0];

for (let item of cart) {
    console.log(item.product);

    total += item.price;

    if (item.price > expensiveProduct.price) {
        expensiveProduct = item;
    }
}

console.log("Total Cart Value:", total);
console.log("Most Expensive Product:", expensiveProduct.product);

//Bank Account Management

let balance = 10000;

function deposit(amount) {
    balance += amount;
    console.log("Deposited:", amount);
}

function withdraw(amount) {
    if (amount <= balance) {
        balance -= amount;
        console.log("Withdrawn:", amount);
    } else {
        console.log("Insufficient Balance");
    }
}

function checkBalance() {
    console.log("Current Balance:", balance);
}

deposit(5000);
withdraw(3000);
checkBalance();

//Movie Ticket Booking

let customerAge = 65;
let ticketPrice;

if (customerAge < 5) {
    ticketPrice = 0;
} else if (customerAge <= 18) {
    ticketPrice = 100;
} else if (customerAge <= 60) {
    ticketPrice = 200;
} else {
    ticketPrice = 120;
}

console.log("Ticket Price: ₹" + ticketPrice);

//Online Shopping Discount

let purchase = 6000;
let discount = 0;

if (purchase > 5000) {
    discount = purchase * 0.20;
} else if (purchase > 3000) {
    discount = purchase * 0.10;
} else if (purchase > 1000) {
    discount = purchase * 0.05;
}

let finalAmount = purchase - discount;

console.log("Original Amount:", purchase);
console.log("Discount:", discount);
console.log("Final Amount:", finalAmount);

//Food Inventory System

let inventory = ["Rice", "Oil", "Sugar", "Milk", "Egg"];

inventory.push("Bread");
inventory.push("Butter");

inventory.shift();

inventory.pop();

console.log("Milk Exists:", inventory.includes("Milk"));

console.log("Final Inventory:", inventory);

//Hospital Patient Management

let patient = {
    patientName: "Ravi",
    age: 35,
    disease: "Fever",
    doctor: "Dr. Kumar"
};

for (let key in patient) {
    console.log(key + ":", patient[key]);
}

let { patientName, age, disease, doctor } = patient;

console.log(patientName);
console.log(age);
console.log(disease);
console.log(doctor);

//Amazon Order Tracker

function sendSMS() {
    console.log("SMS Sent To Customer");
}

function placeOrder(callback) {
    console.log("Order Placed Successfully");
    callback();
}

placeOrder(sendSMS);

//Cashback Offer Generator

function* offers() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

let offer = offers();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);

//Employee Database

let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kavin", salary: 30000 },
    { id: 3, name: "John", salary: 40000 }
];

let totalSalary = 0;
let highestSalary = employees[0];

for (let emp of employees) {
    console.log(emp.name);

    totalSalary += emp.salary;

    if (emp.salary > highestSalary.salary) {
        highestSalary = emp;
    }
}

console.log("Total Salary Expense:", totalSalary);
console.log("Highest Salary Employee:", highestSalary.name);

//Railway Reservation System

let availableSeats = 50;

function bookSeats(seats) {
    if (seats <= availableSeats) {
        availableSeats -= seats;

        console.log(seats + " seats booked successfully");
        console.log("Remaining Seats:", availableSeats);
    } else {
        console.log("Booking Rejected. Seats unavailable");
    }
}

bookSeats(5);
bookSeats(10);
bookSeats(40);

//Mobile Store Billing System

let products = {
    Mobile: 15000,
    Laptop: 50000,
    Headphone: 2000,
    Smartwatch: 5000
};

let selectedProducts = ["Mobile", "Headphone", "Smartwatch"];

let totalAmount = 0;

console.log("Selected Products:");

for (let item of selectedProducts) {
    console.log(item);
    totalAmount += products[item];
}

let gst = totalAmount * 0.18;
let finalBill = totalAmount + gst;

console.log("Total Amount:", totalAmount);
console.log("GST (18%):", gst);
console.log("Final Bill:", finalBill);


