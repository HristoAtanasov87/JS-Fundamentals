function solve(input) {
    let actions = input;
    let result = 0;
    for (let i = 0; i < actions.length; i++) {
        switch (actions[i]) {
            case "soap":
                result += 10;
                break;
            case "water":
                result *= 1.2;
                break;
            case "vacuum cleaner":
                result *= 1.25;
                break;
            case "mud":
                result = result - (result * 0.1);
                break;
        }        
    }

    console.log(`The car is ${result.toFixed(2)}% clean.`);
}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);