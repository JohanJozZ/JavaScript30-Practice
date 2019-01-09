const hero = document.querySelector('.hero');
const header = hero.querySelector('h1');
const walk = 100 //100px

function shadowAngle(e){
  //const height = hero.offsetHeight;
  //const width = hero.offsetWidth;
  //FASTER WAY TO CREATE BOTH  
  const {offsetHeight:height, offsetWidth:width} = hero;
  //again
  let {offsetX:x, offsetY:y}=e;
  
  if (this !== e.target){
  x = x + e.target.offsetLeft;
  y = y + e.target.offsetTop;
  }
  
  const xWalk = Math.round((x/width * walk) - walk/2);
  const yWalk = Math.round((y/height * walk) - walk/2);
  
  header.style.textShadow = `${xWalk*-1}px ${yWalk*-1}px 0 rgba(255,125,125,0.7)`;
  
  
}

hero.addEventListener('mousemove', shadowAngle);