function chessBoard(input) {
    let rotations = input;
    let color = "";
    console.log(`<div class="chessboard">`);
    for (let i = 1; i <= rotations; i++) {
        let counter = 0;
        console.log("<div>");

        for (let j = i; j <= rotations * rotations; j++) {
            if (j % 2 != 0) {
                color = "black";
            } else {
                color = "white";
            }

            counter++;
            console.log(`<span class="${color}"></span>`);

            if (counter === rotations) {
                break;
            }

        }
        console.log("</div>");
    }

    console.log("</div>");
}


chessBoard(5);

