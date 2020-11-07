function numbers(input) {
    let inputArray = input
        .split(" ")
        .map(Number);

    let average = 0;

    for (let i of inputArray) {
        average += i;
    }
    average /= inputArray.length;

    let topFive = [];

    // for (let i of inputArray) {
    //     if (i > average) {
    //         topFive.push(i);
    //     }
    // }
    topFive = inputArray.filter(i => i > average);

    topFive.sort((a, b) => b - a);
    let result = [];

    if (topFive.length == 0) {
        console.log("No");
    } else if (topFive.length > 5) {
        result = topFive.slice(0, 5);
        console.log(result.join(" "));
    } else {
        console.log(topFive.join(" "));
    }

}


numbers('-1 -2 -3 -4 -5 -6')