const items = document.querySelector('.items');
let isDown = false;
let isDownX = 0;
let scrolledIn = 0;

function scroll(e){
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX;

  const walk = (x - isDownX) * 2;

  items.scrollLeft = scrolledIn - walk;
}

items.addEventListener('mousedown',(e)=> {
  isDown = true;
  items.classList.add('active');
  isDownX = e.pageX - items.offsetLeft;
  scrolledIn = items.scrollLeft;
});


items.addEventListener('mouseleave',()=> {
  isDown = false; 
  items.classList.remove('active');
});

items.addEventListener('mouseup',()=> {
  isDown = false; 
  items.classList.remove('active');
});

items.addEventListener('mousemove',scroll);

