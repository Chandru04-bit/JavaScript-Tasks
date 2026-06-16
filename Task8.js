// Task 1: Employee Salary Management
const employees = [
  { id: 1, name: "Rahul", salary: 25000 },
  { id: 2, name: "Kavin", salary: 50000 },
  { id: 3, name: "John", salary: 75000 }
];

console.log("Salary > 40000:", employees.filter(e => e.salary > 40000));
console.log("First Salary > 60000:", employees.find(e => e.salary > 60000));
console.log("Total Salary:", employees.reduce((sum, e) => sum + e.salary, 0));
console.log("Names:", employees.map(e => e.name));


// Task 2: College Admission Form
function admission(name, age, percentage) {
  return age >= 18 && percentage >= 60 ? "Admission Approved" : "Admission Rejected";
}
console.log(admission("Rahul", 19, 75));


// Task 3: E-Commerce Cart
const cart = [
  { product: "Shoes", price: 2000, qty: 2 },
  { product: "Watch", price: 1500, qty: 1 },
  { product: "Bag", price: 1000, qty: 3 }
];

console.log("Total Bill:", cart.reduce((sum, item) => sum + item.price * item.qty, 0));
console.log("Most Expensive:", cart.reduce((a, b) => a.price > b.price ? a : b));
console.log("Products:", cart.map(item => item.product));


// Task 4: Traffic Fine System
let signal = "red";
switch (signal) {
  case "red":
    console.log("Stop - Fine ₹500");
    break;
  case "yellow":
    console.log("Wait");
    break;
  case "green":
    console.log("Go");
    break;
}


// Task 5: Student Result Processing
const students = [
  { name: "A", mark: 95 },
  { name: "B", mark: 45 },
  { name: "C", mark: 80 },
  { name: "D", mark: 30 }
];

console.log("Passed:", students.filter(s => s.mark >= 50));
console.log("Failed:", students.filter(s => s.mark < 50));
console.log("Grades:", students.map(s => ({
  name: s.name,
  grade: s.mark >= 90 ? "A" : s.mark >= 50 ? "Pass" : "Fail"
})));

// Task 6: Online Food Delivery
function placeOrder(customerName, ...items) {
  console.log(customerName, items, "Count:", items.length);
}
placeOrder("Rahul", "Pizza", "Burger", "Juice");


// Task 7: Bank Account System
let balance = 5000;

function deposit(amount) {
  balance += amount;
  return balance;
}

function withdraw(amount) {
  balance -= amount;
  return balance;
}

console.log("Deposit:", deposit(1000));
console.log("Withdraw:", withdraw(500));
console.log("Balance:", balance);


// Task 8: Movie Ticket Booking
let bookedSeats = ["A1", "A2"];
let seat = "A3";

if (bookedSeats.includes(seat)) {
  console.log("Seat Already Booked");
} else {
  bookedSeats.push(seat);
}
console.log("Booked Seats:", bookedSeats);


// Task 9: User Login Validation
let username = "Rahul";
let password = "password123";
let email = "rahul@gmail.com";

if (username.includes(" ")) {
  console.log("Username Invalid");
} else if (password.length < 8) {
  console.log("Password Invalid");
} else if (!email.includes("@")) {
  console.log("Email Invalid");
} else {
  console.log("Login Success");
}


// Task 10: Product API Dashboard
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    data.forEach(item => console.log(item.title));
    console.log("Products Above 1000:", data.filter(item => item.price > 1000));
    console.log("Total Products:", data.length);
  });


// Task 11: Birthday Day Finder
let dob = new Date("2002-08-15");
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

console.log("Day:", dob.getDate());
console.log("Month:", dob.getMonth() + 1);
console.log("Year:", dob.getFullYear());
console.log("Weekday:", days[dob.getDay()]);


// Task 12: Netflix Subscription System
let plan = "Premium";

console.log(
  plan === "Mobile" ? "1 Screen" :
  plan === "Basic" ? "HD Quality" :
  plan === "Standard" ? "2 Screens" :
  plan === "Premium" ? "4 Screens + Ultra HD" :
  "Invalid Plan"
);


// Task 13: Hospital Patient Management
const patients = [
  { id: 1, name: "Rahul", critical: true },
  { id: 2, name: "John", critical: false },
  { id: 3, name: "Kavin", critical: true }
];

console.log("Critical:", patients.filter(p => p.critical));
console.log("Find ID 2:", patients.find(p => p.id === 2));
console.log("Total Patients:", patients.length);


// Task 14: Inventory Management System
const inventory1 = [{ product: "Shoes" }];
const inventory2 = [{ product: "Bag" }];

const inventory = [...inventory1, ...inventory2];
const { product } = inventory[0];

console.log("Merged:", inventory);
console.log("First Product:", product);

const newInventory = [...inventory, { product: "Watch" }];
console.log("Updated:", newInventory);


// Task 15: WhatsApp Group Management
let group = ["Rahul", "John"];

group.push("Kavin");
group.unshift("Arun");
group.pop();
group.splice(1, 0, "David");

console.log("Final Group:", group);