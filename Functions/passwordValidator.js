function passwordValidator(password) {

    let firstCheck = isValid(password);
    let secondCheck = isLettersAndDigits(password);
    let thirdCheck = isMoreThanTwoDigits(password);

    if (firstCheck === true && secondCheck === true && thirdCheck === false) {
        console.log("Password is valid");
    }

    if (firstCheck === false) {
        console.log("Password must be between 6 and 10 characters");
    }

    if (secondCheck === false) {
        console.log("Password must consist only of letters and digits");
    }

    if (thirdCheck === true) {
        console.log("Password must have at least 2 digits");
    }

    function isLettersAndDigits(pass) {
        let isLetters = false;

        for (let i = 0; i < pass.length; i++) {
            let charCode = pass[i].charCodeAt();

            if ((charCode >= 48 && charCode <= 57) || (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
                isLetters = true;
            } else {
                isLetters = false;
                break;
            }
        }

        return isLetters;
    }

    function isValid(pass) {
        let isValid = false;

        if (pass.length >= 6 && pass.length <= 10) {
            isValid = true;
        }

        return isValid;
    }

    function isMoreThanTwoDigits(pass) {
        let isDigits = false;
        let count = 0;

        for (let i = 0; i < pass.length; i++) {
            let charCode = pass[i].charCodeAt();

            if (charCode >= 48 && charCode <= 57) {
                count++
            }

            if (count < 2) {
                isDigits = true;
            } else {
                isDigits = false;
            }
        }

        return isDigits;
    }
}

passwordValidator('Pa$s$s');