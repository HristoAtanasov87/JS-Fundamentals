function songs(inputArray) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songsCount = inputArray.shift();
    let typeToPrint = inputArray.pop();

    let songList = [];

    for (let i = 0; i < songsCount; i++) {
        let currentSong = inputArray[i].split("_");
        let [typeList, name, time] = currentSong;
        let currentObject = new Song(typeList, name, time);
        songList.push(currentObject);
    }

    if (typeToPrint === "all") {
        songList.forEach((i) => console.log(i.name));
    } else {
        let filtered = songList.filter((i) => i.typeList === typeToPrint);
        filtered.forEach((i) => console.log(i.name));
    }
}

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']


);