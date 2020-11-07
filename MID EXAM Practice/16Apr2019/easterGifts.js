function easterGifts(input) {
    let plan = input.shift().split(" ");

    let command = input.shift();

    while (command != "No Money") {
        command = command.split(" ");

        let [action, gift, givenIndex] = command;

        switch (action) {
            case "OutOfStock": {
                for (let i = 0; i < plan.length; i++) {
                    if (plan[i] == gift) {
                        plan[i] = "None";
                    }
                }

                break;
            }
            case "Required":
                if (givenIndex >= 0 && givenIndex < plan.length) {
                    plan.splice(givenIndex, 1, gift);
                }
                break;
            case "JustInCase":
                plan[plan.length - 1] = gift;
                break;
        }

        command = input.shift();
    }

    let result = plan.filter(i => i != "None");
    console.log(result.join(" "));
}

easterGifts([
    'Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
    'OutOfStock Eggs',
    'Required Spoon 2',
    'JustInCase ChocolateEgg',
    'No Money'
]);

easterGifts([
    'Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes',
    'Required Paper 8',
    'OutOfStock Clothes',
    'Required Chocolate 2',
    'JustInCase Hat',
    'OutOfStock Cable',
    'No Money'
]);

