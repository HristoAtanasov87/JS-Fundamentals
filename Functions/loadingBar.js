function loadingBar(number) {
    let result = "";
    let percentSymbols = number / 10;
    let loadingBar = percentBar(percentSymbols);

    if (number < 100) {
        result = `${number}% [${loadingBar}] \nStill loading...`;
    } else {
        result = `${number}% Complete! \n[${loadingBar}]`;
    }

    return result;

    function percentBar(numberOfSymbols) {
        let percentBar = [];
        for (let i = 0; i < 10; i++) {
            if (i < numberOfSymbols) {
                percentBar[i] = "%";
            } else {
                percentBar[i] = ".";
            }
        }

        return percentBar.join("");
    }
}

console.log(loadingBar(100));