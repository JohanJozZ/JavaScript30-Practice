const timeTags = [...document.querySelectorAll('[data-time]')];

const totalTime = timeTags
                  .map(li => li.dataset.time)
                  .map(time => {const [mins,secs] = time.split(':').map(parseFloat);
                                return mins*60+secs;})
                  .reduce((total,vidSeconds)=> total + vidSeconds);

let secondsLeft = totalTime;
const hours = Math.floor(secondsLeft/3600);
secondsLeft = secondsLeft % 3600;
const minutes = Math.floor(secondsLeft/60);
secondsLeft = secondsLeft % 60;

console.log(hours,minutes,secondsLeft);