const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText (e){
  console.log(this.classList.value);
  
  //Stop bubbling elements 
  e.stopPropagation()
}

divs.forEach(div => div.addEventListener('click',logText,{
}));

button.addEventListener('click',()=>{
  console.log('click!!!');
},{
  //So the button won't be pressed multiple times
  once:true
});