function buildWall(inputArray) {
    let daysRequired = 0;

    for (const iterator of inputArray) {
        if (30 - iterator > daysRequired) {
            daysRequired = 30 - iterator;
        }
    }

    let result = [];

    for (let i = 1; i <= daysRequired; i++) {
        let dailyUsage = 0;

        for (let j = 0; j < inputArray.length; j++) {
            if (inputArray[j] == 30) {
                inputArray.splice(j, 1);
                j--;
                continue;
            }
            inputArray[j]++;
            dailyUsage += 195;

        }
        result.push(dailyUsage);
    }

    let total = 0;
    for (const iterator of result) {
        total += iterator * 1900;
    }

    console.log(result.join(", "));
    console.log(`${total} pesos`);
}

buildWall([21, 25, 28]);