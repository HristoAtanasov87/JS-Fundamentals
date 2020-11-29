function solve(input) {

    let command = input.shift();

    while (command != "end") {
        let pattern = /[\s][A-Za-z\d][\w\.\-]+[A-Za-z\d]@[A-Za-z][A-Za-z\-]+[A-Za-z]\.[A-Za-z]+[\.]?([A-Za-z])+/g;
        let match = command.match(pattern);
        if (match != null) {
            for (let i of match) {
                i = i.trim();
                console.log(i);
            }
        }
        command = input.shift();
    }

}

solve(["Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.", "end"])