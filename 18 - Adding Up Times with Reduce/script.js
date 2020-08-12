
// My early version, works but is not as efficient. Used for each, instead of map and didn't know how to transform minutes from text to numbers
// This was coded without looking the video at all.

//const videos = document.querySelectorAll('.videos li');
//let totalSec = 0;
//
//function totalTime(){
//  videos.forEach(vid => {
//    const minToSec = vid.dataset.time.split(':')[0] * 60;
//    const sec = vid.dataset.time.split(':')[1] * 1;
//    totalSec += minToSec + sec;
//    console.log(minToSec,sec,totalSec);
//  });
//  
//  const finalHours = Math.floor(totalSec / 3600);
//  const finalMinutes = Math.floor((totalSec % 3600) / 60);
//  const finalSeconds = (totalSec % 3600) % 60;
//  console.log(`${finalHours}:${finalMinutes}:${finalSeconds}`);
//}
//totalTime()

//Second attempt, replacing the for each loop for map and reduce
const videos = [...document.querySelectorAll('[data-time]')];

totalSeconds = videos
.map(vid =>{
    const [mins, secs] = vid.dataset.time.split(':').map(parseFloat);
    return (mins * 60) + secs
})
.reduce((total,seconds) => total+=seconds,0);

    
//Created a second variable to store the ammount of seconds untransformed
let seconds = totalSeconds;
const finalHour = Math.floor(seconds / 3600);
seconds = seconds % 3600;
const finalMin = Math.floor(seconds / 60);
seconds = seconds % 60;

console.log(`${finalHour}:${finalMin}:${seconds}`);
