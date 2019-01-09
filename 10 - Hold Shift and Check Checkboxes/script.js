const checkbox = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastClick;


function shifter(e){
   let inBetween = false;
   
   if (e.shiftKey && this.checked){
   
      checkbox.forEach(x=>{
         console.log(x);
         
         if (x===this || x===lastClick){
         inBetween = !inBetween;
         console.log('starting');   
         }
         
         if (inBetween){
         x.checked=true;
         }
         
      });
   }
   lastClick = this;
   }

checkbox.forEach(checkbox => checkbox.addEventListener('click',shifter));
