// Task 1 - Student

let students = [
    {name:"Arun", mark:95},
    {name:"Bala", mark:80}
];

let total = 0;

for(let s of students){
    console.log(s.name);
    total += s.mark;

    if(s.mark > 80){
        console.log("Above 80:", s.name);
    }
}

console.log("Total Marks:", total);


// Task 2 - Employee

let employees = [
    {name:"Ram", salary:25000},
    {name:"Karthik", salary:40000}
];

let salaryTotal = 0;

for(let e of employees){
    console.log(e.name);
    salaryTotal += e.salary;
}

console.log("Total Salary:", salaryTotal);


// Task 3 - Food

let foods = [
    {name:"Biryani", price:250},
    {name:"Dosa", price:80}
];

for(let f of foods){
    console.log(f.name);

    if(f.price > 200){
        console.log("Costly Food:", f.name);
    }
}


// Task 4 - Movie

let movies = [
    {name:"Leo", seats:50},
    {name:"Pushpa", seats:0}
];

for(let m of movies){
    console.log(m.name);

    if(m.seats > 0){
        console.log("Booking Available");
    } else {
        console.log("House Full");
    }
}


// Task 5 - Hospital

let patients = [
    {name:"Raj", age:65},
    {name:"Vicky", age:30}
];

for(let p of patients){
    console.log(p.name);

    if(p.age > 60){
        console.log("Senior Citizen");
    }
}


// Task 6 - Library

let books = [
    {name:"Java", price:600},
    {name:"Python", price:450}
];

for(let b of books){
    console.log(b.name);
}


// Task 7 - Product

let products = [
    {name:"Laptop", stock:5},
    {name:"Mouse", stock:20}
];

for(let p of products){
    console.log(p.name);

    if(p.stock < 10){
        console.log("Low Stock");
    }
}


// Task 8 - Admission

let studentsList = [
    {name:"Ajay", percentage:75},
    {name:"Mani", percentage:55}
];

for(let s of studentsList){
    if(s.percentage >= 60){
        console.log(s.name, "Eligible");
    }
}


// Task 9 - Bus

let passengers = [
    {name:"Kiran", ticket:500},
    {name:"Raja", ticket:400}
];

let amount = 0;

for(let p of passengers){
    amount += p.ticket;
}

console.log("Collection:", amount);


// Task 10 - Mobile

let mobiles = [
    {model:"A55", price:35000},
    {model:"Note13", price:18000}
];

for(let m of mobiles){
    console.log(m.model);

    if(m.price > 20000){
        console.log("Premium Mobile");
    }
}