function solve(input) {
    let personAge = input;
    let person = "";
    let isValid = true;

    if (0 <= personAge && personAge <= 2) {
        person = "baby";
    } else if (3 <= personAge && personAge <= 13) {
        person = "child";
    } else if (14 <= personAge && personAge <= 19) {
        person = "teenager";
    } else if (20 <= personAge && personAge <= 65) {
        person = "adult";
    }  else if (personAge >= 66) {
        person = "elder";
    } else {
        isValid = false;
    }

    if (isValid) {
        console.log(person);
    } else {
        console.log("out of bounds");
    }
}

solve(100);