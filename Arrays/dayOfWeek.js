function solve(input) {
    let days = ["empty", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let number = input;
    if (1 <= number && number <= 7) {
        console.log(days[number]);
    } else {
        console.log("Invalid day!");
    }

    console.log(days.toString());
}

solve(21)