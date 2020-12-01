function farming(input) {
    let items = {
        shards: 0,
        fragments: 0,
        motes: 0
    };
    let junk = {};

    let inputArray = input.split(" ");
    let isObtained = false;


    for (let i = 0; i < inputArray.length; i += 2) {
        let quantity = Number(inputArray[i]);
        let material = inputArray[i + 1].toLowerCase();


        switch (material) {
            case "shards":
                items[material] += quantity;
                if (items[material] >= 250) {
                    items[material] -= 250;
                    console.log(`Shadowmourne obtained!`);
                    isObtained = true;
                }
                break;
            case "fragments":
                items[material] += quantity;
                if (items[material] >= 250) {
                    items[material] -= 250;
                    console.log(`Valanyr obtained!`);
                    isObtained = true;
                }
                break;
            case "motes":
                items[material] += quantity;
                if (items[material] >= 250) {
                    items[material] -= 250;
                    console.log(`Dragonwrath obtained!`);
                    isObtained = true;
                }
                break;
            default:
                if (!junk.hasOwnProperty(material)) {
                    junk[material] = 0;
                }
                junk[material] += quantity;
                break;
        }

        if (isObtained) {
            break;
        }
    }

    let toSortKeyMaterials = Object.entries(items);
    toSortKeyMaterials.sort(([itemA, quantityA], [itemB, quantityB]) => {
        if (quantityA !== quantityB) {
            return quantityB - quantityA;
        } else {
            return itemA.localeCompare(itemB);
        }
    })

    toSortKeyMaterials.forEach(x => {
        let [item, quantity] = x;
        console.log(`${item}: ${quantity}`);
    });

    let toSortJunk = Object.entries(junk);
    toSortJunk.sort(([itemA], [itemB]) => itemA.localeCompare(itemB));


    toSortJunk.forEach(x => {
        let [item, quantity] = x;
        console.log(`${item}: ${quantity}`);
    })
}

// farming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
farming('1 shards 2 stone 3 stone 4 kur');