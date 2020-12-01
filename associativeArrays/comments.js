function comments(input) {
    let actions = {
        addUser: (userObject, userName) => {
            if (!userObject.hasOwnProperty(userName)) {
                userObject[userName] = {};
            }
        },
        addArticle: (articleObject, article) => {
            if (!articleObject.hasOwnProperty(article)) {
                articleObject[article] = {};
            }
        },
        saveInfo: (articleObject, userObject, article, userName, title, comment) => {
            if (articleObject.hasOwnProperty(article) && userObject.hasOwnProperty(userName)) {
                userObject[userName][title] = comment;
                if (!articleObject[article].hasOwnProperty([userName])) {
                    articleObject[article][userName] = {};
                }
                articleObject[article][userName][title] = comment;

            }
        }
    }

    let articleObject = {};
    let userObject = {};

    for (let i of input) {

        if (i.includes("user ")) {
            let [kur, userName] = i.split("user ");
            actions.addUser(userObject, userName);

        } else if (i.includes("article ")) {

            let [kur, article] = i.split("article ");
            actions.addArticle(articleObject, article);

        } else if (i.includes(" posts on ")) {

            let [userName, articleString] = i.split(" posts on ");
            let [article, commentString] = articleString.split(": ");
            let [title, comment] = commentString.split(", ");

            actions.saveInfo(articleObject, userObject, article, userName, title, comment);

        }
    }

    let toSort = Object.entries(articleObject);
    toSort.sort(([articleA, objectA], [articleB, objectB]) => {
        let valueA = 0;
        for (let i in objectA) {
            valueA += Object.values(objectA[i]).length;
        }

        let valueB = 0;
        for (let j in objectB) {
            valueB += Object.values(objectB[j]).length;
        }

        return valueB - valueA;
    });

    for (let [article, userComments] of toSort) {
        console.log(`Comments on ${article}`);

        let toSortUserNames = Object.entries(userComments);
        toSortUserNames.sort(([userNameA], [userNameB]) => userNameA.localeCompare(userNameB));

        for (let [user, comments] of toSortUserNames) {
            for (let j in comments) {
                let key = j;
                let value = comments[j];
                console.log((`--- From user ${user}: ${key} - ${value}`));
            }
        }
    }


}

comments([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'uSeR4 posts on Movies: Like, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
]);