function solve(input) {
    let health = 100;
    let coins = 0;
    let isAlive = true;

    let createdString = input;
    // let createdString = input.join();
    let createdArray = createdString.split("|");
    createdString = createdArray.join(" ");
    createdArray = createdString.split(" ");

    for (let i = 0; i < createdArray.length; i += 2) {
        let roomType = createdArray[i];

        switch (roomType) {
            case "potion":
                let healing = Number(createdArray[i + 1]);
                let neededHealth = 100 - health;

                if (neededHealth > healing) {
                    health += healing;
                    healed = healing;
                } else {
                    health = 100;
                    healed = neededHealth;
                }

                console.log(`You healed for ${healed} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                let loot = Number(createdArray[i + 1]);
                coins += loot;
                console.log(`You found ${loot} bitcoins.`);
                break;
            default:
                let monsterAttack = Number(createdArray[i + 1]);
                health -= monsterAttack;

                if (health > 0) {
                    console.log(`You slayed ${roomType}.`);
                } else {
                    console.log(`You died! Killed by ${roomType}.`);
                    console.log(`Best room: ${(i + 2) / 2}`);
                    isAlive = false;
                }
        }

        if (isAlive === false) {
            break;
        }
    }

    if (isAlive) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

solve('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000')