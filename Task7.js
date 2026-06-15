// Traffic Signal Management

let signal = "Red";

switch (signal.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal");
}

//Employee Attendance Report

for (let i = 1; i <= 30; i++) {
    console.log(`Employee ${i} Present`);
}


//ATM Cash Withdrawal

let balance = 10000;

while (balance > 0) {
    balance -= 500;
    console.log(`Remaining Balance: ₹${balance}`);
}


// College Admission Eligibility

let age = 20;
let percentage = 75;
let entrancePassed = true;

if (age >= 18) {
    if (percentage >= 70) {
        if (entrancePassed) {
            console.log("Admission Approved");
        } else {
            console.log("Admission Rejected: Entrance exam not passed");
        }
    } else {
        console.log("Admission Rejected: Percentage below 70");
    }
} else {
    console.log("Admission Rejected: Age below 18");
}


// Food Delivery Status

function deliveryConfirmation(customerName, foodItem, deliveryAddress) {
    console.log(
        `Hello ${customerName}, your ${foodItem} will be delivered to ${deliveryAddress}.`
    );
}

deliveryConfirmation("Ashfaq", "Pizza", "Coimbatore");


// Salary Processing System

function calculateSalary(basicSalary) {
    return basicSalary;
}

function calculateBonus(salary) {
    return salary + salary * 0.10;
}

let salary = calculateSalary(50000);
let totalSalary = calculateBonus(salary);

console.log("Salary:", salary);
console.log("Salary with Bonus:", totalSalary);


// E-commerce Discount Engine

function applyDiscount(amount, callback) {
    let discountedAmount = amount - amount * 0.10;
    callback(discountedAmount);
}

function generateInvoice(finalAmount) {
    console.log(`Invoice Generated. Final Amount: ₹${finalAmount}`);
}

applyDiscount(2000, generateInvoice);


// Promotional Offers

function* offersGenerator() {
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

const offers = offersGenerator();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);


//Student Database Merge

const scienceStudents = ["Arun", "Kavin", "Priya"];
const commerceStudents = ["Divya", "Rahul", "Sneha"];

const allStudents = [...scienceStudents, ...commerceStudents];

console.log(allStudents);

//Online Exam System

function calculateMarks(studentName, ...marks) {
    let total = marks.reduce((sum, mark) => sum + mark, 0);
    console.log(`${studentName}'s Total Marks: ${total}`);
}

calculateMarks("Ashfaq", 90, 85, 88, 92);


//Employee Profile

const employee = {
    name: "John",
    department: "IT",
    salary: 60000,
    experience: 5
};

const { name, department, salary: empSalary, experience } = employee;

console.log(name);
console.log(department);
console.log(empSalary);
console.log(experience);


//Product Inventory Filter

const products = [
    { name: "Laptop", price: 55000, category: "Electronics" },
    { name: "Mouse", price: 800, category: "Electronics" },
    { name: "Mobile", price: 25000, category: "Electronics" }
];

const expensiveProducts = products.filter(
    product => product.price > 5000
);

console.log(expensiveProducts);

//Find First Premium Customer

const customers = [
    { name: "Raj", purchase: 25000 },
    { name: "Priya", purchase: 60000 },
    { name: "Arun", purchase: 80000 }
];

const premiumCustomer = customers.find(
    customer => customer.purchase > 50000
);

console.log(premiumCustomer);

// Company Expense Tracker

const expenses = [15000, 20000, 12000, 18000];

const totalExpenses = expenses.reduce(
    (total, expense) => total + expense,
    0
);

console.log("Total Expenses:", totalExpenses);


//Gaming Tournament Verification

const players = [
    { name: "Player1", age: 20 },
    { name: "Player2", age: 25 },
    { name: "Player3", age: 19 }
];

const allAdults = players.every(
    player => player.age > 18
);

console.log(allAdults);


//Job Portal Search

const candidates = [
    { name: "Kumar", skills: ["Java", "SQL"] },
    { name: "Anu", skills: ["React", "Node.js"] },
    { name: "Vijay", skills: ["Python"] }
];

const reactDeveloperExists = candidates.some(
    candidate => candidate.skills.includes("React")
);

console.log(reactDeveloperExists);


//Mobile Number Validator

function validateMobile(number) {
    if (
        number.length === 10 &&
        (
            number.startsWith("6") ||
            number.startsWith("7") ||
            number.startsWith("8") ||
            number.startsWith("9")
        )
    ) {
        console.log("Valid Mobile Number");
    } else {
        console.log("Invalid Mobile Number");
    }
}

validateMobile("9876543210");


//URL Slug Generator

let title = "Learn JavaScript Complete Course";

let slug = title
    .toLowerCase()
    .split(" ")
    .join("-");

console.log(slug);


//Employee Sorting Dashboard

const employees = [
    { name: "A", salary: 50000 },
    { name: "B", salary: 70000 },
    { name: "C", salary: 45000 }
];

const highToLow = [...employees].sort(
    (a, b) => b.salary - a.salary
);

const lowToHigh = [...employees].sort(
    (a, b) => a.salary - b.salary
);

console.log("Highest to Lowest:", highToLow);
console.log("Lowest to Highest:", lowToHigh);


//Movie Booking System

const movies = ["Leo", "Jailer", "Vikram"];

const bookingIds = movies.map(
    (movie, index) => `BOOK${index + 1}-${movie.toUpperCase()}`
);

console.log(bookingIds);