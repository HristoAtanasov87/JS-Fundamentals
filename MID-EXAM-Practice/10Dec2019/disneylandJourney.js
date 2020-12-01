function disneyland(input) {
    let journeyCost = Number(input.shift());
    let monthsSaving = Number(input.shift());

    let savedMoney = 0;
    for (let i = 1; i <= monthsSaving; i++) {
        if (i % 2 != 0 && i > 1) {
            savedMoney -= savedMoney * 0.16;
        }

        if (i % 4 == 0) {
            savedMoney += savedMoney * 0.25;
        }

        savedMoney += journeyCost * 0.25;
    }

    if (savedMoney >= journeyCost) {
        console.log(`Bravo! You can go to Disneyland and you will have ${(savedMoney - journeyCost).toFixed(2)}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${(journeyCost - savedMoney).toFixed(2)}lv. more.`);
    }
}

disneyland(['1000', '4']
);

disneyland(['3265', '3']
);