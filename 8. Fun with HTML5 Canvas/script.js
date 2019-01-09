const canvas = document.querySelector('#draw');
const content = canvas.getContext('2d');
const reset = document.querySelector('.reset');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
content.strokeStyle = '#BADA55';
content.lineJoin = 'round';
content.lineCap = 'round';
content.lineWidth= 20;

let clicked = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
function draw(e){
   if (!clicked) return;
   //console.log(e);
   
   content.strokeStyle = `hsl(${hue},100%,50%)`;
   
   content.beginPath();
   //start drawing
   content.moveTo(lastX,lastY);
   //go to
   content.lineTo(e.offsetX,e.offsetY);
   content.stroke();
   [lastX,lastY] = [e.offsetX,e.offsetY];
   hue ++;
   if (hue >=360) hue=0;
}

function resetButton(){
   content.clearRect(0,0,canvas.width,canvas.height);
}
function showButton (){
   console.log('clicked');
}

canvas.addEventListener('mousedown', (e) => {
   clicked = true;
   [lastX,lastY] = [e.offsetX,e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', showButton);
canvas.addEventListener('mouseup', () => clicked = false);
canvas.addEventListener('mouseout', () => clicked = false);
reset.addEventListener('mousedown', resetButton);
