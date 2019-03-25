const topNav = document.querySelector("#main");
const topNavTrigger = topNav.offsetTop;

function fixNav(){
  
  if (topNavTrigger < window.scrollY){
    document.body.style.paddingTop = topNav.offsetHeight + "px";
    topNav.classList.add("fixed-nav");
  } else{
    document.body.style.paddingTop = 0;
    topNav.classList.remove("fixed-nav");
    
  }
  console.log(topNavTrigger,window.scrollY);
}

window.addEventListener('scroll',fixNav); 