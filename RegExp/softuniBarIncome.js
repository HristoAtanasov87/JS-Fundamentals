function solve(input) {

    let command = input.shift();
    let total = 0;

    while (command != "end of shift") {
        let pattern = /%(?<name>[A-Z][a-z]+)%([^\|\$\.%]+)?<(?<product>[\w]+)>([^\|\$\.%]+)?\|(?<quantity>\d+)\|([^\|\$\.%\d]+)?(?<price>\d+(\.\d+)?)\$/g;

        let toCheck = pattern.exec(command);

        if (toCheck) {
            let name = toCheck.groups.name;
            let product = toCheck.groups.product;
            let quantity = Number(toCheck.groups.quantity);
            let price = Number(toCheck.groups.price);
            total += quantity * price;
            console.log(`${name}: ${product} - ${(price * quantity).toFixed(2)}`);
        }

        command = input.shift();
    }

    console.log(`Total income: ${total.toFixed(2)}`);
}


solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])

solve([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
])