console.log("spotify playlist");
// Initialize variables
let audioElement = new Audio('./songs/1.mp3')

// audioElement.play();
// audioElement.play();

let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

// songItems html collection hai isliye hume usse pehle array mai convert krna hoga


let songs = [
    {songName: "Salam-e-Ishq", filePath:"./songs/1.mp3",coverPath:"./covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath:"./songs/2.mp3",coverPath:"./covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath:"./songs/3.mp3",coverPath:"./covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath:"./songs/4.mp3",coverPath:"./covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath:"./songs/5.mp3",coverPath:"./covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath:"./songs/6.mp3",coverPath:"./covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath:"./songs/7.mp3",coverPath:"./covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath:"./songs/8.mp3",coverPath:"./covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath:"./songs/9.mp3",coverPath:"./covers/1.jpg"},
]


songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].filePath;
})


// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
         audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
         gif.style.opacity = 0;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})


audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    // update seekbar
    // ab hum update krenge ki kitne percent yeh chal chuka hai 
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})


myProgressBar.addEventListener('change',()=>{
     
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;

})
