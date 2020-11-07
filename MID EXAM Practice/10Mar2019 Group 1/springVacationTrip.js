function vacation(input) {
    let vacationLength = Number(input.shift());
    let budget = Number(input.shift());
    let people = Number(input.shift());
    let fuelPerKilometer = Number(input.shift());
    let foodExpenses = Number(input.shift());
    let hotelRoom = Number(input.shift());

    let food = people * vacationLength * foodExpenses;
    let hotel = hotelRoom * people * vacationLength;

    if (people > 10) {
        hotel *= 0.75;
    }

    let expenses = food + hotel;

    for (let i = 1; i <= vacationLength; i++) {
        fuel = Number(input[i - 1]) * fuelPerKilometer;
        expenses += fuel;
        if (i % 3 == 0 || i % 5 == 0) {
            expenses *= 1.4;
        }
        if (i % 7 == 0) {
            expenses -= expenses / people;
        }


        if (expenses > budget) {
            console.log(`Not enough money to continue the trip. You need ${(expenses - budget).toFixed(2)}$ more.`);
            break;
        }
    }

    budget -= expenses;

    if (budget >= 0) {
        console.log(`You have reached the destination. You have ${budget.toFixed(2)}$ budget left.`);
    }
}

vacation([
    '7',
    '12000',
    '5',
    '1.5',
    '10',
    '20',

    '512', '318', '202',
    '154', '222', '108',
    '123'
]);

vacation([
    '10', '20500', '11',
    '1.2', '8', '13',
    '100', '150', '500',
    '400', '600', '130',
    '300', '350', '200',
    '300'
]);