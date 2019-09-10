let countdown;
const timerDisplay=document.querySelector('.display__time-left');
const endDisplay=document.querySelector('.display__end-time');
const buttons=document.querySelectorAll('[data-time]');

function timer(seconds){
  //clear existing timers
  clearInterval(countdown);
  
  const now = Date.now();
  const then = now + seconds*1000;
  displayTime(seconds);
  displayEndTime(then);
  
  countdown = setInterval(()=>{
    const secondsLeft = Math.round((then-Date.now())/1000)
    //Stop it on 0
    if(secondsLeft < 0 ){
      clearInterval(countdown);
      return;
    }
    displayTime(secondsLeft);
  },1000); 
}

function displayTime(seconds){
  const minutes = Math.floor(seconds/60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds<10 ? '0' : ''}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent=display;
}

function displayEndTime(timestamp){
  const finish = new Date(timestamp);
  const hours = finish.getHours();
  const nonEuropeanHours = hours > 12 ? hours-12 : hours;
  const minutes = finish.getMinutes();
  const time = `Timer ends at ${nonEuropeanHours}:${minutes}`;
  endDisplay.textContent=time;
}

function startTimer(){
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}
buttons.forEach(button=> button.addEventListener('click',startTimer));

document.customForm.addEventListener('submit',function(e){
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins*60);
  this.reset();
  
})