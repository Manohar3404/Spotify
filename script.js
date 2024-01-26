console.log('Welcome');

const audio = new Audio('./songs/1.mp3');
const playbutton = document.querySelector('.playbutton1');
const gitcontroller = document.getElementById('gif');
const progressBar = document.querySelector('.bottom-range');
const songItems = Array.from(document.querySelectorAll('.songItem'));
let songidx = 1;
const backbutton = document.querySelector('.backbutton');
const forwardbutton = document.querySelector('.forwardbutton');
const titleContainer = document.querySelector('.title'); // Add this line

const songs=[
    {songname:'Let me love u- Justin bieber',filepath:'./songs/1.mp3',coverpath:'./covers/1.jpg'},
    {songname:'Starboy - Weekend',filepath:'./songs/1.mp3',coverpath:'./covers/1.jpg'},
    {songname:'Bad Ass - Anirudh',filepath:'./songs/1.mp3',coverpath:'./covers/1.jpg'},
    {songname:'Choti choti party - DSP',filepath:'./songs/1.mp3',coverpath:'./covers/1.jpg'},
    {songname:'oo antava mama - DSP',filepath:'./songs/1.mp3',coverpath:'./covers/1.jpg'},
    {songname:'Sooride godugu patti - Ravibasur',filepath:'./songs/1.mp3',coverpath:'./covers/1.jpg'},
    {songname:'Dheera Dheera',filepath:'./songs/1.mp3',coverpath:'./covers/1.jpg'},
    {songname:'Let me love u- Justin bieber',filepath:'./songs/1.mp3',coverpath:'./covers/1.jpg'},
    {songname:'Starboy - Weekend',filepath:'./songs/1.mp3',coverpath:'./covers/1.jpg'},
    {songname:'Bad Ass - Anirudh',filepath:'./songs/1.mp3',coverpath:'./covers/1.jpg'},
    ];

songItems.forEach((element, i) => {
    element.querySelector('img').src = `covers/${i + 1}.jpg`;
    element.querySelector('.songTitle').innerText = songs[i].songname;
    element.querySelector('.playbutton').id = `${i + 1}`;
});

function makeAllPlay() {
    document.querySelectorAll('.playbutton').forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    });
}

function songItemCheck(idx) {
    document.querySelectorAll('.playbutton').forEach((element, i) => {
        if (element.id == idx) {
            element.classList.remove('fa-play');
            element.classList.add('fa-pause');
        }
    });
}

function playPauseHandler(el) {
    if (el.classList.contains('fa-play')) {
        makeAllPlay();
        el.classList.remove('fa-play');
        el.classList.add('fa-pause');
        audio.src = `./songs/${el.id}.mp3`;
        songidx = el.id;
        audio.play();
        playbutton.classList.remove('fa-play');
        playbutton.classList.add('fa-pause');
        gitcontroller.style.opacity = 1;
        updateTitle(songs[songidx - 1].songname); // Add this line
    } else {
        el.classList.remove('fa-pause');
        el.classList.add('fa-play');
        audio.pause();
        playbutton.classList.remove('fa-pause');
        playbutton.classList.add('fa-play');
        gitcontroller.style.opacity = 0;
    }
}

document.querySelectorAll('.playbutton').forEach((element) => {
    element.addEventListener('click', (el) => playPauseHandler(el.target));
});

playbutton.addEventListener('click', () => {
    if (audio.paused || audio.duration <= 0) {
        audio.play();
        playbutton.classList.remove('fa-play');
        playbutton.classList.add('fa-pause');
        gitcontroller.style.opacity = 1;
        songItemCheck(songidx);
        updateTitle(songs[songidx - 1].songname); // Add this line
    } else {
        audio.pause();
        playbutton.classList.remove('fa-pause');
        playbutton.classList.add('fa-play');
        gitcontroller.style.opacity = 0;
        makeAllPlay();
    }
});

audio.addEventListener('timeupdate', () => {
    const progress = parseInt((audio.currentTime * 100) / audio.duration);
    progressBar.value = progress;
});

progressBar.addEventListener('change', () => {
    audio.currentTime = (progressBar.value * audio.duration) / 100;
});

function check(idx) {
    if (playbutton.classList.contains('fa-play')) {
        playbutton.classList.remove('fa-play');
        playbutton.classList.add('fa-pause');
        gitcontroller.style.opacity = 1;
        updateTitle(songs[idx - 1].songname); // Add this line
    }
    songItemCheck(idx);
}

function updateTitle(title) {
    titleContainer.innerText = title;
}

backbutton.addEventListener('click', () => {
    if (songidx > 1) {
        songidx -= 1;
    } else {
        songidx = songs.length;
    }
    audio.src = `./songs/${songidx}.mp3`;
    audio.play();
    makeAllPlay();
    check(songidx);
});

forwardbutton.addEventListener('click', () => {
    songidx = (songidx % songs.length) + 1;
    audio.src = `./songs/${songidx}.mp3`;
    audio.play();
    makeAllPlay();
    check(songidx);
    updateTitle(songs[songidx - 1].songname); // Add this line
});
