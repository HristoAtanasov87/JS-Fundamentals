function solve(input) {
    //parse input and pick up heroes
    let numberOfHeroes = Number(input.shift());
    let actions = {
        CastSpell: (heroes, heroName, ...parameters) => {
            let [mpNeeded, spellName] = parameters;
            mpNeeded = Number(mpNeeded);
            if (heroes[heroName].mp >= mpNeeded) {
                heroes[heroName].mp -= mpNeeded;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }
        },
        TakeDamage: (heroes, heroName, ...parameters) => {
            let [damage, attacker] = parameters;
            damage = Number(damage);
            if (heroes[heroName].hp > damage) {
                heroes[heroName].hp -= damage;
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`);
            } else {
                delete heroes[heroName];
                console.log(`${heroName} has been killed by ${attacker}!`);
            }
        },
        Recharge: (heroes, heroName, ...parameters) => {
            let [mpAmount] = parameters.map(Number);

            if (200 - heroes[heroName].mp >= mpAmount) {
                heroes[heroName].mp += mpAmount;
            } else {
                mpAmount = 200 - heroes[heroName].mp;
                heroes[heroName].mp = 200;
            }

            console.log(`${heroName} recharged for ${mpAmount} MP!`);
        },
        Heal: (heroes, heroName, ...parameters) => {
            let [hpAmount] = parameters.map(Number);

            if (100 - heroes[heroName].hp >= hpAmount) {
                heroes[heroName].hp += hpAmount;
            } else {
                hpAmount = 100 - heroes[heroName].hp;
                heroes[heroName].hp = 100;
            }

            console.log(`${heroName} healed for ${hpAmount} HP!`);
        }
    }

    let heroes = {};
    for (let i = 0; i < numberOfHeroes; i++) {
        let [heroName, hp, mp] = input.shift().split(" ");
        hp = Number(hp);
        mp = Number(mp);

        if (!heroes.hasOwnProperty(heroName)) {
            heroes[heroName] = {
                hp: 0,
                mp: 0
            }
        }

        heroes[heroName].hp += hp;
        heroes[heroName].mp += mp;
    }

    // process commands - max HP 100; max MP 200;
    let command = input.shift();
    while (command != "End") {
        let [actionName, heroName, ...parameters] = command.split(" - ");

        let action = actions[actionName]; // приравнявам функцията от асоц масива на променливата action;
        action(heroes, heroName, ...parameters);

        command = input.shift();
    }

    //sort and print 

    let toSort = Object.entries(heroes).sort(sortHeroes);

    for (let [heroName, values] of toSort) {
        console.log(`${heroName}\n  HP: ${values.hp}\n  MP: ${values.mp}`);
    }

    function sortHeroes(a, b) {
        let [heroNameA, valuesA] = a;
        let [heroNameB, valuesB] = b;

        return valuesB.hp - valuesA.hp || heroNameA.localeCompare(heroNameB);
    }
}

// solve([
//     '2',
//     'Solmyr 85 120',
//     'Kyrre 99 50',
//     'Heal - Solmyr - 10',
//     'Recharge - Solmyr - 50',
//     'TakeDamage - Kyrre - 66 - Orc',
//     'CastSpell - Kyrre - 15 - ViewEarth',
//     'End'
// ]);

solve([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);