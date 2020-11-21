function solve(input) {
    let library = {};

    let actions = {
        createShelf: (library, shelfId, shelfGenre) => {
            if (!library.hasOwnProperty(shelfId)) {
                library[shelfId] = {};
                library[shelfId][shelfGenre] = {};
            }
        },
        arrangeShelf: (library, bookTitle, bookAuthor, bookGenre) => {
            let tempA = Object.entries(library);
            for (let [shelfId, shelfGenreObj] of tempA) {
                let [shelfGenre] = Object.keys(shelfGenreObj)
                if (shelfGenre === bookGenre) {
                    library[shelfId][shelfGenre][bookTitle] = bookAuthor;
                }
            }
        }
    };

    for (let i of input) {
        if (i.includes(" -> ")) {
            let [shelfId, shelfGenre] = i.split(" -> ");
            actions.createShelf(library, shelfId, shelfGenre);
        } else if (i.includes(": ")) {
            let [bookTitle, bookString] = i.split(": ");
            let [bookAuthor, bookGenre] = bookString.split(", ");
            actions.arrangeShelf(library, bookTitle, bookAuthor, bookGenre);
        }
    }

    let toSort = Object.entries(library);
    toSort.sort(([idA, genreObjectA], [idB, genreObjectB]) => {
        let bookCountA = 0;
        for (let i in genreObjectA) {
            for (let k in genreObjectA[i]) {
                bookCountA++;
            }
        }

        let bookCountB = 0;
        for (let j in genreObjectB) {
            for (let l in genreObjectB[j]) {
                bookCountB++;
            }
        }

        return bookCountB - bookCountA;
    })

    for (let [shelfId, shelfGenreObj] of toSort) {
        for (let i in shelfGenreObj) {
            let shelfGenre = i;
            let bookCount = Object.values(shelfGenreObj[i]).length;
            console.log(`${shelfId} ${shelfGenre}: ${bookCount}`);
            for (let j in shelfGenreObj[i]) {
                let bookTitle = j;
                let bookAuthor = shelfGenreObj[i][j];
                console.log(`--> ${bookTitle}: ${bookAuthor}`);
            }

        }

    }
}

solve([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'
]);