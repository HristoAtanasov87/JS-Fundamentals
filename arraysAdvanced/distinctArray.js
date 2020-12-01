function distinctArray(inputArray) {

    for (let i = 0; i < inputArray.length; i++) {
        let compareInt = inputArray[i];

        for (let j = 0; j <= inputArray.length; j++) {
            if ((compareInt === inputArray[j]) && (i != j)) {
                inputArray.splice(j, 1);
                j--;
            }
        }

    }
    return inputArray.join(" ");
}



console.log(distinctArray([7, 1, 2, 3, 54, 7, 2, 2, 1]))