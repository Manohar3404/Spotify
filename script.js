console.log('Welcome');
let audio = new Audio('./songs/1.mp3');
const playbutton=document.querySelector('.playbutton1');
playbutton.addEventListener('click',()=>{
    if (audio.paused || audio.duration<=0)
    {
        audio.play();
        playbutton.classList.remove('fa-play');
        playbutton.classList.add('fa-pause');
    }
    else {
        audio.pause();
        playbutton.classList.remove('fa-pause');
        playbutton.classList.add('fa-play');
    }
});
