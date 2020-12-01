function solve(input) {
    let username = input[0];
    let revUsername = [];
    let password = "";

    for (let i = username.length - 1; i > -1; i--) {
        revUsername.push(username[i]);
    }

    password = revUsername.join("");

    let count = 0;
    let j = 1;
    let command = input[j];
    while (command !== password) {
        count++
        if (count > 3) {
            console.log(`User ${username} blocked!`);
            break;
        } else {
            console.log("Incorrect password. Try again.");
        }

        j++;
        command = input[j]
    }
    
    if (command === password) {
        console.log(`User ${username} logged in.`);
    }
}

solve(['Acer','login','go','let me in','recA']);