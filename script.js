console.log('Welcome');
let audio = new Audio('./songs/1.mp3');
const playbutton = document.querySelector('.playbutton1');
const gitcontroller = document.getElementById('gif');
const progressBar = document.querySelector('.bottom-range');
const songItem=Array.from(document.querySelectorAll('.songItem'));
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

songItem.forEach((element,i)=>{

    element.getElementsByTagName('img')[0].src=`covers/${i+1}.jpg`;
    console.log( element.getElementsByTagName('img'));
    element.getElementsByClassName('songTitle')[0].innerText=songs[i].songname;
    console.log( element.getElementsByClassName('songTitle')[0].innerText);

});

playbutton.addEventListener('click', () => {
    if (audio.paused || audio.duration <= 0) {
        audio.play();
        playbutton.classList.remove('fa-play');
        playbutton.classList.add('fa-pause');
        gitcontroller.style.opacity = 1;
    } else {
        audio.pause();
        playbutton.classList.remove('fa-pause');
        playbutton.classList.add('fa-play');
        gitcontroller.style.opacity = 0;
    }
});

audio.addEventListener('timeupdate', () => {
    const progress = parseInt((audio.currentTime * 100) / audio.duration);
    console.log(audio.currentTime);
    console.log(progress);
    progressBar.value = progress;
});
progressBar.addEventListener('change',()=>{
    audio.currentTime=(progressBar.value*audio.duration/100);
})
