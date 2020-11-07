function library(input) {
    let shelf = input
        .shift()
        .split("&");

    let command = input.shift();
    while (command != "Done") {
        command = command.split(" | ");

        let [action, bookName, secondBook] = command;

        let indexOfBook = shelf.indexOf(bookName);

        switch (action) {
            case "Add Book":
                if (!shelf.includes(bookName)) {
                    shelf.unshift(bookName);
                }
                break;
            case "Take Book":
                if (indexOfBook != -1) {
                    shelf.splice(indexOfBook, 1);
                }
                break;
            case "Swap Books":
                let indexOfBookTwo = shelf.indexOf(secondBook);

                if (indexOfBook != -1 && indexOfBookTwo != -1) {
                    shelf.splice(indexOfBook, 1, secondBook);
                    shelf.splice(indexOfBookTwo, 1, bookName);
                }
                break;
            case "Insert Book":
                shelf.push(bookName);
                break;
            case "Check Book":
                bookName = Number(bookName);
                if (bookName >= 0 && bookName < shelf.length) {
                    console.log(shelf[bookName]);
                }
                break;
        }

        command = input.shift();
    }

    console.log(shelf.join(", "));
}

library([
    'Don Quixote&The Great Gatsby&Moby Dick&Hamlet',
    'Add Book | The Odyssey',
    'Take Book | Don Quixote',
    "Insert Book | Alice's Adventures in Wonderland",
    'Check Book | 3',
    'Done',
]);

library([
    'Anna Karenina&Heart of Darkness&Catch-22&The Stranger',
    'Add Book | David Copperfield',
    'Add Book | One Thousand and One Nights',
    'Swap Books | One Thousand and One Nights | Catch-22',
    'Take Book | David Copperfield',
    'Insert Book | The Stories of Anton Chekhov',
    'Check Book | 17',
    'Done',
]);