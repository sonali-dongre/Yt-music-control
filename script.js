var arr = [
    {
        songName: "Jale 2",
        url: "./songs/Jale 2.mp3",
        img: "https://github.com/asynchronousJavascriptor/level2/blob/main/youtubemusic/images/jale.jpg?raw=true"
    },
    {
        songName: "Pehle bhi mai",
        url: "./songs/Pehle Bhi Mai.mp3",
        img: "https://github.com/asynchronousJavascriptor/level2/blob/main/youtubemusic/images/animal.jpg?raw=true"
    },
    {
        songName: "Ram siya ram",
        url: "./songs/Ram Siya Ram.mp3",
        img: "https://github.com/asynchronousJavascriptor/level2/blob/main/youtubemusic/images/ram.jpg?raw=true"
    }
];

var audio = new Audio();
var allsongs = document.querySelector("#all-songs");
var poster = document.querySelector("#left");
var playBtn = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");
var volumeSlider = document.querySelector("#volumeSlider");
var selectedSong = 0;
var flag = 0;

function loadSong(index) {
    audio.src = arr[index].url;
    poster.style.backgroundImage = `url(${arr[index].img})`;
    highlightPlayingSong(index);
}

function highlightPlayingSong(index) {
    document.querySelectorAll('.song-card').forEach(card => card.classList.remove('playing'));
    document.getElementById(index).classList.add('playing');
}

function mainFunction() {
    let clutter = "";
    arr.forEach((elem, indx) => {
        clutter += `
            <div class="song-card" id="${indx}">
                <img src="${elem.img}" />
                <div>
                    <h2>${elem.songName}</h2>
                    <h6>3:56</h6>
                </div>
            </div>
        `;
    });
    allsongs.innerHTML = clutter;
}

mainFunction();
loadSong(selectedSong);

allsongs.addEventListener("click", function (dets) {
    let card = dets.target.closest('.song-card');
    if (card) {
        selectedSong = parseInt(card.id);
        loadSong(selectedSong);
        audio.play();
        playBtn.innerHTML = `<i class="ri-pause-large-line"></i>`;
        flag = 1;
    }
});

playBtn.addEventListener("click", function () {
    if (flag === 0) {
        audio.play();
        playBtn.innerHTML = `<i class="ri-pause-large-line"></i>`;
        flag = 1;
    } else {
        audio.pause();
        playBtn.innerHTML = `<i class="ri-play-fill"></i>`;
        flag = 0;
    }
});



forward.addEventListener("click", function () {
    if (selectedSong < arr.length - 1) {
        selectedSong++;
        loadSong(selectedSong);
        audio.play();
        playBtn.innerHTML = `<i class="ri-pause-large-line"></i>`;
        flag = 1;
    }
});

backward.addEventListener("click", function () {
    if (selectedSong > 0) {
        selectedSong--;
        loadSong(selectedSong);
        audio.play();
        playBtn.innerHTML = `<i class="ri-pause-large-line"></i>`;
        flag = 1;
    }
});

volumeSlider.addEventListener('input', function () {
    audio.volume = this.value;
});
