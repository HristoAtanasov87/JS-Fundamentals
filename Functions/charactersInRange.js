function characterInRange(charFirst, charSecond) {
    let asciiFirst = charFirst.charCodeAt();
    let asciiSecond = charSecond.charCodeAt();

    let start = asciiFirst < asciiSecond ? asciiFirst : asciiSecond;
    // start = Math.min(asciiFirst, asciiSecond);

    let end = asciiFirst > asciiSecond ? asciiFirst : asciiSecond;
    // end = Math.max(asciiFirst, asciiSecond);

    let result = "";

    for (let i = start + 1; i < end; i++) {
        let symbolToPrint = String.fromCharCode(i);
        result += symbolToPrint + " ";
    }

    return result;

}

console.log(characterInRange("a", "d"));