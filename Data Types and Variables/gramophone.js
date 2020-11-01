function solve(band, album, songName) {
    let songDuration = album.length * band.length * songName.length / 2;
    let plateRotation = 2.5;
    let result = Math.ceil(songDuration / plateRotation);

    console.log(`The plate was rotated ${result} times.`);
}

solve('Black Sabbath', 'Paranoid', 'War Pigs');