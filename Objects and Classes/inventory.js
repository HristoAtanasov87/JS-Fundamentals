function inventorySort(array) {
    let arrayOfHeroes = [];

    for (let iterator of array) {
        let splitted = iterator.split(" / ");
        let [hero, level, items] = splitted;

        level = Number(level);

        items = items.
            split(", ").
            sort((a, b) => a.localeCompare(b)).
            join(", ");

        let objHero = {
            Hero: hero,
            level,
            items
        }

        arrayOfHeroes.push(objHero);
    }

    arrayOfHeroes.
        sort((a, b) => a.level - b.level).
        forEach(i => {
            console.log(`Hero: ${i.Hero}`);
            console.log(`level => ${i.level}`);
            console.log(`items => ${i.items}`);

        })
}

inventorySort([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]
);