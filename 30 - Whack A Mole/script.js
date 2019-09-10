const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let prevHole;
let timeUp = false;
let score;

function randomTime(min,max){
  return Math.round(Math.random()*(max-min)+min);
}

function holeSelect(holes){
  const index = Math.floor(Math.random()*holes.length);
  const hole = holes[index];
  
  if (prevHole === hole){
    console.log ('Oops, you got the same hole');
    return holeSelect(holes); 
    }
  prevHole = hole;
  return hole;
  }

function mole(){
  const time = randomTime(300,1000);
  const hole = holeSelect(holes);
  hole.classList.add('up');
  setTimeout(()=>{
  hole.classList.remove('up');
  if (!timeUp) mole();
  },time);
}

function startGame(){
  scoreBoard.textContent=0;
  timeUp = false;
  score = 0;
  mole();
  setTimeout(()=>timeUp=true,10000);
}

function hit(e){
  if (!e.isTrusted) return; //cheater trap
  score++;
  scoreBoard.textContent = score;
}

moles.forEach(mole =>mole.addEventListener('click',hit));
