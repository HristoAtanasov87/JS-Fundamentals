function gladiator(input) {
    let listOfGladiators = {};

    let command = input.shift();

    while (command !== "Ave Cesar") {
        let [name, technique, skillLevel] = command.split(" -> ");
        skillLevel = Number(skillLevel);

        if (technique !== undefined) {
            if (!listOfGladiators.hasOwnProperty(name)) {
                listOfGladiators[name] = {};
            }

            if (!listOfGladiators[name].hasOwnProperty(technique)) {
                listOfGladiators[name][technique] = 0;
            }

            if (listOfGladiators[name][technique] < skillLevel) {
                listOfGladiators[name][technique] = skillLevel;
            }
        } else {
            let [gladiatorA, gladiatorB] = command.split(" vs ");

            if (listOfGladiators.hasOwnProperty(gladiatorA) && listOfGladiators.hasOwnProperty(gladiatorB)) {
                let compareA = Object.keys(listOfGladiators[gladiatorA]);
                let skillLevelA = Object.values(listOfGladiators[gladiatorA]);

                let sumA = 0;
                for (let i of skillLevelA) {
                    sumA += i;
                }

                let compareB = Object.keys(listOfGladiators[gladiatorB]);
                let skillLevelB = Object.values(listOfGladiators[gladiatorB]);

                let sumB = 0;
                for (let k of skillLevelB) {
                    sumB += k;
                }

                let iterator = 0;
                let smaller;
                let larger;

                if (compareA.length > compareB.length) {
                    iterator = compareA.length;
                    larger = compareA;
                    smaller = compareB;
                } else {
                    iterator = compareB.length;
                    larger = compareB;
                    smaller = compareA;
                }

                for (let j = 0; j < iterator; j++) {
                    if (smaller.includes(larger[j])) {
                        if (sumA > sumB) {
                            delete listOfGladiators[gladiatorB];
                        } else if (sumB > sumA) {
                            delete listOfGladiators[gladiatorA];
                        }
                    }
                }

            }
        }
        command = input.shift();
    }

    let totalSkill = {};
    for (let i in listOfGladiators) {
        let sum = 0;
        let toSum = Object.values(listOfGladiators[i])

        for (let j of toSum) {
            sum += j;
        }
        totalSkill[i] = sum;
    }

    let toSort = Object.entries(listOfGladiators);
    toSort.sort(([nameA, objA], [nameB, objB]) => {
        let totalSkillArrayKeysA = Object.keys(totalSkill);
        let first = totalSkillArrayKeysA.indexOf(nameA);
        let totalSkillArrayValuesA = Object.values(totalSkill);
        let criteriaA = totalSkillArrayValuesA[first];

        criteriaA = Number(criteriaA);

        let totalSkillArrayKeysB = Object.keys(totalSkill);
        let second = totalSkillArrayKeysB.indexOf(nameB);
        let totalSkillArrayValuesB = Object.values(totalSkill);
        let criteriaB = totalSkillArrayValuesB[second];

        criteriaA = Number(criteriaA);

        if (criteriaA !== criteriaB) {
            return criteriaB - criteriaA
        } else {
            return nameA.localeCompare(nameB);
        }
    })

    for (let i = 0; i < toSort.length; i++) {
        let [name, obj] = toSort[i];
        let skillTree = Object.entries(obj);
        skillTree.sort(([skillNameA, skillLevelA], [skillNameB, skillLevelB]) => {
            if (skillLevelA !== skillLevelB) {
                return skillLevelB - skillLevelA;
            } else {
                return skillNameA.localeCompare(skillNameB);
            }
        });

        toSort[i] = [name, skillTree];
    }

    toSort.forEach(x => {
        let [gladiator, skillTree] = x;

        let totalSkillArrayKeysA = Object.keys(totalSkill);
        let first = totalSkillArrayKeysA.indexOf(gladiator);
        let totalSkillArrayValuesA = Object.values(totalSkill);
        let points = totalSkillArrayValuesA[first];
        console.log(`${gladiator}: ${points} skill`);

        skillTree.forEach(y => {
            let [skillName, skillLevel] = y;
            console.log(`- ${skillName} <!> ${skillLevel}`);
        })
    })

}

gladiator([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]

)