function pascal(string) {
    let indexArr = [];
    let toPrint = [];

    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
            indexArr.push(i);
        }
    }

    for (let i = 0; i < indexArr.length; i++) {
        toPrint.push(string.substring(indexArr[i], indexArr[i + 1]));
    }

    console.log(toPrint.join(", "));
}

pascal('SplitMeIfYouCanHaHaYouCantOrYouCan');