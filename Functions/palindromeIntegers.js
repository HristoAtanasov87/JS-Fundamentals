function isPalindrome(inputArray) {
    let result = "";

    for (let element of inputArray) {
        let isNumberPalindrome = true;
        let num = String(element);
        let endOfLoop = Math.floor(num.length / 2);

        for (let i = 0; i < endOfLoop; i++) {
            let a = Number(num[i]);
            let b = Number(num[num.length - 1 - i]);
            if (a !== b) {
                isNumberPalindrome = false;
                break;
            }
        }

        result += isNumberPalindrome + "\n";
    }
    return result;
}

console.log(isPalindrome([32, 2, 232, 1010]));