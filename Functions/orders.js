function solve(param1, param2) {
    let product = param1;
    let quantity = param2;

    switch (product) {
        case "coffee":
            price = 1.5;
            break;
        case "water":
            price = 1.0;
            break;
        case "coke":
            price = 1.40;
            break;
        case "snacks":
            price = 2.00;
            break;
    }

    let totalPrice = price * quantity;

    return totalPrice.toFixed(2);
    // console.log(totalPrice.toFixed(2));
}

console.log(solve("water", 5)); 