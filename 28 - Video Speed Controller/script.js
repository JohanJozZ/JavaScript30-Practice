const video = document.querySelector('.flex');
const speed = document.querySelector('.speed');
const speedBar = speed.querySelector('.speed-bar');
let isDown = false;

function videoRate(e){
if (!isDown) return;
  const y = e.pageY - this.offsetTop;  
  const percent = Math.round(y/this.offsetHeight * 100);
  const min = 0.5;
  const max = 3;
  speedBar.style.height = percent + '%';
  const playbackRate = percent/100 * (max-min) + min ; 
  speedBar.textContent = playbackRate.toFixed(2) + 'x';
  video.playbackRate = playbackRate;
}
speed.addEventListener('mousedown',()=>isDown = true);
speed.addEventListener('mouseup',()=>isDown = false);
speed.addEventListener('mouseleave',()=>isDown = false);
speed.addEventListener('mousemove',videoRate);