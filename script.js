console.log('Welcome');
let audio = new Audio('./songs/1.mp3');
const playbutton = document.querySelector('.playbutton1');
const gitcontroller = document.getElementById('gif');
const progressBar = document.querySelector('.bottom-range');
const songItem=Array.from(document.querySelectorAll('.songItem'));
let songidx=1;
const backbutton = document.querySelector('.backbutton');
const forwardbutton= document.querySelector('.forwardbutton');


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
    // console.log( element.getElementsByTagName('img'));
    element.getElementsByClassName('songTitle')[0].innerText=songs[i].songname;
    // console.log( element.getElementsByClassName('songTitle')[0].innerText);
    element.getElementsByClassName('playbutton')[0].id=`${i+1}`

});
function makeallplay() {
    Array.from(document.getElementsByClassName('playbutton')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    });
}


Array.from(document.getElementsByClassName('playbutton')).forEach((element) => {
    element.addEventListener('click',(el)=>{
        // console.log(element);
        if (el.target.classList.contains('fa-play')){
        console.log(el.target);
        makeallplay();
        el.target.classList.remove('fa-play');
        el.target.classList.add('fa-pause');
        console.log('id',el.target.id);
        audio.src=`./songs/${el.target.id}.mp3`;
        songidx=el.target.id;
        audio.play();
        playbutton.classList.remove('fa-play');
        playbutton.classList.add('fa-pause');
        gitcontroller.style.opacity = 1;
        }
        else{
            el.target.classList.remove('fa-pause');
            el.target.classList.add('fa-play');
            audio.pause();
            playbutton.classList.remove('fa-pause');
            playbutton.classList.add('fa-play');
            gitcontroller.style.opacity = 0;
        }
    });
});
// songItemcheck(1);
 function songItemcheck(idx){
    console.log('louda');
    Array.from(document.getElementsByClassName('playbutton')).forEach((element,i)=>{
        if (element.id==idx){
            element.classList.remove('fa-play');
            element.classList.add('fa-pause');
            console.log('111111');
        }
    });


}
playbutton.addEventListener('click', () => {
    if (audio.paused || audio.duration <= 0) {
        audio.play();
        playbutton.classList.remove('fa-play');
        playbutton.classList.add('fa-pause');
        gitcontroller.style.opacity = 1;
        songItemcheck(songidx);
    } else {
        audio.pause();
        playbutton.classList.remove('fa-pause');
        playbutton.classList.add('fa-play');
        gitcontroller.style.opacity = 0;
        makeallplay();
    }
});

audio.addEventListener('timeupdate', () => {
    const progress = parseInt((audio.currentTime * 100) / audio.duration);
    // console.log(audio.currentTime);
    // console.log(progress);
    progressBar.value = progress;
});
progressBar.addEventListener('change',()=>{
    audio.currentTime=(progressBar.value*audio.duration/100);
});
function check(idx){
    if (playbutton.classList.contains('fa-play')){
        playbutton.classList.remove('fa-play');
        playbutton.classList.add('fa-pause');
        gitcontroller.style.opacity = 1;
        
    }
    songItemcheck(idx);
}
backbutton.addEventListener('click',()=>{
    if (songidx <= 1){
        songidx=1;
    }
    else{
        songidx-=1;
    }
    console.log('back',songidx);
    audio.src=`./songs/${songidx}.mp3`;
    audio.play();
    makeallplay();
    check(songidx);
});
forwardbutton.addEventListener('click',()=>{
    songidx+=1;

    if(songidx>10){
        songidx=1;
    }

        
    audio.src=`./songs/${songidx}.mp3`;
    audio.play();
    makeallplay();
    check(songidx);
})