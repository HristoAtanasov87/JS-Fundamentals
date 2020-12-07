function solve(input) {
    let text = input.shift();

    let products = [];
    let expiration = [];
    let caloriesArray = [];

    let totalCalories = 0;

    let pattern = /(\||#)(?<name>[A-Za-z\s]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>\d{1,5})\1/g;
    while (match = pattern.exec(text)) {

        totalCalories += Number(match.groups.calories);
        products.push(match.groups.name);
        expiration.push(match.groups.date);
        caloriesArray.push(match.groups.calories);

    }
    let daysToLast = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${daysToLast} days!`);

    if (daysToLast > 0) {

        for (let i of products) {
            console.log(`Item: ${i}, Best before: ${expiration.shift()}, Nutrition: ${caloriesArray.shift()}`);
        }
    }
}

solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|1||Carrots|06/08/20|500||Not right|6.8.20|5|#Bread#19/03/21#4000#']);

// solve(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);

// solve(['Hello|#Invalid food#19/03/20#450|$5*(@']);