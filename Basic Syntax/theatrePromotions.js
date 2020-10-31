function solve(day, age) {
    let dayType = day;
    let clientAge = age;
    let price = 0;

    switch (dayType) {
        case "Weekday":
            if (0 <= clientAge && clientAge <= 18) {
                price = 12;
            } else if (18 < clientAge && clientAge <= 64) {
                price = 18;
            } else if (64 < clientAge && clientAge <= 122 ) {
                price = 12;
            } else {
                console.log("Error!");
                break;
            } 
            break;
        case "Weekend":
            if (0 <= clientAge && clientAge <= 18) {
                price = 15;
            } else if (18 < clientAge && clientAge <= 64) {
                price = 20;
            } else if (64 < clientAge && clientAge <= 122 ) {
                price = 15;
            } else {
                console.log("Error!");
                break;
            }
            break;
        case "Holiday":
            if (0 <= clientAge && clientAge <= 18) {
                price = 5;
            } else if (18 < clientAge && clientAge <= 64) {
                price = 12;
            } else if (64 < clientAge && clientAge <= 122 ) {
                price = 10;
            } else {
                console.log("Error!");
                break;
            }
            break;
    }
    if (price != 0) {
        console.log(`${price}$`);
    }
}

solve('Weekday', 12);