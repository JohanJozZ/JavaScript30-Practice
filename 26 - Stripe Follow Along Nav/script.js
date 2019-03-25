const triggers = document.querySelectorAll('.cool>li');
const background = document.querySelector('.dropdownBackground');
const topNav = document.querySelector('.top');

function handleEnter(){
  this.classList.add('trigger-enter');
  setTimeout(()=> {
    //Make sure the prior class was already added before showing the content
    if(this.classList.contains('trigger-enter')){
      this.classList.add('trigger-enter-active');
    }
  },150);
  background.classList.add('open');
  
  //getting the position and size for the background
  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = topNav.getBoundingClientRect();
  const coords = {
    width: dropdownCoords.width,
    height: dropdownCoords.height,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
  };
  
  //applying position and size
  background.style.setProperty('width',`${coords.width}px`);
  background.style.setProperty('height',`${coords.height}px`);
  background.style.setProperty('transform',`translate(${coords.left}px,${coords.top}px)`);
}

function handleLeave(){
  this.classList.remove('trigger-enter', 'trigger-enter-active');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));