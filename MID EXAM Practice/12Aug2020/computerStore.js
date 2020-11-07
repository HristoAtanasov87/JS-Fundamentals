function printReceipt(input) {
    let index = 0;
    let command = input[index];
    let totalSum = 0;
    let isValid = true;

    while (command != "special" && command != "regular") {
        let price = Number(command);

        if (price <= 0) {
            console.log("Invalid price!");
        } else {
            totalSum += price;
        }

        index++;
        command = input[index];
    }

    let taxes = totalSum * 0.2;
    let totalSumTaxes = (totalSum + taxes);

    if (totalSum == 0) {
        console.log("Invalid order!");
        isValid = false;
    } else {
        if (command == "special") {
            totalSumTaxes -= totalSumTaxes * 0.1;
        }
    }

    if (isValid) {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalSum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${totalSumTaxes.toFixed(2)}$`);
    }
}

printReceipt([
    'regular'
]
);