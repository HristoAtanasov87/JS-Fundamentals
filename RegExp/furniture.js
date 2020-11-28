function solve(input) {
    let command = input.shift();
    let totalPrice = 0;
    let result = "Bought furniture: \n";


    while (command != 'Purchase') {
        let pattern = />>(?<item>[A-Za-z]+)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d+)/g
        let toCheck = pattern.exec(command);

        if (toCheck) {

            totalPrice += Number(toCheck.groups.price) * Number(toCheck.groups.quantity)
            result += toCheck.groups.item + "\n";
        }

        command = input.shift();
    }
    result += `Total money spend: ${totalPrice.toFixed(2)}`
    console.log(result);
}

solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);