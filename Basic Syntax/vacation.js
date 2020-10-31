function solve(persons, group, day) {
    let totalPeople = persons;
    let typeOfGroup = group;
    let weekDay = day;
    let price = 0;
    let discount = 1;
    let totalPrice = 0;

    
    switch (typeOfGroup) {
        case "Students":
            if (weekDay === "Friday") {
                price = 8.45;
            } else if (weekDay === "Saturday") {
                price = 9.8;
            } else if (weekDay === "Sunday") {
                price = 10.46;
            }

            if (totalPeople >= 30) {
                discount = 0.85;
                totalPrice = totalPeople * price * discount;
            } else {
                totalPrice = totalPeople * price;
            }
            break;
        case "Business":
            if (weekDay === "Friday") {
                price = 10.9;
            } else if (weekDay === "Saturday") {
                price = 15.6;
            } else if (weekDay === "Sunday") {
                price = 16;
            }

            if (totalPeople >= 100) {
                discount = 10 * price;
                totalPrice = totalPeople * price - discount;
            } else {
                totalPrice = totalPeople * price;
            }
            break;
        case "Regular":
            if (weekDay === "Friday") {
                price = 15;
            } else if (weekDay === "Saturday") {
                price = 20;
            } else if (weekDay === "Sunday") {
                price = 22.5;
            }

            if (10 <= totalPeople && totalPeople <= 20) {
                discount = 0.95;
                totalPrice = totalPeople * price * discount;
            } else {
                totalPrice = totalPeople * price;
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(40,
    "Regular",
    "Saturday"
    );