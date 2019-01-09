const panels = document.querySelectorAll('.panel');

function clickOpen(){
  this.classList.toggle('open');
}
function translateWords(e){
  if (e.propertyName.includes('flex')){
    this.classList.toggle('open-active');  
  }
  
}
panels.forEach(panel=> panel.addEventListener('click',clickOpen));
panels.forEach(panel=> panel.addEventListener('transitionend',translateWords));