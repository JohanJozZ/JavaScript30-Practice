const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressFilled = player.querySelector('.progress__filled');
const playButton = player.querySelector('.toggle');
const sliders = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');

let mouseDown = false;
//build functions

function togglePlay(){
   if (video.paused){
      video.play();  
   }else {
      video.pause();
   }
}
function updateIcon(){
   if (video.paused){
      playButton.innerHTML ="►";
   }else{
      playButton.innerHTML ="❚❚";     
   }
}
function skip(){
   video.currentTime+= parseFloat(this.dataset.skip);
  console.log(skipButtons);
}
function sliderChange(){
   video[this.name] = this.value;
}
function currentProgress(){
   const currentPosition = video.currentTime / video.duration * 100;
   progressFilled.style.flexBasis = `${currentPosition}%`;   
}
function quickMove(e){
   const clickedTime = (e.offsetX / progress.clientWidth)*video.duration;
   console.log(clickedTime);
   video.currentTime = `${clickedTime}`;
}

//add listeners
playButton.addEventListener('click',togglePlay);
video.addEventListener('click',togglePlay);
video.addEventListener('play',updateIcon);
video.addEventListener('pause',updateIcon);
video.addEventListener('timeupdate',currentProgress);
skipButtons.forEach(button=>button.addEventListener('click',skip));
sliders.forEach(slider=>slider.addEventListener('change',sliderChange));
sliders.forEach(slider=>slider.addEventListener('mousemove',sliderChange));
progress.addEventListener('click',quickMove);
progress.addEventListener('mousemove',(e)=>mouseDown && quickMove(e));
progress.addEventListener('mousedown',()=>mouseDown = true);
progress.addEventListener('mouseup',()=>mouseDown = false);
progress.addEventListener('mouseout',()=>mouseDown = false);
